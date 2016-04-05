///<reference path="FailedAssertionException.ts"/>

namespace FreeElephants.TSxUnit.Assert {

    export class Assert {

        public static assertTrue(expr: boolean): void {
            if (expr !== true) {
                throw new FailedAssertionException("Failed asserting that value is true.");
            }
        }

        public static assertFalse(expr: boolean): void {
            if (expr !== false) {
                throw new FailedAssertionException("Failed asserting that value is false.");
            }
        }

        public static assertUndefined(expr): void {
            if (expr !== undefined) {
                throw new FailedAssertionException("Failed asserting that value is undefined.");
            }
        }
    }
}
