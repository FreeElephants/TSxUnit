namespace FreeElephants.TSxUnit.Printer {

    import Summary = FreeElephants.TSxUnit.Suite.Summary;

    export class ConsolePrinter implements PrinterInterface {

        private buffer: string = "";

        printError(): void {
            this.addToBuffer("E");
        }

        printSuccess(): void {
            this.addToBuffer(".");
        }

        printFail(): void {
            this.addToBuffer("F");
        }

        addToBuffer(content: string): void {
            this.buffer += content;
        }

        getBuffer(): string {
            return this.buffer;
        }

        flushBuffer(): number {
            let buffer = this.getBuffer();
            console.log(buffer);
            return buffer.length;
        }

        printSummary(suiteSummary: Summary): void {
            let summaryContent = "\n";
            let util = require("util");

            if (suiteSummary.isOk()) {
                let testsCounter = suiteSummary.getNumberOfPassed();
                let assertCounter = suiteSummary.getNumberOfAssertions();
                summaryContent += util.format("OK (%d tests, %d assertions)", testsCounter, assertCounter);
            } else {
                let failuresCounter = suiteSummary.getNumberOfFailed();
                let errorsCounter = suiteSummary.getNumberOfErrors();

                summaryContent += "FAILURES!\n";

                if (failuresCounter > 0) {
                    summaryContent += util.format("Failures: %d", failuresCounter);
                }

                if (errorsCounter > 0) {
                    summaryContent += util.format("Errors: %d", errorsCounter);
                }
            }

            summaryContent +=
                this.addToBuffer(summaryContent);
        }


    }
}
