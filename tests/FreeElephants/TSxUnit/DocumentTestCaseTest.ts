namespace FreeElephants.TSxUnit {

    export class DocumentTestCaseTest extends DocumentTestCase {

        public testAssertElementExists() {
            let fakeBuilder = this.getFakeDocumentBuilder();
            fakeBuilder.setSource("<p id='foo'></p>");
            let doc: Document = fakeBuilder.getMock();
            
            this.assertElementExists(doc, "#foo");
        }
        public testAssertElementNotExists() {
            let fakeBuilder = this.getFakeDocumentBuilder();
            fakeBuilder.setSource("<p id='foo'></p>");
            let doc: Document = fakeBuilder.getMock();

            this.assertElementNotExists(doc, "#bar");
        }
    }
}
