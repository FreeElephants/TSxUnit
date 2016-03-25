namespace FreeElephants.TSxUnit.Printer {
    export class ConsolePrinter implements PrinterInterface {
        printSuccess() {
            console.log('.');
        }

        printFail() {
            console.log('F');
        }

    }
}
