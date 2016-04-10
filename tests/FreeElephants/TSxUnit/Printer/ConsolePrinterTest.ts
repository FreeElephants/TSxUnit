namespace FreeElephants.TSxUnit.Printer {

    import Summary = FreeElephants.TSxUnit.Suite.Summary;
    import ResultList = FreeElephants.TSxUnit.Suite.ResultList;
    export class ConsolePrinterTest extends TestCase {

        public testSummaryWithFailed() {
            let printer = new ConsolePrinter();
            let summary = this.getMockBuilder(Summary)
                .stubMethodWithValue("getNumberOfFailed", 1)
                .getMock();

            printer.printSummary(summary);

            let buffer = printer.getBuffer();

            this.assertContains("FAILURES!", buffer);
            this.assertContains("Failures: 1", buffer);
        }

        public testSummaryWithError() {
            let printer = new ConsolePrinter();
            let summary = this.getMockBuilder(Summary)
                .stubMethodWithValue("getNumberOfErrors", 1)
                .getMock();

            printer.printSummary(summary);

            let buffer = printer.getBuffer();

            this.assertContains("FAILURES!", buffer);
            this.assertContains("Errors: 1", buffer);
        }

    }
}
