import {ResultList} from "./ResultList";
import {TestCaseMethod} from "../Test/TestCaseMethod";

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

    public getErrorsTests(): TestCaseMethod[] {
        return this.errorList.toArray();
    }

    public getFailedTests(): TestCaseMethod[] {
        return this.failedList.toArray();
    }

    public getPassedTests(): TestCaseMethod[] {
        return this.passedList.toArray();
    }

    public isOk(): boolean {
        let withoutErrors = this.getNumberOfErrors() === 0;
        let withoutFailed = this.getNumberOfFailed() === 0;
        return withoutErrors && withoutFailed;
    }

    public getNumberOfAssertions(): number {
        return this.totalNumberOfAssertions;
    }
}