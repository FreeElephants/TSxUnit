///<reference path="Printer/PrinterFactory.ts"/>
///<reference path="Printer/PrinterInterface.ts"/>
///<reference path="Printer/PrinterType.ts"/>
///<reference path="Assert/FailedAssertionException.ts"/>

namespace FreeElephants.TSxUnit {

    import FailedAssertionException = FreeElephants.TSxUnit.Assert.FailedAssertionException;
    import PrinterType = FreeElephants.TSxUnit.Printer.PrinterType;
    import PrinterInterface = FreeElephants.TSxUnit.Printer.PrinterInterface;
    import PrinterFactory = FreeElephants.TSxUnit.Printer.PrinterFactory;

    export class Runner {

        private isDebugVerboseOn = true;
        private printer:PrinterInterface;
        private numberOfPassed = 0;
        private numberOfFailed = 0;
        private numberOfErrors = 0;

        public constructor(private map:LaunchMapInterface, output = 'console') {
            var printerFactory = new PrinterFactory();
            this.printer = printerFactory.buildPrinter(PrinterType[output]);
        }

        public run(pathPathToRun:string = '.*', testMethodToRun:string = '.*'):number {
            var testCases = this.map.getTestCases();
            var pathToRunRegExp = this.buildRunRegExp(pathPathToRun);

            for (var testCaseFileName in testCases) {
                if (pathToRunRegExp.test(testCaseFileName)) {
                    var testCase = testCases[testCaseFileName];
                    this.debug("run test case", testCase);
                    this.runTestCase(testCase, testMethodToRun);
                }
            }

            return this.getExitCode();
        }

        private getExitCode():number {
            return this.numberOfFailed + this.numberOfErrors;
        }

        private debug(msg, context = ''):void {
            if (this.isDebugVerboseOn === true) {
                console.log(msg, context);
            }
        }

        protected runTestCase(testCase:TestCase, testMethodToRun:string = '.*'):void {
            var testCaseMethods = this.getTestMethods(testCase);
            var testMethodToRunRegExp = this.buildRunRegExp(testMethodToRun);
            for (var i in testCaseMethods) {
                var testMethod = testCaseMethods[i];
                if(testMethodToRunRegExp.test(testMethod)){
                    this.runTestCaseMethod(testCase, testMethod);
                }
            }
        }

        private getTestMethods(testCase:TestCase) {
            var testCasePrototype = testCase.constructor.prototype;
            var testMethods = Object.getOwnPropertyNames(testCasePrototype)
                .filter(function (propName:string) {
                    var candidate = testCasePrototype[propName];
                    return typeof candidate === 'function' && this.isTestMethod(propName);
                }, this);
            return testMethods;
        }

        private isTestMethod(methodName:string):boolean {
            return methodName.substring(0, 4) === 'test';
        }


        protected runTestCaseMethod(testCase:TestCase, methodName:string) {
            this.debug("run test " + methodName);
            testCase.setUp();
            try {
                testCase[methodName]();
                this.numberOfPassed++;
                this.printer.printSuccess();
            } catch (e) {
                if (e instanceof FailedAssertionException) {
                    this.printer.printFail();
                    this.numberOfFailed++;
                } else {
                    this.printer.printError();
                    this.numberOfErrors++;
                }
            }
            testCase.tearDown();
        }

        private buildRunRegExp(pathPathToRun:string):RegExp {
            if (pathPathToRun === '') {
                pathPathToRun = '.*';
            }
            return new RegExp(pathPathToRun);
        }
    }
}
