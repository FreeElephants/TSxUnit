///<reference path="../Test/TestCaseMethod.ts"/>
namespace FreeElephants.TSxUnit.Suite {

    import TestCaseMethod = FreeElephants.TSxUnit.Test.TestCaseMethod;

    export class ResultList {

        /**
         *
         * @type {Array}<TestCaseMethod>[]
         */
        private list = [];

        public add(entry: TestCaseMethod) {
            this.list.push(TestCaseMethod);
        }

        public count(): number {
            return this.list.length;
        }

    }
}
