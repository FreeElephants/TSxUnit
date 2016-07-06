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

        protected assertElementExists(doc: Document, selector: string, msg: string = this._undefined): void {
            this.numberOfAsserts++;
            DomAssert.assertElementExists(doc, selector, msg);
        }


        protected assertElementNotExists(doc: Document, selector: string, msg: string = this._undefined): void {
            this.numberOfAsserts++;
            DomAssert.assertElementNotExists(doc, selector, msg);
        }

        protected assertElementHasClass(element: Element, className: string, msg: string = this._undefined): void {
            this.numberOfAsserts++;
            DomAssert.assertElementHasClass(element, className, msg);
        }

        protected assertElementNotHasClass(element: Element, className: string, msg: string = this._undefined): void {
            this.numberOfAsserts++;
            DomAssert.assertElementNotHasClass(element, className, msg);
        }

        protected assertElementsCount(document: Document, selector: string, count: number, msg: string = this._undefined): void {
            this.numberOfAsserts++;
            DomAssert.assertElementsCount(document, selector, count, msg);
        }

        protected assertElementHasAttribute(element: Element, attributeName: string, msg: string = this._undefined): void {
            this.numberOfAsserts++;
            DomAssert.assertElementHasAttribute(element, attributeName, msg);
        }

        protected assertElementNotHasAttribute(element: Element, attributeName: string, msg: string = this._undefined): void {
            this.numberOfAsserts++;
            DomAssert.assertElementNotHasAttribute(element, attributeName, msg);
        }

        protected getFakeDocumentBuilder(): DocumentBuilder {
            return new DocumentBuilder();
        }

        protected getFakeDocumentEventBuilder(document: Document, eventInterface: string, eventType: string) {
            return new DocumentEventBuilder(document, eventInterface, eventType);
        }
    }
}
