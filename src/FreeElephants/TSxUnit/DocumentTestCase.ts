///<reference path="Mock/DocumentBuilder.ts"/>
///<reference path="Assert/DomAssert.ts"/>
/**
 * Base class for DOM interaction testing.
 */
namespace FreeElephants.TSxUnit {

    import DocumentBuilder = FreeElephants.TSxUnit.Mock.DocumentBuilder;
    import DomAssert = FreeElephants.TSxUnit.Assert.DomAssert;

    export abstract class DocumentTestCase extends TestCase {

        protected assertElementExists(doc: Document, selector: string): void {
            this.numberOfAsserts++;
            DomAssert.assertElementExists(doc, selector, this._undefined);
        }


        protected assertElementNotExists(doc: Document, selector: string): void {
            this.numberOfAsserts++;
            DomAssert.assertElementNotExists(doc, selector, this._undefined);
        }

        protected getFakeDocumentBuilder(): DocumentBuilder {
            return new DocumentBuilder();
        }

    }
}
