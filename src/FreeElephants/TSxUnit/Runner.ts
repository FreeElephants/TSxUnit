///<reference path="Printer/PrinterFactory.ts"/>
///<reference path="Printer/PrinterInterface.ts"/>
///<reference path="Printer/PrinterType.ts"/>
///<reference path="Assert/FailedAssertionException.ts"/>
///<reference path="Suite/Summary.ts"/>
///<reference path="Suite/ResultList.ts"/>

namespace FreeElephants.TSxUnit {

    import FailedAssertionException = FreeElephants.TSxUnit.Assert.FailedAssertionException;
    import PrinterType = FreeElephants.TSxUnit.Printer.PrinterType;
    import PrinterInterface = FreeElephants.TSxUnit.Printer.PrinterInterface;
    import PrinterFactory = FreeElephants.TSxUnit.Printer.PrinterFactory;
    import Summary = FreeElephants.TSxUnit.Suite.Summary;
    import ResultList = FreeElephants.TSxUnit.Suite.ResultList;

    export class Runner {

        private isDebugVerboseOn = true;
        private printer: PrinterInterface;
        private numberOfPassed = 0;
        private numberOfFailed = 0;
        private numberOfErrors = 0;

        private passedList = new ResultList();
        private failedList = new ResultList();
        private errorList = new ResultList();

        public constructor(private map: LaunchMapInterface, output = "console") {
            let printerFactory = new PrinterFactory();
            this.printer = printerFactory.buildPrinter(PrinterType[output]);
        }

        public run(pathPathToRun: string = ".*", testMethodToRun: string = ".*"): number {
            let testCases = this.map.getTestCases();
            let pathToRunRegExp = this.buildRunRegExp(pathPathToRun);

            for (let testCaseFileName in testCases) {
                if (pathToRunRegExp.test(testCaseFileName)) {
                    let testCase = testCases[testCaseFileName];
                    // this.debug("run test case", testCase);
                    this.runTestCase(testCase, testMethodToRun);
                }
            }

            let suiteSummary = new Summary(this.passedList, this.failedList, this.errorList);
            this.printer.printSummary(suiteSummary);

            this.printer.flushBuffer();

            return this.getExitCode();
        }

        private getExitCode(): number {
            return this.numberOfFailed + this.numberOfErrors;
        }

        private debug(msg, context = ""): void {
            if (this.isDebugVerboseOn === true) {
                console.log(msg, context);
            }
        }

        protected runTestCase(testCase: TestCase, testMethodToRun: string = ".*"): void {
            let testCaseMethods = this.getTestMethods(testCase);
            let testMethodToRunRegExp = this.buildRunRegExp(testMethodToRun);
            for (let i in testCaseMethods) {
                let testMethod = testCaseMethods[i];
                if (testMethodToRunRegExp.test(testMethod)) {
                    this.runTestCaseMethod(testCase, testMethod);
                }
            }
        }

        private getTestMethods(testCase: TestCase) {
            let testCasePrototype = testCase.constructor.prototype;
            let testMethods = Object.getOwnPropertyNames(testCasePrototype)
                .filter(function (propName: string) {
                    let candidate = testCasePrototype[propName];
                    return typeof candidate === "function" && this.isTestMethod(propName);
                }, this);
            return testMethods;
        }

        private isTestMethod(methodName: string): boolean {
            return methodName.substring(0, 4) === "test";
        }


        protected runTestCaseMethod(testCase: TestCase, methodName: string) {
            // this.debug("run test " + methodName);
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

        private buildRunRegExp(pathPathToRun: string): RegExp {
            if (pathPathToRun === "") {
                pathPathToRun = ".*";
            }
            return new RegExp(pathPathToRun);
        }
    }
}
