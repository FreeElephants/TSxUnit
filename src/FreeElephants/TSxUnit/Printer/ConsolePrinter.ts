namespace FreeElephants.TSxUnit.Printer {
    export class ConsolePrinter implements PrinterInterface {
        printError(): void {
            console.log('E');
        }

        printSuccess(): void {
            console.log('.');
        }

        printFail(): void {
            console.log('F');
        }

    }
}
