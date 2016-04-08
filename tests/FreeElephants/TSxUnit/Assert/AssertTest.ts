namespace FreeElephants.TSxUnit.Assert {

    export class AssertTest extends TestCase {

        public testAssertTrue() {
            this.assertTrue(true);
        }

        public testAssertFalse() {
            this.assertFalse(false);
        }

        public testAssertUndefined() {
            this.assertUndefined(this[100500]);
        }
    }
}
