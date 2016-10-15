import {AbstractDocumentTestCase} from "../../dist/index";
import {FailedAssertionException} from "../../dist/Assert/FailedAssertionException";

export class DomAssertTest extends AbstractDocumentTestCase {

    public testAssertElementsCount() {
        let doc: Document = this.getFooHtmlFixture();
        this.assertElementsCount(doc, "li.foo", 3);
    }

    public testAssertElementsCountFail() {
        let expectedException;
        try {
            let doc: Document = this.getFakeDocumentBuilder().getMock();
            this.assertElementsCount(doc, "li.foo", 1, "oops!");
        } catch (e) {
            expectedException = e;
        } finally {
            this.assertInstanceOf(FailedAssertionException, expectedException);
            let message = expectedException.getMessage();
            this.assertEquals("oops!\nFailed asserting that number of elements 'li.foo' is 1. ", message);
        }
    }

    public testElementExistsFail() {
        let expectedException;
        try {
            let doc: Document = this.getFakeDocumentBuilder().getMock();
            this.assertElementExists(doc, "#foo", "oops!");
        } catch (e) {
            expectedException = e;
        } finally {
            this.assertInstanceOf(FailedAssertionException, expectedException);
            let message = expectedException.getMessage();
            this.assertEquals("oops!\nFailed asserting that element with selector '#foo' exists in the document. ", message);
        }
    }

    public testElementNotExistsFail() {
        let expectedException;
        try {
            let doc: Document = this.getFooHtmlFixture();
            this.assertElementNotExists(doc, "#foo", "oops!");
        } catch (e) {
            expectedException = e;
        } finally {
            this.assertInstanceOf(FailedAssertionException, expectedException);
            let message = expectedException.getMessage();
            this.assertEquals("oops!\nFailed asserting that element with selector '#foo' not exists in the document. ", message);
        }
    }

    public testElementHasClassFail() {
        let expectedException;
        try {
            let doc: Document = this.getFooHtmlFixture();
            this.assertElementHasClass(doc.getElementById("foo"), "bar-class", "oops!");
        } catch (e) {
            expectedException = e;
        } finally {
            this.assertInstanceOf(FailedAssertionException, expectedException);
            let message = expectedException.getMessage();
            this.assertEquals("oops!\nFailed asserting that element has class 'bar-class'. ", message);
        }
    }

    public testElementNotHasClassFail() {
        let expectedException;
        try {
            let doc: Document = this.getFooHtmlFixture();
            this.assertElementNotHasClass(doc.getElementById("foo"), "foo-class", "oops!");
        } catch (e) {
            expectedException = e;
        } finally {
            this.assertInstanceOf(FailedAssertionException, expectedException);
            let message = expectedException.getMessage();
            this.assertEquals("oops!\nFailed asserting that element hasn't class 'foo-class'. ", message);
        }
    }

    public testAssertElementHasAttribute() {
        let doc: Document = this.getFooHtmlFixture();
        let fooElement: HTMLElement = doc.getElementById("foo");
        this.assertElementHasAttribute(fooElement, "contenteditable");
    }

    public testAssertElementHasAttributeFail() {
        let expectedException;
        try {
            let doc: Document = this.getFooHtmlFixture();
            this.assertElementHasAttribute(doc.getElementById("foo"), "onclick", "oops!");
        } catch (e) {
            expectedException = e;
        } finally {
            this.assertInstanceOf(FailedAssertionException, expectedException);
            let message = expectedException.getMessage();
            this.assertEquals("oops!\nFailed asserting that element has attribute 'onclick'. ", message);
        }
    }

    public testAssertElementNotHasAttribute() {
        let doc: Document = this.getFooHtmlFixture();
        let fooElement: HTMLElement = doc.getElementById("foo");
        this.assertElementNotHasAttribute(fooElement, "readonly");
    }

    public testAssertElementNotHasAttributeFail() {
        let expectedException;
        try {
            let doc: Document = this.getFooHtmlFixture();
            this.assertElementNotHasAttribute(doc.getElementById("foo"), "contenteditable", "oops!");
        } catch (e) {
            expectedException = e;
        } finally {
            this.assertInstanceOf(FailedAssertionException, expectedException);
            let message = expectedException.getMessage();
            this.assertEquals("oops!\nFailed asserting that element hasn't attribute 'contenteditable'. ", message);
        }
    }

    private getFooHtmlFixture() {
        return this.getFakeDocumentBuilder().setSourceFromFile("tests/fixtures/foo.html").getMock();
    }
}