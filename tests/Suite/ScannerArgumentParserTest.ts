import {AbstractUnitTestCase} from "../../dist/AbstractUnitTestCase";
import {ScannerArgumentParser} from "../../dist/Suite/ScannerArgumentParser";

export class ScannerArgumentParserTest extends AbstractUnitTestCase {

    public testGetTestPathWithoutSpecifiesArgument(): void {
        let parser = new ScannerArgumentParser([]);
        let actual = parser.getTestPath();
        let expected = "tests/";
        this.assertSame(expected, actual);
    }

    public testGetTestPathWithSpecifiedArgument(): void {
        let expected = "somePathToTests";
        let parser = new ScannerArgumentParser(["foo", "bar", expected]);
        let actual = parser.getTestPath();
        this.assertSame(expected, actual);
    }
}
