///<reference path="FailedAssertionException.ts"/>
///<reference path="../Exception/InvalidArgumentException.ts"/>

namespace FreeElephants.TSxUnit.Assert {

    import InvalidArgumentException = FreeElephants.TSxUnit.Exception.InvalidArgumentException;

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

        public static assertEquals(expected, actual, msg: string): void {
            let descriptionLines = [
                "Failed asserting that two objects are equals.",
                "--- Expected",
                "+++ Actual",
                "@@ @@",
                "- " +  expected,
                "+ " + actual
            ];
            let failureMessage = MessageProcessor.concatFailureMessageWithDescription(msg, descriptionLines.join("\n"));
            if (expected instanceof Object && actual instanceof Object) {
                if (Comparator.isEquals(expected, actual) === false) {
                    throw new FailedAssertionException(failureMessage);
                }
            } else if (expected != actual) {
                throw new FailedAssertionException(failureMessage);
            }
        }

        public static assertSame(expected, actual, msg: string = "Failed asserting that two objects are same. "): void {
            if (expected !== actual) {
                throw new FailedAssertionException(msg);
            }
        }

        public static assertNotNull(expr, msg: string = "Failed asserting that value is not null. ") {
            if (expr === null) {
                throw new FailedAssertionException(msg);
            }
        }

        public static assertNull(expr, msg: string = "Failed asserting that value is null. ") {
            if (expr !== null) {
                throw new FailedAssertionException(msg);
            }
        }

        public static assertContains(needle, haystack, msg: string = "Failed asserting that value contains in haystack. ") {
            if (haystack instanceof Array || haystack instanceof String || typeof haystack === "string") {
                if (haystack.indexOf(needle) === -1) {
                    throw new FailedAssertionException(msg);
                }
            } else {
                throw new InvalidArgumentException("Haystack must be a String or Array");
            }
        }

        public static assertInstanceOf(expected, actual, msg: string) {
            if (actual instanceof expected === false) {
                let failureMessage = MessageProcessor.concatFailureMessageWithDescription(msg, "Failed asserting that object instance of " + expected.prototype.constructor.name);
                throw new FailedAssertionException(failureMessage);
            }
        }

    }

    class MessageProcessor {
        public static concatFailureMessageWithDescription(msg: string, description: string): string {
            if (msg) {
                msg += "\n " + description;
            } else {
                msg = description;
            }

            return msg;
        }
    }


    /**
     * Thanks to Joshua Clanton and his Drips:
     * this objects comparison based on code from http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html
     */
    class Comparator {
        public static isEquals(expected, actual): boolean {
            // Create arrays of property names
            let expectedProps = Object.getOwnPropertyNames(expected);
            let actualProps = Object.getOwnPropertyNames(actual);

            // If number of properties is different,
            // objects are not equivalent
            if (expectedProps.length != actualProps.length) {
                return false;
            }

            for (let i = 0; i < expectedProps.length; i++) {
                let propName = expectedProps[i];

                // If values of same property are not equal,
                // objects are not equivalent
                if (expected[propName] !== actual[propName]) {
                    return false;
                }
            }

            // If we made it this far, objects
            // are considered equivalent
            return true;
        }
    }

}
