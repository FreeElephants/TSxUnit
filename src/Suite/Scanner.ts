import {LoggerInterface} from "./../Logger/LoggerInterface";
import {PathNotExistsException} from "./Exception/PathNotExistsException";
import {RuntimeException} from "../Exception/RuntimeException";

export class Scanner {

    private logger: LoggerInterface;
    private collectedTestCases = {};
    private path = require("path");
    private fs = require("fs");
    private DS: string;

    public constructor(logger: LoggerInterface) {
        this.logger = logger;
        this.DS = this.path.sep;
    }

    public getSuiteMap(path: string, pwd: string): {} {
        let absolutePathToSuiteLocation = this.path.normalize(pwd + this.DS + path);
        this.debug("launch suite building in " + absolutePathToSuiteLocation);
        if (this.fs.existsSync(absolutePathToSuiteLocation)) {
            this.handlePath(absolutePathToSuiteLocation, absolutePathToSuiteLocation);
        } else {
            throw new PathNotExistsException("Path to suite '" + absolutePathToSuiteLocation + "' not exists. ");
        }
        return this.collectedTestCases;
    }

    public handlePath(path: string, absoluteSuitePath: string) {
        let testsDir = this.fs.readdirSync(path);
        testsDir.forEach(function (itemName: string) {
            let itemPath: string = this.path.normalize(path + itemName);
            this.debug("handle path " + itemPath);
            let itemStat = this.fs.statSync(itemPath);
            if (itemStat.isFile()) {
                this.debug("handle file " + itemPath);
                if (this.isTestUnit(itemPath)) {
                    this.debug("handle unit test " + itemName);
                    let itemRelPwdPath = itemPath.replace(absoluteSuitePath, "./");
                    itemRelPwdPath = itemRelPwdPath.replace("\\", "/"); // Windows case
                    this.collectedTestCases[itemPath] = itemRelPwdPath;
                }
            } else if (itemStat.isDirectory()) {
                this.handlePath(itemPath + "/", absoluteSuitePath);
            } else {
                throw new RuntimeException(itemPath + " is not directory or file. ");
            }

        }, this);

    }

    private isTestUnit(itemPath: string) {
        return /.*Test.ts$/.test(itemPath);
    }

    private debug(msg: string): void {
        this.logger.debug(msg);
    }

}