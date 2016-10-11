import {AbstractUnitTestCase} from "../../index";
import {TestCaseMethodDetectionStrategyInterface} from "./index";

export class TestCaseMethodNameBasedDetector implements TestCaseMethodDetectionStrategyInterface {

    isTestMethod(testCase: AbstractUnitTestCase, methodName: string): boolean {
        return methodName.substring(0, 4) === "test";
    }

}
