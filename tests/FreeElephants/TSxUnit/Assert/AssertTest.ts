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

        public testAssertNull() {
            this.assertNull(null);
        }

        public testAssertContainsNeedleInStringObject() {
            this.assertContains("foo", new String("foobar"));
        }

        public testAssertContainsNeedleInStringPrimitive() {
            this.assertContains("foo", "barfoo");
        }

        public testAssertContainsNeedleInArray() {
            this.assertContains("foo", ["bar", "foo"]);
        }

        public testAssertInstanceOf() {
            let foo = new FooImpl();
            this.assertInstanceOf(AbstractFoo, foo);
            this.assertInstanceOf(FooImpl, foo);
        }

        public testAssertInstanceOfFailureMessage() {
            let foo = new FooImpl();
            let expectedException;
            try {
                this.assertInstanceOf(TestCase, foo);
            } catch(e) {
                expectedException = <FailedAssertionException> e;
                this.assertEquals(e.getMessage(), "Failed asserting that object instance of TestCase");
            } finally {
                this.assertInstanceOf(FailedAssertionException, expectedException, "FailedAssertionException wasn't throw on wrong assertion. ");
            }

        }
    }

    abstract class AbstractFoo{
        abstract foo();
    }

    class FooImpl extends AbstractFoo{
        foo(){}
    }
}
