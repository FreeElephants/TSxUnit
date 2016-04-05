///<reference path="Assert/Assert.ts"/>

namespace FreeElephants.TSxUnit {

    import Assert = FreeElephants.TSxUnit.Assert.Assert;

    export abstract class TestCase {

        protected assertTrue(expr: boolean): void {
            Assert.assertTrue(expr);
        }

        protected assertFalse(expr: boolean): void {
            Assert.assertFalse(expr);
        }

        protected assertUndefined(expr): void {
            Assert.assertUndefined(expr);
        }

        public setUp(): void {

        }

        public tearDown(): void {

        }
    }


}