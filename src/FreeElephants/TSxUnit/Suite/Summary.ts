///<reference path="ResultList.ts"/>
///<reference path="../Test/TestCaseMethod.ts"/>
namespace FreeElephants.TSxUnit.Suite {

    import TestCaseMethod = FreeElephants.TSxUnit.Test.TestCaseMethod;

    export class Summary {

        private passedList: ResultList;
        private failedList: ResultList;
        private errorList: ResultList;
        private totalNumberOfAssertions: number;

        public constructor(passedList: ResultList, failedList: ResultList, errorList: ResultList, totalNumberOfAssertions: number) {
            this.passedList = passedList;
            this.failedList = failedList;
            this.errorList = errorList;
            this.totalNumberOfAssertions = totalNumberOfAssertions;
        }

        public getNumberOfPassed(): number {
            return this.passedList.count();
        }

        public getNumberOfErrors(): number {
            return this.errorList.count();
        }

        public getNumberOfFailed(): number {
            return this.failedList.count();
        }

        public getErrorsTests(): Array<TestCaseMethod> {
            return this.errorList.toArray();
        }

        public getFailedTests(): Array<TestCaseMethod> {
            return this.failedList.toArray();
        }

        public getPassedTests(): Array<TestCaseMethod> {
            return this.passedList.toArray();
        }

        public isOk(): boolean {
            return this.getNumberOfErrors() === 0 && this.getNumberOfFailed() === 0;
        }

        public getNumberOfAssertions(): number {
            return this.totalNumberOfAssertions;
        }
    }
}
