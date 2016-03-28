namespace FreeElephants.TSxUnit.Builder {

    export class ScannerTest extends TestCase {

        public testGetShortNameFromClassFile() {
            var scanner = new Scanner();
            var expected = 'ScannerTest';
            var actual = scanner.getShortClassNameFromClassFile('tests/FreeElephants/TSxUnit/Builder/ScannerTest.ts');
            this.assertTrue(expected === actual);
        }
    }
    
}