///<reference path="ResultAdapterInterface.ts"/>
///<reference path="AbstractResultAdapter.ts"/>
///<reference path="../Builder/Scanner.ts"/>
namespace FreeElephants.TSxUnit.Test {

    import Test = FreeElephants.TSxUnit.TestCase;
    import Scanner = FreeElephants.TSxUnit.Builder.Scanner;

    export class TestCaseMethod {

        private testCase: Test;
        private method;
        private source: string;
        private result: ResultAdapterInterface;
        private scanner;

        public constructor(testCase: Test, source: string, method) {
            this.testCase = testCase;
            this.source = source;
            this.method = method;
            this.scanner = new Scanner();
        }

        public execute(): void {
            this.testCase[this.method]();
        }

        public getTestCase(): Test {
            return this.testCase;
        }

        public getMethod() {
            return this.method;
        }

        public getFullyQualifiedName(): string {
            return this.scanner.getFullClassNameFromClassFile(this.getSource()) + "." + this.getMethod();
        }

        public setResult(result) {
            this.result = AbstractResultAdapter.create(result);
        }

        /**
         *
         * @returns {ResultAdapterInterface}
         */
        public getResult() {
            return this.result;
        }

        public getSource() {
            return this.source;
        }

    }
}
