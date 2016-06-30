namespace FreeElephants.TSxUnit.Assert {

    export class DomAssert {

        public static assertElementExists(context: NodeSelector, selector: string, msg: string = "Failed asserting that element exists in the document. ") {
            if (this.getElementsCount(context, selector) === 0) {
                throw new FailedAssertionException(msg);
            }
        }

        public static assertElementNotExists(context: NodeSelector, selector: string, msg: string = "Failed asserting that element not exists in the document. ") {
            if (this.getElementsCount(context, selector) > 0) {
                throw new FailedAssertionException(msg);
            }
        }

        public static assertElementHasClass(element: Element, className: string, msg: string = "Failed asserting that element this class. ") {
            if (!element.classList.contains(className)) {
                throw new FailedAssertionException(msg);
            }
        }

        public static assertElementNotHasClass(element: Element, className: string, msg: string = "Failed asserting that element not has this class. ") {
            if (element.classList.contains(className)) {
                throw new FailedAssertionException(msg);
            }
        }

        public static assertElementsCount(document: NodeSelector, selector: string, count: number, msg: string = "Failed asserting that number of elements is X") {
            if (this.getElementsCount(document, selector) !== count) {
                throw new FailedAssertionException(msg);
            }
        }

        public static assertElementHasAttribute(element: Element, attributeName: string, msg: string = "Failed asserting that element has attribute") {
            if (!element.hasAttribute(attributeName)) {
                throw new FailedAssertionException(msg);
            }
        }

        public static assertElementNotHasAttribute(element: Element, attributeName: string, msg: string = "Failed asserting that element hasn't attribute") {
            if (element.hasAttribute(attributeName)) {
                throw new FailedAssertionException(msg);
            }
        }

        private static getElementsCount(context: NodeSelector, selector: string): number {
            return context.querySelectorAll(selector).length;
        }
    }
}
