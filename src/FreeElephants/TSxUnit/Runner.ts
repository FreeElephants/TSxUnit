///<reference path="Printer/PrinterFactory.ts"/>
///<reference path="Printer/PrinterInterface.ts"/>
///<reference path="Printer/PrinterType.ts"/>

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

            return this.numberOfFailed;
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
                    var candidate:Function = testCasePrototype[propName];
                    return typeof candidate === 'function' && propName.match(/^test/);
                });
            return testMethods;

        }


        protected runTestCaseMethod(testCase:TestCase, methodName:string) {
            this.debug("run test " + testCase.constructor.name + ":" + methodName);
            testCase.setUp();
            try {
                testCase[methodName]();
                this.numberOfPassed++;
                this.printer.printSuccess();
            } catch (e:FailedAssertionException) {
                this.printer.printFail();
                this.numberOfFailed++;
            }
            testCase.tearDown();
        }
    }
}
