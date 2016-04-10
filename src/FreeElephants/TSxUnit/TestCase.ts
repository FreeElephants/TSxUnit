///<reference path="Assert/Assert.ts"/>
///<reference path="Mock/Builder.ts"/>

/**
 * @author samizdam
 */
namespace FreeElephants.TSxUnit {

    import Assert = FreeElephants.TSxUnit.Assert.Assert;
    import Builder = FreeElephants.TSxUnit.Mock.Builder;

    export abstract class TestCase {

        /**
         * Exploit some JS magic: for use default value of assertion message if msg argument not present.
         */
        private _undefined;

        private numberOfAsserts: number = 0;

        protected assertTrue(expr: boolean, msg: string = this._undefined): void {
            this.numberOfAsserts++;
            Assert.assertTrue(expr, msg);
        }

        protected assertFalse(expr: boolean, msg: string = this._undefined): void {
            this.numberOfAsserts++;
            Assert.assertFalse(expr, msg);
        }

        protected assertUndefined(expr, msg: string = this._undefined): void {
            this.numberOfAsserts++;
            Assert.assertUndefined(expr, msg);
        }

        protected assertNotNull(expr, msg: string = this._undefined): void {
            this.numberOfAsserts++;
            Assert.assertNotNull(expr, msg);
        }

        protected assertEquals(expected, actual, msg: string = this._undefined): void {
            this.numberOfAsserts++;
            Assert.assertEquals(expected, actual, msg);
        }

        protected assertSame(expected, actual, msg: string = this._undefined): void {
            this.numberOfAsserts++;
            Assert.assertSame(expected, actual, msg);
        }

        protected assertNull(expr, msg: string = this._undefined): void {
            this.numberOfAsserts++;
            Assert.assertNull(expr, msg);
        }

        public getNumberOfAssertions(): number {
            return this.numberOfAsserts;
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
         *
         * @param className
         * @returns {T}
         */
        protected getMockBuilder(className) {
            return new Builder(className);
                //this.mockito.JsMockito.mock(className);
        }
    }


}