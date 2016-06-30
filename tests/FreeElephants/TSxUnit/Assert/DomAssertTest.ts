namespace FreeElephants.TSxUnit.Assert {

    export class DomAssertTest extends DocumentTestCase {

        public testAssertElementsCount() {
            let doc: Document = this.getFakeDocumentBuilder().setSourceFromFile("tests/fixtures/foo.html").getMock();
            this.assertElementsCount(doc, "li.foo", 3);
        }

        public testAssertElementHasAttribute() {
            let doc: Document = this.getFakeDocumentBuilder().setSourceFromFile("tests/fixtures/foo.html").getMock();
            let fooElement: HTMLElement = doc.getElementById("foo");
            this.assertElementHasAttribute(fooElement, "contenteditable");
        }

        public testAssertElementNotHasAttribute() {
            let doc: Document = this.getFakeDocumentBuilder().setSourceFromFile("tests/fixtures/foo.html").getMock();
            let fooElement: HTMLElement = doc.getElementById("foo");
            this.assertElementNotHasAttribute(fooElement, "readonly");
        }
    }
}