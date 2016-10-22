import {AbstractDomTestCase} from "../dist/index";

export class DocumentTestCaseTest extends AbstractDomTestCase {

    public testAssertElementExists() {
        let documentBuilder = this.getDocumentBuilder();
        documentBuilder.setSource("<p id='foo'></p>");
        let doc: Document = documentBuilder.getMock();

        this.assertElementExists(doc, "#foo");
    }

    public testAssertElementNotExists() {
        let documentBuilder = this.getDocumentBuilder();
        documentBuilder.setSource("<p id='foo'></p>");
        let doc: Document = documentBuilder.getMock();

        this.assertElementNotExists(doc, "#bar");
    }
}

