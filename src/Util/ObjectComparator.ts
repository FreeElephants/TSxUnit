/**
 * Thanks to Joshua Clanton and his Drips:
 * this objects comparison based on code from http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html
 */
export class ObjectComparator {

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

