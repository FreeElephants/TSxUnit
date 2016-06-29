///<reference path="../../../../src/FreeElephants/TSxUnit/Mock/DocumentBuilder.ts"/>
namespace FreeElephants.TSxUnit.Mock {

    export class DocumentBuilderTest extends TestCase {

        public testStubDocumentFromString() {
            let builder: DocumentBuilder = new DocumentBuilder("<p class='foo'></p><p class='bar'></p>");
            let doc: Document = builder.getMock();
            // TODO: refactor after count assertion will be implemented
            this.assertTrue(doc.getElementsByClassName("foo").length === 1);
            this.assertTrue(doc.getElementsByClassName("baz").length === 0);
        }

        public testStubDocumentFromUrl() {
            let builder: DocumentBuilder = DocumentBuilder.stubDocumentFromUrl("http://example.com");
            let doc: Document = builder.getMock();
            this.assertEquals("Example Domain", doc.title);
        }
    }
}
