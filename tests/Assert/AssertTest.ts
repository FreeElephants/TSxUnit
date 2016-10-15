import {AbstractUnitTestCase} from "../../dist/index";
import {FailedAssertionException} from "../../dist/Assert/index";
import {InvalidArgumentException} from "../../dist/Exception/InvalidArgumentException";

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
            this.assertEquals("oops!\nFailed asserting that 'false' is true. ", expectedException.getMessage());
        }
    }

    public testAssertFalse() {
        this.assertFalse(false);
    }

    public testAssertFalseFail() {
        let expectedException;
        try {
            this.assertFalse(true, "oops!");
        } catch (e) {
            expectedException = e;
        } finally {
            this.assertInstanceOf(FailedAssertionException, expectedException);
            this.assertEquals("oops!\nFailed asserting that 'true' is false. ", expectedException.getMessage());
        }
    }

    public testAssertUndefined() {
        this.assertUndefined(this[100500]);
    }

    public testAssertUndefinedFail() {
        let expectedException;
        try {
            this.assertUndefined(true, "oops!");
        } catch (e) {
            expectedException = e;
        } finally {
            this.assertInstanceOf(FailedAssertionException, expectedException);
            this.assertEquals("oops!\nFailed asserting that 'true' is undefined. ", expectedException.getMessage());
        }
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

    public testAssertEqualsFailWithObjectsDiff() {
        let expected = {
            foo: "bar"
        };
        let actual = {
            foo: "not bar"
        };
        let expectedException;

        try {
            this.assertEquals(expected, actual, "oops!");
        } catch (e) {
            expectedException = e;
        } finally {
            this.assertInstanceOf(FailedAssertionException, expectedException);
            let message = expectedException.getMessage();
            this.assertContains("oops!\nFailed asserting that two objects are equals. ", message);
            this.assertContains("+{\n  \"foo\": \"not bar\"\n}", message);
        }
    }

    public testAssertEqualsFailWithScalarDiff() {
        let expected = 1;
        let actual = 2;
        let expectedException;

        try {
            this.assertEquals(expected, actual, "oops!");
        } catch (e) {
            expectedException = e;
        } finally {
            this.assertInstanceOf(FailedAssertionException, expectedException);
            let message = expectedException.getMessage();
            this.assertContains("oops!\nFailed asserting that two objects are equals. ", message);
            this.assertContains("-1", message);
            this.assertContains("+2", message);
        }
    }

    public testAssertSame() {
        let baz = {foo: "bar"};
        this.assertSame(baz, baz);
    }

    public testAssertSameFail() {
        let expected = 1;
        let actual = 2;
        let expectedException;

        try {
            this.assertSame(expected, actual, "oops!");
        } catch (e) {
            expectedException = e;
        } finally {
            this.assertInstanceOf(FailedAssertionException, expectedException);
            let message = expectedException.getMessage();
            this.assertContains("oops!", message);
            this.assertContains("Failed asserting that two objects are same. ", message);
        }
    }

    public testAssertNotSame() {
        this.assertNotSame("foo", "bar");
    }

    public testAssertNotNull() {
        this.assertNotNull("foo");
    }

    public testAssertNotNullFail() {
        let expectedException;
        try {
            this.assertNotNull(null, "ooops!");
        } catch (e) {
            expectedException = e;
        } finally {
            this.assertInstanceOf(FailedAssertionException, expectedException);
            this.assertContains("ooops!\nFailed asserting that value is not null.", expectedException.getMessage());
        }
    }

    public testAssertNull() {
        this.assertNull(null);
    }

    public testAssertNullFail() {
        let expectedException;
        try {
            this.assertNull(true, "ooops!");
        } catch (e) {
            expectedException = e;
        } finally {
            this.assertInstanceOf(FailedAssertionException, expectedException);
            this.assertContains("ooops!\nFailed asserting that 'true' is null.", expectedException.getMessage());
        }
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

    public testAssertContainsFail() {
        let expectedException;
        try {
            this.assertContains(2, [0, 1]);
        } catch (e) {
            expectedException = e;
        } finally {
            this.assertInstanceOf(FailedAssertionException, expectedException);
        }
    }

    public testAssertContainsInvalidArgument() {
        let expectedException;
        try {
            this.assertContains("needle", 100500);
        } catch (e) {
            expectedException = e;
        } finally {
            this.assertInstanceOf(InvalidArgumentException, expectedException);
        }
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