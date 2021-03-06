import {Assert} from "./Assert";
import {ObjectBuilder} from "./Mock";
import {ExpectedExceptionContainer} from "./Test";
import {Visitor, CallsCounter} from "./Spy";

export class AbstractUnitTestCase {

    protected numberOfAsserts: number = 0;
    protected expectExceptionContainer = null;

    protected assertTrue(expr: boolean, msg?: string): void {
        this.numberOfAsserts++;
        Assert.assertTrue(expr, msg);
    }

    protected assertFalse(expr: boolean, msg?: string): void {
        this.numberOfAsserts++;
        Assert.assertFalse(expr, msg);
    }

    protected assertUndefined(expr, msg?: string): void {
        this.numberOfAsserts++;
        Assert.assertUndefined(expr, msg);
    }

    protected assertNotNull(expr, msg?: string): void {
        this.numberOfAsserts++;
        Assert.assertNotNull(expr, msg);
    }

    protected assertEquals(expected, actual, msg?: string): void {
        this.numberOfAsserts++;
        Assert.assertEquals(expected, actual, msg);
    }

    protected assertSame(expected, actual, msg?: string): void {
        this.numberOfAsserts++;
        Assert.assertSame(expected, actual, msg);
    }

    protected assertNotSame(expected, actual, msg?: string): void {
        this.numberOfAsserts++;
        Assert.assertNotSame(expected, actual, msg);
    }

    protected assertNull(expr, msg?: string): void {
        this.numberOfAsserts++;
        Assert.assertNull(expr, msg);
    }

    protected assertContains(needle, haystack, msg?: string): void {
        this.numberOfAsserts++;
        Assert.assertContains(needle, haystack, msg);
    }

    protected assertInstanceOf(expected, actual, msg?: string): void {
        this.numberOfAsserts++;
        Assert.assertInstanceOf(expected, actual, msg);
    }

    protected expectException(exceptionClass, msg?: string): void {
        this.numberOfAsserts++;
        this.expectExceptionContainer = new ExpectedExceptionContainer(exceptionClass, msg);
    }

    public hasExpectedException(): boolean {
        return this.expectExceptionContainer !== null;
    }

    /**
     * @internal
     */
    public pullExpectedException(): ExpectedExceptionContainer {
        let expectedException = this.expectExceptionContainer;
        this.expectExceptionContainer = null;
        return expectedException;
    }

    public getNumberOfAssertions(): number {
        return this.numberOfAsserts;
    }

    /**
     * This method will be called once before class cases be executed
     */
    public setUpBeforeClass(): void {
    }

    /**
     * This method will be called before every test method
     */
    public setUp(): void {
    }

    /**
     * This method will be called after every test method
     */
    public tearDown(): void {
    }

    /**
     * This method will be called once after execution all test cases in this class
     */
    public tearDownAfterClass(): void {
    }

    protected createVisitor(): Visitor {
        return new Visitor();
    }

    protected createCallsCounter(): CallsCounter {
        return new CallsCounter();
    }

    protected getMockBuilder(className): ObjectBuilder {
        return new ObjectBuilder(className);
    }

}
