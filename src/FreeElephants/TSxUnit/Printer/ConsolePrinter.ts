namespace FreeElephants.TSxUnit.Printer {

    import Summary = FreeElephants.TSxUnit.Suite.Summary;

    export class ConsolePrinter implements PrinterInterface {

        private buffer: string = "";
        private util = require("util");

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

            if (suiteSummary.isOk()) {
                let testsCounter = suiteSummary.getNumberOfPassed();
                let assertCounter = suiteSummary.getNumberOfAssertions();
                summaryContent += this.format("OK (%d tests, %d assertions)", testsCounter, assertCounter);
            } else {
                let errorsCounter = suiteSummary.getNumberOfErrors();
                let hasErrors = errorsCounter > 0;
                let failuresCounter = suiteSummary.getNumberOfFailed();
                let hasFailures = failuresCounter > 0;


                if (hasErrors) {
                    summaryContent += this.buildFailuresHeader("error", errorsCounter);
                    // TODO format errors description
                }

                if (hasFailures) {
                    summaryContent += this.buildFailuresHeader("failure", failuresCounter);
                    // TODO format failures description
                }

                // format summary footer
                summaryContent += "FAILURES!\n";

                if (hasErrors) {
                    summaryContent += this.format("Errors: %d", errorsCounter);
                }

                if (hasFailures) {
                    summaryContent += this.format("Failures: %d", failuresCounter);
                }
            }

            this.addToBuffer(summaryContent);
        }

        private format(format, ...param: any[]): string {
            return this.util.format(format, ...param);
        }

        private buildFailuresHeader(noun: string, counter: number): string {
            let verb = "was";
            if (counter > 1) {
                verb = "were";
                noun += "s";
            }
            return this.format("There %s %d %s", verb, counter, noun);
        }

    }
}
