import {PrinterType, ConsolePrinter, UnsupportedPrinterTypeException, PrinterInterface} from "./index";

export class PrinterFactory {

    public buildPrinter(type: PrinterType): PrinterInterface {
        let printer: PrinterInterface;
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