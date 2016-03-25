namespace FreeElephants.TSxUnit.Printer {

    export class PrinterFactory {

        public buildPrinter(type:PrinterType):PrinterInterface {
            var printer:PrinterInterface;
            switch (type) {
                case PrinterType.console:
                    printer = new ConsolePrinter();
                    break;
                default:
                    throw new UnsupportedPrinterTypeException("printer type `" + type + "` not supported. ");
            }

            return printer;
        }

    }
}
