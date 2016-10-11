import {LoggerInterface} from "./../Logger/LoggerInterface";

export class Scanner {

    private logger: LoggerInterface;
    private fs;
    private collectedTestCases = {};
    private DS: string = require("path").sep;

    public constructor(logger: LoggerInterface) {
        this.logger = logger;
        this.fs = require("fs");
    }

    public getSuiteMap(path: string, pwd: string): {} {
        let absolutePathToSuiteLocation = pwd + this.DS + path;
        this.debug("launch suite building in " + absolutePathToSuiteLocation);
        if (this.fs.existsSync(absolutePathToSuiteLocation)) {
            this.handlePath(absolutePathToSuiteLocation, absolutePathToSuiteLocation);
        } else {
            throw new Error(path + " not exists. ");
        }
        return this.collectedTestCases;
    }

    public handlePath(path: string, absoluteSuitePath: string) {
        let testsDir = this.fs.readdirSync(path);
        testsDir.forEach(function (itemName: string) {
            let itemPath: string = path + itemName;
            this.debug("handle path " + itemPath);
            let itemStat = this.fs.statSync(itemPath);
            if (itemStat.isFile()) {
                this.debug("handle file " + itemPath);
                if (this.isTestUnit(itemPath)) {
                    this.debug("handle unit test " + itemName);
                    let itemRelPwdPath = itemPath.replace(absoluteSuitePath, "./");
                    this.collectedTestCases[path + itemName] = itemRelPwdPath;
                }
            } else if (itemStat.isDirectory()) {
                this.handlePath(itemPath + "/", absoluteSuitePath);
            } else {
                throw new Error(itemPath + " is not directory or file. ");
            }

        }, this);

    }

    public isTestUnit(itemPath: string) {
        return /.*Test.ts$/.test(itemPath);
    }

    private debug(msg: string): void {
        this.logger.debug(msg);
    }

}