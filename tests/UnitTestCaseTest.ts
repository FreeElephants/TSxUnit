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

    public methodThatShouldNotBeCalled() {
        throw new Error("non test method is called! ");
    }

}
