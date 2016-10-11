import {LoggerInterface} from "./LoggerInterface";

export class LoggerAdapter implements LoggerInterface {

    public constructor(private logger) {

    }

    debug(msg: string, args?: any): void {
        this.logger.debug(msg, args);
    }
}
