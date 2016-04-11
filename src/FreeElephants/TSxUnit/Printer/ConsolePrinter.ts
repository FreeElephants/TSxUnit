///<reference path="../Runner.ts"/>
///<reference path="../Test/TestCaseMethod.ts"/>

namespace FreeElephants.TSxUnit.Printer {

    import Summary = FreeElephants.TSxUnit.Suite.Summary;
    import TestCaseMethod = FreeElephants.TSxUnit.Test.TestCaseMethod;

    export class ConsolePrinter implements PrinterInterface {

        private buffer: string = "";
        private util = require("util");

        printIntro(): void {
            let introString = this.format("TSxUnit %s by FreeElephants. \n\n", TS_X_UNIT_VERSION);
            this.addToBuffer(introString);
        }

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

        printExecutionTime(timeInMs: number): void {
            let timeString = this.format("\nTime: %s. \n", this.getHumanTimeString(timeInMs));
            this.addToBuffer(timeString);
        }

        /**
         * TODO format minutes
         * @param timeInMs
         */
        private getHumanTimeString(timeInMs: number): string {
            let timeInSec = timeInMs / 1000;
            return this.format("%d sec", timeInSec.toFixed(3));
        }

        printSummary(suiteSummary: Summary): void {
            let summaryContent = "\n\n";

            let testsCounter = suiteSummary.getNumberOfPassed();
            let assertCounter = suiteSummary.getNumberOfAssertions();

            if (suiteSummary.isOk()) {
                summaryContent += this.format("OK (%d tests, %d assertions)", testsCounter, assertCounter);
            } else {
                let errorsCounter = suiteSummary.getNumberOfErrors();
                let hasErrors = errorsCounter > 0;
                let failuresCounter = suiteSummary.getNumberOfFailed();
                let hasFailures = failuresCounter > 0;

                if (hasErrors) {
                    summaryContent += this.buildFailuresHeader("error", errorsCounter);

                    suiteSummary.getErrorsTests().forEach(function (method: TestCaseMethod, i: number) {
                        summaryContent += this.buildFailureReason(method, i);
                    }, this);
                }

                if (hasFailures) {
                    summaryContent += this.buildFailuresHeader("failure", failuresCounter);

                    suiteSummary.getFailedTests().forEach(function (method: TestCaseMethod, i: number) {
                        summaryContent += this.buildFailureReason(method, i);
                    }, this);
                }

                // format summary footer
                summaryContent += "FAILURES!\n";
                summaryContent += this.format("Tests: %d, Assertions: %d, ", testsCounter, assertCounter);
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
            return this.format("There %s %d %s:\n", verb, counter, noun);
        }

        private buildFailureReason(method: TestCaseMethod, i: number): string {
            return this.format("%d) %s() [%s] \n", i + 1, method.getFullyQualifiedName(), method.getSource())
                + this.format("%s\n\n%s\n\n", method.getResult().getMessage(), method.getResult().getStack());
        }

    }
}
