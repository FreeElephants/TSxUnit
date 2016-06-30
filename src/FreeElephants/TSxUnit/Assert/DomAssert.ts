namespace FreeElephants.TSxUnit.Assert {

    export class DomAssert {

        private static jQuery = require("jquery");

        public static assertElementExists(context: Document, selector: string, msg: string = "Failed asserting that element exists in the document. ") {
            let $ = this.jQuery(context.defaultView);
            if ($(context).find(selector).length === 0) {
                throw new FailedAssertionException(msg);
            }
        }

        public static assertElementNotExists(context: Document, selector: string, msg: string = "Failed asserting that element not exists in the document. ") {
            let $ = this.jQuery(context.defaultView);
            if ($(context).find(selector).length > 0) {
                throw new FailedAssertionException(msg);
            }
        }

        public static assertElementHasClass(element: HTMLElement, className: string, msg: string = "Failed asserting that element this class. ") {
            if (!element.classList.contains(className)) {
                throw new FailedAssertionException(msg);
            }
        }

        public static assertElementNotHasClass(element: HTMLElement, className: string, msg: string = "Failed asserting that element not has this class. ") {
            if (element.classList.contains(className)) {
                throw new FailedAssertionException(msg);
            }
        }

        public static assertElementsCount(document: Document, selector: string, count: number, msg: string = "Failed asserting that number of elements is X") {
            let $ = this.jQuery(document.defaultView);
            if ($(document).find(selector).length !== count) {
                throw new FailedAssertionException(msg);
            }
        }
    }
}
