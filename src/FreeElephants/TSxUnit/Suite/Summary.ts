namespace FreeElephants.TSxUnit.Suite {

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
            return this.getPassedList().count();
        }

        public getNumberOfErrors(): number {
            return this.getErrorList().count();
        }

        public getNumberOfFailed(): number {
            return this.getFailedList().count();
        }

        public getErrorList(): ResultList {
            return this.errorList;
        }

        public getFailedList(): ResultList {
            return this.failedList;
        }

        public getPassedList(): ResultList {
            return this.passedList;
        }

        public isOk(): boolean {
            return this.getNumberOfErrors() === 0 && this.getNumberOfFailed() === 0;
        }

        public getNumberOfAssertions(): number {
            return this.totalNumberOfAssertions;
        }
    }
}
