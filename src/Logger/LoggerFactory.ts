import {Level} from "log4js";
import {levels} from "log4js";
import {LoggerInterface} from "./LoggerInterface";
import {LoggerAdapter} from "./LoggerAdapter";

export class LoggerFactory {

    private log4js = require("log4js");

    static DEBUG = levels.DEBUG;
    static WARN = levels.WARN;

    public createLogger(level: Level = levels.WARN, category: string = "default"): LoggerInterface {
        let logger = this.log4js.getLogger(category);
        logger.setLevel(level);
        let adapter = new LoggerAdapter(logger);
        return adapter;
    }
}

export function createLoggerInstance(category?: string): LoggerInterface {
    let minimist = require("minimist");
    let args = minimist(process.argv.slice(2));

    let loggerFactory = new LoggerFactory();

    let loggerLevel;

    if (args["debug"]) {
        loggerLevel = LoggerFactory.DEBUG;
    }

    let logger = loggerFactory.createLogger(loggerLevel, category);

    return logger;
}

