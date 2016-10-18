import {AbstractUnitTestCase} from "./../index";
import {TestCaseMethod} from "./../Test/index";
import {ResultList} from "./";
import {FailedAssertionException} from "./../Assert/index";
import {TestCaseMethodDetectionStrategyInterface, TestCaseMethodNameBasedDetector} from "./../Test/Method/index";
import {PrinterInterface} from "./../Printer/index";
import {Summary} from "./";
import {LoggerInterface} from "./../Logger/LoggerInterface";
import {MessageProcessor} from "../Assert/MessageProcessor";

export class Runner {

    private passedList = new ResultList();
    private failedList = new ResultList();
    private errorList = new ResultList();
    private testCaseMethodDetector: TestCaseMethodDetectionStrategyInterface;

    public constructor(private logger: LoggerInterface, private printer: PrinterInterface, testCaseMethodDetector?: TestCaseMethodDetectionStrategyInterface) {
        this.testCaseMethodDetector = testCaseMethodDetector ? testCaseMethodDetector : new TestCaseMethodNameBasedDetector();
    }

    public run(launchMap: {}, pathToRunRegExp: RegExp, testMethodToRun: RegExp) {
        let startTimestamp = new Date().getTime();
        let totalNumberOfAssertions = 0;

        this.printer.printIntro();

        for (let testCaseFileName in launchMap) {
            if (pathToRunRegExp.test(testCaseFileName)) {
                let testCase = launchMap[testCaseFileName];
                let runDebugMsg = "run test case " + testCase.constructor.name + " (" + testCaseFileName + ")";
                this.logger.debug(runDebugMsg);
                totalNumberOfAssertions += this.runTestCase(testCase, testCaseFileName, testMethodToRun);
            } else {
                let skippedMsg = testCaseFileName + " was skipped because not match with given pattern: '" + "' (" + pathToRunRegExp + ")";
                this.logger.debug(skippedMsg);
            }
        }

        this.printer.printExecutionTime(new Date().getTime() - startTimestamp);

        let suiteSummary = new Summary(this.passedList, this.failedList, this.errorList, totalNumberOfAssertions);

        this.printer.printSummary(suiteSummary);

        this.printer.flushBuffer();

        return this.getExitCode();
    }

    private getExitCode(): number {
        return this.failedList.count() + this.errorList.count();
    }

    protected runTestCase(testCase: AbstractUnitTestCase, testCaseFileName: string, testMethodToRunRegExp: RegExp): number {
        let testCaseMethods = this.getTestMethods(testCase);

        testCase.setUpBeforeClass();

        for (let i in testCaseMethods) {
            let testMethod = testCaseMethods[i];
            let test = new TestCaseMethod(testCase, testCaseFileName, testMethod);
            if (testMethodToRunRegExp.test(testMethod)) {
                let runDebugMsg = "> run ::" + testMethod + "()";
                this.logger.debug(runDebugMsg);
                this.runTestCaseMethod(test);
            } else {
                let skippedDebugMsg = "> " + test.getMethod() + " is skipped because not match with pattern '" + "' (" + testMethodToRunRegExp + ")";
                this.logger.debug(skippedDebugMsg);
            }
        }

        testCase.tearDownAfterClass();

        return testCase.getNumberOfAssertions();
    }

    protected runTestCaseMethod(test: TestCaseMethod) {
        let testCase = test.getTestCase();
        testCase.setUp();

        try {
            test.execute();
            if (testCase.hasExpectedException()) {
                let expectedException = testCase.pullExpectedException();
                MessageProcessor.handleFailedAssertion(expectedException.getUserMessage(), "Expected exception not throws. ");
            } else {
                this.passedList.add(test);
                this.printer.printSuccess();
            }
        } catch (e) {
            if (testCase.hasExpectedException()) {
                let expectedExceptionContainer = testCase.pullExpectedException();
                let expectedExceptionType = expectedExceptionContainer.getExceptionType();
                if (e instanceof expectedExceptionType) {
                    this.passedList.add(test);
                    this.printer.printSuccess();
                } else {
                    let expectedTypeName = expectedExceptionType.name;
                    let actualTypeName = e.constructor.name;
                    let description = `'${expectedTypeName}' expected, but '${actualTypeName}' is throws. `;
                    let userMessage = expectedExceptionContainer.getUserMessage();
                    let failedMessage = MessageProcessor.concatFailureMessageWithDescription(userMessage, description);
                    this.failedList.add(test, new FailedAssertionException(failedMessage));
                    this.printer.printFail();
                }
            } else if (e instanceof FailedAssertionException) {
                this.failedList.add(test, e);
                this.printer.printFail();
            } else {
                this.errorList.add(test, e);
                this.printer.printError();
            }
        }

        testCase.tearDown();
    }

    private getTestMethods(testCase: AbstractUnitTestCase) {
        let testCasePrototype = testCase.constructor.prototype;
        let testMethods = Object.getOwnPropertyNames(testCasePrototype)
            .filter(function (propName: string) {
                let candidate = testCasePrototype[propName];
                let isFunction: boolean = typeof candidate === "function";
                let isTestMethod: boolean = this.testCaseMethodDetector.isTestMethod(testCase, propName);
                return isFunction && isTestMethod;
            }, this);
        return testMethods;
    }


}
