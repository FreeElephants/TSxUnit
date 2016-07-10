///<reference path="../Exception/InvalidArgumentException.ts"/>
///<reference path="MessageProcessor.ts"/>

namespace FreeElephants.TSxUnit.Assert {

    import InvalidArgumentException = FreeElephants.TSxUnit.Exception.InvalidArgumentException;

    export class Assert {

        public static assertTrue(expr: boolean, msg: string): void {
            if (expr !== true) {
                let description = "Failed asserting that value is true. ";
                MessageProcessor.handleFailedAssertion(msg, description);
            }
        }

        public static assertFalse(expr: boolean, msg: string): void {
            if (expr !== false) {
                let description = "Failed asserting that value is false. ";
                MessageProcessor.handleFailedAssertion(msg, description);
            }
        }

        public static assertUndefined(expr, msg: string): void {
            if (expr !== undefined) {
                let description = "Failed asserting that value is undefined. ";
                MessageProcessor.handleFailedAssertion(msg, description);
            }
        }

        public static assertEquals(expected, actual, msg: string): void {
            let descriptionLines = [
                "Failed asserting that two objects are equals. ",
                "--- Expected",
                "+++ Actual",
                "@@ @@",
                "- " + expected,
                "+ " + actual
            ];
            let description = descriptionLines.join("\n");
            if (expected instanceof Object && actual instanceof Object) {
                if (Comparator.isEquals(expected, actual) === false) {
                    MessageProcessor.handleFailedAssertion(msg, description);
                }
            } else if (expected != actual) {
                MessageProcessor.handleFailedAssertion(msg, description);
            }
        }

        public static assertSame(expected, actual, msg: string): void {
            if (expected !== actual) {
                let description = "Failed asserting that two objects are same. ";
                MessageProcessor.handleFailedAssertion(msg, description);
            }
        }

        public static assertNotNull(expr, msg: string): void {
            if (expr === null) {
                let description = "Failed asserting that value is not null. ";
                MessageProcessor.handleFailedAssertion(msg, description);
            }
        }

        public static assertNull(expr, msg: string): void {
            if (expr !== null) {
                let description = "Failed asserting that value is null. ";
                MessageProcessor.handleFailedAssertion(msg, description);
            }
        }

        public static assertContains(needle, haystack, msg: string): void {
            if (haystack instanceof Array || haystack instanceof String || typeof haystack === "string") {
                if (haystack.indexOf(needle) === -1) {
                    let description = "Failed asserting that value contains in haystack. ";
                    MessageProcessor.handleFailedAssertion(msg, description);
                }
            } else {
                throw new InvalidArgumentException("Haystack must be a String or Array");
            }
        }

        public static assertInstanceOf(expected, actual, msg: string): void {
            if (actual instanceof expected === false) {
                let description = "Failed asserting that object instance of " + expected.prototype.constructor.name + ". ";
                MessageProcessor.handleFailedAssertion(msg, description);
            }
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
