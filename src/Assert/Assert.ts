import {MessageProcessor} from "./index";
import {InvalidArgumentException} from "../Exception/index";
import {ObjectComparator} from "../Util/ObjectComparator";

export class Assert {

    public static assertTrue(expr: boolean, msg: string): void {
        if (expr !== true) {
            let description = "Failed asserting that '" + expr + "' is true. ";
            MessageProcessor.handleFailedAssertion(msg, description);
        }
    }

    public static assertFalse(expr: boolean, msg: string): void {
        if (expr !== false) {
            let description = "Failed asserting that '" + expr + "' is false. ";
            MessageProcessor.handleFailedAssertion(msg, description);
        }
    }

    public static assertUndefined(expr, msg: string): void {
        if (expr !== undefined) {
            let description = "Failed asserting that '" + expr + "' is undefined. ";
            MessageProcessor.handleFailedAssertion(msg, description);
        }
    }

    public static assertEquals(expected, actual, msg: string): void {
        // TODO extract diff building to special class with separate unit tests.
        let descriptionLines = [
            "Failed asserting that two objects are equals. ",
            "--- Expected",
            "+++ Actual",
            "@@ @@",
            "-" + JSON.stringify(expected, null, 2),
            "+" + JSON.stringify(actual, null, 2),
        ];
        let description = descriptionLines.join("\n");
        if (expected instanceof Object && actual instanceof Object) {
            if (ObjectComparator.isEquals(expected, actual) === false) {
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

    public static assertNotSame(expected: any, actual: any, msg: string) {
        if (expected === actual) {
            let description = "Failed asserting that objects are not same. ";
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
            let description = "Failed asserting that '" + expr + "' is null. ";
            MessageProcessor.handleFailedAssertion(msg, description);
        }
    }

    public static assertContains(needle, haystack, msg: string): void {
        let isString: boolean = haystack instanceof String || typeof haystack === "string";
        let isArray: boolean = haystack instanceof Array;
        if (isArray || isString) {
            let indexOfHaystack: number = haystack.indexOf(needle);
            if (indexOfHaystack === -1) {
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