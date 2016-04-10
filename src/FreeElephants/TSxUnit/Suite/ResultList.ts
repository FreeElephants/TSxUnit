///<reference path="../Test/TestCaseMethod.ts"/>
namespace FreeElephants.TSxUnit.Suite {

    import TestCaseMethod = FreeElephants.TSxUnit.Test.TestCaseMethod;

    export class ResultList {

        /**
         *
         * @type {Array}<TestCaseMethod>[]
         */
        private list = [];

        public add(entry: TestCaseMethod, resultOrReason = null) {
            entry.setResult(resultOrReason);
            this.list.push(entry);
        }

        public count(): number {
            return this.list.length;
        }

        /**
         * Get copy of list with TestCaseMethods
         *
         * @returns TestCaseMethod[]
         */
        public toArray(): Array<TestCaseMethod> {
            return this.list.slice();
        }

    }
}
