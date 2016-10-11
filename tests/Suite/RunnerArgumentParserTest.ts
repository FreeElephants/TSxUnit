import {AbstractUnitTestCase} from "../../dist/AbstractUnitTestCase";
import {RunnerArgumentParser} from "../../dist/Suite/RunnerArgumentParser";

export class RunnerArgumentParserTest extends AbstractUnitTestCase {

    public testGetMethodPattern(): void {
        let argv = ["foo", "bar", "pathToRun", "methodName"];
        let parser = new RunnerArgumentParser(argv);
        let methodPattern = parser.getMethodPattern();
        this.assertTrue(methodPattern.test("some_methodName_example"));
        this.assertFalse(methodPattern.test("fooBar"));
    }

    public testGetMethodPatternWithoutSpecifiedValue(): void {
        let argv = ["foo", "bar", "pathToRun"];
        let parser = new RunnerArgumentParser(argv);
        let methodPattern = parser.getMethodPattern();
        this.assertTrue(methodPattern.test("some_methodName_example"));
        this.assertTrue(methodPattern.test("fooBar"));
    }

    public testGetPathToRunPatternWithoutSpecifiedValue(): void {
        let argv = ["foo", "bar"];
        let parser = new RunnerArgumentParser(argv);
        let pathToRunPattern = parser.getPathToRunPattern();
        this.assertTrue(pathToRunPattern.test("tests/foo/bar/anyPath.ts"));
    }
}