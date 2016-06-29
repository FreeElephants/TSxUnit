namespace FreeElephants.TSxUnit.Assert {

    export class DomAssert {

        private static jQuery = require("jquery");

        public static assertElementExists(context: Document, selector: string, msg: string = "Failed asserting that element exists in the document. ") {
            let $ = this.jQuery(context.defaultView);
            if($(context).find(selector).length === 0 ) {
                throw new FailedAssertionException(msg);
            }
        }

        public static assertElementNotExists(context: Document, selector: string, msg: string = "Failed asserting that element not exists in the document. ") {
            let $ = this.jQuery(context.defaultView);
            if($(context).find(selector).length > 0 ) {
                throw new FailedAssertionException(msg);
            }
        }
    }
}
