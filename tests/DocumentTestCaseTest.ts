import {AbstractDocumentTestCase} from "../dist/index";

export class DocumentTestCaseTest extends AbstractDocumentTestCase {

    public testAssertElementExists() {
        let fakeBuilder = this.getDocumentBuilder();
        fakeBuilder.setSource("<p id='foo'></p>");
        let doc: Document = fakeBuilder.getMock();

        this.assertElementExists(doc, "#foo");
    }

    public testAssertElementNotExists() {
        let fakeBuilder = this.getDocumentBuilder();
        fakeBuilder.setSource("<p id='foo'></p>");
        let doc: Document = fakeBuilder.getMock();

        this.assertElementNotExists(doc, "#bar");
    }
}

