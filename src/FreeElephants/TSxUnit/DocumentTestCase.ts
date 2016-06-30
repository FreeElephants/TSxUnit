///<reference path="Mock/DocumentBuilder.ts"/>
///<reference path="Assert/DomAssert.ts"/>
///<reference path="Mock/DocumentEventBuilder.ts"/>
/**
 * Base class for DOM interaction testing.
 */
namespace FreeElephants.TSxUnit {

    import DocumentBuilder = FreeElephants.TSxUnit.Mock.DocumentBuilder;
    import DomAssert = FreeElephants.TSxUnit.Assert.DomAssert;
    import DocumentEventBuilder = FreeElephants.TSxUnit.Mock.DocumentEventBuilder;

    export abstract class DocumentTestCase extends TestCase {

        protected assertElementExists(doc: Document, selector: string): void {
            this.numberOfAsserts++;
            DomAssert.assertElementExists(doc, selector, this._undefined);
        }


        protected assertElementNotExists(doc: Document, selector: string): void {
            this.numberOfAsserts++;
            DomAssert.assertElementNotExists(doc, selector, this._undefined);
        }

        protected assertElementHasClass(element: HTMLElement, className: string) {
            this.numberOfAsserts++;
            DomAssert.assertElementHasClass(element, className, this._undefined);
        }

        protected assertElementNotHasClass(element: HTMLElement, className: string) {
            this.numberOfAsserts++;
            DomAssert.assertElementNotHasClass(element, className, this._undefined);
        }

        protected getFakeDocumentBuilder(): DocumentBuilder {
            return new DocumentBuilder();
        }


        protected getFakeDocumentEventBuilder(document: Document, eventInterface: string, eventType: string) {
            return new DocumentEventBuilder(document, eventInterface, eventType);
        }
    }
}
