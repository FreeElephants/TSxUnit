namespace FreeElephants.TSxUnit.Printer {

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

    }
}
