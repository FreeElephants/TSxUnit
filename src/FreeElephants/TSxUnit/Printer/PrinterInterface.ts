namespace FreeElephants.TSxUnit.Printer {

    import Summary = FreeElephants.TSxUnit.Suite.Summary;

    export interface PrinterInterface {

        /**
         * Add message about passed test to buffer.
         */
        printSuccess(): void;

        /**
         * Add message about failed test to buffer.
         */
        printFail(): void;

        /**
         * Add message about error in test to buffer.
         */
        printError(): void;

        /**
         * Return data in buffer.
         */
        getBuffer(): string;

        /**
         * Add content to end of buffer
         *
         * @param content: string
         */
        addToBuffer(content: string): void;

        /**
         * Send buffer content to output and return it size in bytes.
         */
        flushBuffer(): number;

        /**
         * Add summary info.
         *
         * @param suiteSummary
         */
        printSummary(suiteSummary: Summary): void;
    }
}
