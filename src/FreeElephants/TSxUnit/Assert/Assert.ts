///<reference path="FailedAssertionException.ts"/>

namespace FreeElephants.TSxUnit.Assert {

    export class Assert {

        public static assertTrue(expr: boolean, msg: string = "Failed asserting that value is true."): void {
            if (expr !== true) {
                throw new FailedAssertionException(msg);
            }
        }

        public static assertFalse(expr: boolean, msg: string = "Failed asserting that value is false. "): void {
            if (expr !== false) {
                throw new FailedAssertionException(msg);
            }
        }

        public static assertUndefined(expr, msg: string = "Failed asserting that value is undefined. "): void {
            if (expr !== undefined) {
                throw new FailedAssertionException(msg);
            }
        }

        public static assertEquals(expected, actual, msg: string = "Failed asserting that two objects are equals. "): void {
            if (expected != actual) {
                throw new FailedAssertionException(msg);
            }
        }

    }
}
