import {AbstractUnitTestCase} from "../../index";

export interface TestCaseMethodDetectionStrategyInterface {

    isTestMethod(testCase: AbstractUnitTestCase, methodName: string): boolean;
}
