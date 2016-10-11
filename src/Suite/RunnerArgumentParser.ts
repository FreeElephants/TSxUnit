/**
 * Parser of arguments for suite runner.
 *
 * @author samizdam <samizdam@inbox.ru>
 */
export class RunnerArgumentParser {

    private minimist = require("minimist");
    private args: Array<string>;
    private methodPattern: RegExp = new RegExp(".*");
    private pathToRunPattern: RegExp = new RegExp(".*");

    public constructor(argv: string[]) {
        this.args = this.minimist(argv.slice(2));
        this.detectPathToRunPattern();
        this.detectMethodNamePattern();
    }

    private detectMethodNamePattern() {
        let secondArgument = this.args["_"][1];
        if (secondArgument) {
            this.methodPattern = new RegExp(secondArgument);
        }
    }

    private detectPathToRunPattern() {
        let firstArgument = this.args["_"][0];
        if (firstArgument) {
            this.pathToRunPattern = new RegExp(firstArgument);
        }
    }

    public getMethodPattern(): RegExp {
        return this.methodPattern;
    }

    public getPathToRunPattern(): RegExp {
        return this.pathToRunPattern;
    }
}
