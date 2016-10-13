import {AbstractUnitTestCase} from "../../dist/index";
import {FailedAssertionException} from "../../dist/Assert/index";

export class AssertTest extends AbstractUnitTestCase {

    public testAssertTrue() {
        this.assertTrue(true);
    }

    public testAssertTrueFailWithUserMsg() {
        let expectedException;
        try {
            this.assertTrue(false, "oops!");
        } catch (e) {
            expectedException = e;
        } finally {
            this.assertInstanceOf(FailedAssertionException, expectedException);
            this.assertEquals("oops!\nFailed asserting that value is true. ", expectedException.getMessage());
        }
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

    public testAssertNotSame() {
        this.assertNotSame("foo", "bar");
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
            this.assertInstanceOf(AbstractUnitTestCase, foo);
        } catch (e) {
            expectedException = <FailedAssertionException> e;
            this.assertEquals(e.getMessage(), "Failed asserting that object instance of AbstractUnitTestCase. ");
        } finally {
            this.assertInstanceOf(FailedAssertionException, expectedException, "FailedAssertionException wasn't throw on wrong assertion. ");
        }
    }

}

abstract class AbstractFoo {
    abstract foo();
}

class FooImpl extends AbstractFoo {
    foo() {
    }
}