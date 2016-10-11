import {AbstractUnitTestCase} from "../AbstractUnitTestCase";
import {ResultAdapterInterface} from "./ResultAdapterInterface";
import {AbstractResultAdapter} from "./AbstractResultAdapter";

export class TestCaseMethod {

    private testCase: AbstractUnitTestCase;
    private method;
    private source: string;
    private result: ResultAdapterInterface;

    public constructor(testCase: AbstractUnitTestCase, source: string, method) {
        this.testCase = testCase;
        this.source = source;
        this.method = method;
    }

    public execute(): void {
        this.testCase[this.method]();
    }

    public getTestCase(): AbstractUnitTestCase {
        return this.testCase;
    }

    public getMethod() {
        return this.method;
    }

    public getFullyQualifiedName(): string {
        return this.getSource() + "::" + this.getMethod();
    }

    public setResult(result) {
        this.result = AbstractResultAdapter.create(result);
    }

    public getResult(): ResultAdapterInterface{
        return this.result;
    }

    public getSource() {
        return this.source;
    }

}
