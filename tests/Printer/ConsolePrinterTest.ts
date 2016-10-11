import {AbstractUnitTestCase} from "../../dist/index";
import {ConsolePrinter} from "../../dist/Printer/index";
import {AbstractResultAdapter, TestCaseMethod} from "../../dist/Test/index";
import {Summary} from "../../dist/Suite/index";

export class ConsolePrinterTest extends AbstractUnitTestCase {

    public testSummaryWithFailed() {
        let printer = new ConsolePrinter();
        // TODO mock interface here instead abstract class, after we can mock its.
        let reason = this.getMockBuilder(AbstractResultAdapter)
            .stubMethodWithValue("getMessage", "Failed asserting that foo is bar. ")
            .stubMethodWithValue("getStack", "")
            .getMock();
        let failuredTest = this.getMockBuilder(TestCaseMethod)
            .stubMethodWithValue("getFullyQualifiedName", "Foo.testBar")
            .stubMethodWithValue("getSource", "tests/Foo.ts")
            .stubMethodWithValue("getResult", reason)
            .getMock();
        let summary = this.getMockBuilder(Summary)
            .stubMethodWithValue("getNumberOfFailed", 1)
            .stubMethodWithValue("getFailedTests", [failuredTest])
            .getMock();

        printer.printSummary(summary);

        let buffer = printer.getBuffer();

        this.assertContains("1) Foo.testBar() [tests/Foo.ts]", buffer);
        this.assertContains("Failed asserting that foo is bar. ", buffer);
        this.assertContains("FAILURES!", buffer);
        this.assertContains("Failures: 1", buffer);
    }

    public testSummaryWithError() {
        let printer = new ConsolePrinter();
        let reason = this.getMockBuilder(AbstractResultAdapter)
            .stubMethodWithValue("getMessage", "Error!11")
            .stubMethodWithValue("getStack", "")
            .getMock();
        let errorTest = this.getMockBuilder(TestCaseMethod)
            .stubMethodWithValue("getFullyQualifiedName", "Foo.testBar")
            .stubMethodWithValue("getSource", "tests/Foo.ts")
            .stubMethodWithValue("getResult", reason)
            .getMock();
        let summary = this.getMockBuilder(Summary)
            .stubMethodWithValue("getNumberOfErrors", 1)
            .stubMethodWithValue("getErrorsTests", [errorTest])
            .getMock();

        printer.printSummary(summary);

        let buffer = printer.getBuffer();

        this.assertContains("1) Foo.testBar() [tests/Foo.ts]", buffer);
        this.assertContains("Error!11", buffer);
        this.assertContains("FAILURES!", buffer);
        this.assertContains("Errors: 1", buffer);
    }

}
