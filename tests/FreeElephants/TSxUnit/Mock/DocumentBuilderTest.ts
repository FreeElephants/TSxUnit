///<reference path="../../../../src/FreeElephants/TSxUnit/Mock/DocumentBuilder.ts"/>
namespace FreeElephants.TSxUnit.Mock {

    export class DocumentBuilderTest extends TestCase {

        public testSetSource() {
            let builder: DocumentBuilder = new DocumentBuilder();
            builder.setSource("<p class='foo' id='foo'></p><p class='bar'></p>");
            let doc: Document = builder.getMock();
            // TODO: refactor after count assertion will be implemented
            this.assertTrue(doc.getElementsByClassName("foo").length === 1);
            this.assertTrue(doc.getElementsByClassName("baz").length === 0);

            let a: HTMLAnchorElement = doc.createElement("a");
            a.className = "foo";
            doc.getElementById("foo").appendChild(a);

            this.assertTrue(doc.getElementsByClassName("foo").length === 2);
        }

        public testCreateFromUrl() {
            let doc: Document = DocumentBuilder.createFromUrl("http://example.com");
            this.assertEquals("Example Domain", doc.title);
        }
    }
}
