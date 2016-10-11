import {Assert} from "./Assert";
import {ObjectBuilder} from "./Mock";

export class AbstractUnitTestCase {

    protected numberOfAsserts: number = 0;

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

    /**
     *
     * @param className
     * @returns {T}
     */
    protected getMockBuilder(className) {
        return new ObjectBuilder(className);
    }

}
