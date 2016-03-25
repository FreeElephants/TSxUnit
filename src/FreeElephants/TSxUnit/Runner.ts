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

        public run():number {
            var testCases = this.map.getTestCases();
            for (var testCaseFileName in testCases) {
                var testCase = testCases[testCaseFileName];
                this.debug("run test case", testCase);
                this.runTestCase(testCase);
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

        protected runTestCase(testCase:TestCase):void {
            var testCaseMethods = this.getTestMethods(testCase);
            for (var i in testCaseMethods) {
                var testMethod = testCaseMethods[i];
                this.runTestCaseMethod(testCase, testMethod);
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
            this.debug("run test " + Object.getPrototypeOf(testCase) + ":" + methodName);
            testCase.setUp();
            try {
                testCase[methodName]();
                this.numberOfPassed++;
                this.printer.printSuccess();
            } catch (e) {
                if(e instanceof FailedAssertionException){
                    this.printer.printFail();
                    this.numberOfFailed++;
                } else {
                    this.printer.printError();
                    this.numberOfFailed++;
                }
            }
            testCase.tearDown();
        }
    }
}
