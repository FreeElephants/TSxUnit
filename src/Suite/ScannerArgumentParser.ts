/**
 * CLI arguments parser for Scanner: detect context where Scanner must work.
 *
 * @author samizdam <samizdam@inbox.ru>
 */
export class ScannerArgumentParser {

    private minimist = require("minimist");
    private args: string[];
    private testsPath: string = "tests/";

    public constructor(argv: string[]) {
        this.args = this.minimist(argv.splice(2));
        let firstArgument = this.args["_"][0];
        if (firstArgument) {
            this.testsPath = firstArgument;
        }
    }

    public getTestPath(): string {
        return this.testsPath;
    }
}
