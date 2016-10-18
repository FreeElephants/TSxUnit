import {AbstractUnitTestCase} from "../dist/index";

export class UnitTestCaseTest extends AbstractUnitTestCase {

    private foo;

    public setUp() {
        this.foo = "bar";
    }

    public testNumberOfAssertions() {
        this.assertSame(0, this.getNumberOfAssertions());
        this.assertSame(1, this.getNumberOfAssertions());
    }

    public testSetUp() {
        this.assertTrue(this.foo == "bar");
    }

    public testExpectExceptionWithNativeError() {
        this.expectException(Error);
        throw new Error();
    }

    public testExpectExceptionWithExtendedError() {
        this.expectException(Error);
        throw new CustomError();
    }

    public testExpectExceptionWithCustomException() {
        this.expectException(CustomException);
        throw new CustomException();
    }

    public testExpectExceptionWithExtendedCustomException() {
        this.expectException(CustomException);
        throw new ExtendedCustomException();
    }

    public methodThatShouldNotBeCalled() {
        throw new Error("non test method is called! ");
    }

}

class CustomError extends Error {

}

class CustomException {

}

class ExtendedCustomException extends CustomException {

}
