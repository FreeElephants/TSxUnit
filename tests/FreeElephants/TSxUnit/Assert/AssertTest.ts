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

        public testAssertEquals() {
            let expected = {
                foo: "bar"
            };
            let actual = {
                foo: "bar"
            };

            this.assertEquals(expected, actual);

            this.assertEquals("foo", "foo");

            this.assertEquals(1, "1");
        }

        public testAssertSame() {
            let baz = {foo: "bar"};
            this.assertSame(baz, baz);
        }

        public testAssertNotNull() {
            this.assertNotNull("foo");
        }
    }
}
