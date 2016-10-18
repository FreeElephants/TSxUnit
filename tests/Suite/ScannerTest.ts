import {AbstractUnitTestCase} from "../../dist/AbstractUnitTestCase";
import {Scanner} from "../../dist/Suite/Scanner";
import {LoggerAdapter} from "../../dist/Logger/LoggerAdapter";
import {PathNotExistsException} from "../../dist/Suite/Exception/PathNotExistsException";

export class ScannerTest extends AbstractUnitTestCase {

    public testGetSourceMap() {
        let logger = this.getMockBuilder(LoggerAdapter).getMock();
        let scanner = new Scanner(logger);
        let map = scanner.getSuiteMap("Suite/", __dirname + "/..");
        let thisFilename = __filename.replace("ScannerTest.js", "ScannerTest.ts");
        let thisFilenameInMap = thisFilename.replace(/\\/g, "\\\\");
        this.assertSame(map[thisFilenameInMap], "./ScannerTest.ts");
    }

    public testGetSourceMapPathNotExistsException() {
        let expectedException;
        try {
            let logger = this.getMockBuilder(LoggerAdapter).getMock();
            let scanner = new Scanner(logger);
            let map = scanner.getSuiteMap("@this paths is not exists@", "@this paths is not exists@");
        } catch (e) {
            expectedException = e;
        } finally {
            this.assertInstanceOf(PathNotExistsException, expectedException);
        }
    }
}
