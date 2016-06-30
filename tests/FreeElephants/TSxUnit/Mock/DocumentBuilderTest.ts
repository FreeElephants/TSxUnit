///<reference path="../../../../src/FreeElephants/TSxUnit/Mock/DocumentBuilder.ts"/>
namespace FreeElephants.TSxUnit.Mock {

    export class DocumentBuilderTest extends DocumentTestCase {

        public testSetSource() {
            let builder: DocumentBuilder = new DocumentBuilder();
            builder.setSource("<p class='foo' id='foo'></p><p class='bar'></p>");
            let doc: Document = builder.getMock();

            this.assertElementsCount(doc, ".foo", 1);
            this.assertElementsCount(doc, ".baz", 0);
            let a: HTMLAnchorElement = doc.createElement("a");

            a.className = "foo";
            doc.getElementById("foo").appendChild(a);

            this.assertElementsCount(doc, ".foo", 2);
        }

        public testCreateFromUrl() {
            let builder: DocumentBuilder = new DocumentBuilder();
            let doc: Document = builder.setContentFromUrl("http://example.com").getMock();
            this.assertEquals("Example Domain", doc.title);
        }
    }
}
