///<reference path="Assert/Assert.ts"/>

/**
 * @author samizdam
 */
namespace FreeElephants.TSxUnit {

    import Assert = FreeElephants.TSxUnit.Assert.Assert;

    export abstract class TestCase {

        /**
         * Exploit some JS magic: for use default value of assertion message if msg argument not present.
         */
        private _undefined;

        protected assertTrue(expr: boolean, msg: string = this._undefined): void {
            Assert.assertTrue(expr, msg);
        }

        protected assertFalse(expr: boolean, msg: string = this._undefined): void {
            Assert.assertFalse(expr, msg);
        }

        protected assertUndefined(expr, msg: string = this._undefined): void {
            Assert.assertUndefined(expr, msg);
        }

        protected assertNotNull(expr, msg: string = this._undefined): void {
            Assert.assertNotNull(expr, msg);
        }

        protected assertEquals(expected, actual, msg: string = this._undefined): void {
            Assert.assertEquals(expected, actual, msg);
        }

        protected assertSame(expected, actual, msg: string = this._undefined): void {
            Assert.assertSame(expected, actual, msg);
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
    }


}