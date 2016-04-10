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
            this.assertTrue(printer.getBuffer().search("Failures: 1") != -1);
        }

    }
}
