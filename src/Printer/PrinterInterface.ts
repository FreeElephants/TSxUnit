import {Summary} from "../Suite/index";

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
     */
    addToBuffer(content: string): void;

    /**
     * Send buffer content to output and return it size in bytes.
     */
    flushBuffer(): number;

    /**
     * Add intro info to output
     */
    printIntro(): void;

    /**
     * Print string with execution time
     */
    printExecutionTime(timeInMs: number): void;
    /**
     * Add summary info.
     *
     */
    printSummary(suiteSummary: Summary): void;


}
