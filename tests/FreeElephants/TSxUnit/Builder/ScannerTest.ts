namespace FreeElephants.TSxUnit.Builder {

    export class ScannerTest extends TestCase {

        public testGetShortNameFromClassFile() {
            let scanner = new Scanner();
            let expected = "ScannerTest";
            let actual = scanner.getShortClassNameFromClassFile("tests/FreeElephants/TSxUnit/Builder/ScannerTest.ts");
            this.assertTrue(expected === actual);
        }
    }
    
}