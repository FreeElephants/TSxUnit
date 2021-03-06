import {AbstractDomTestCase} from "../../dist";
import {SpyInterface} from "../../src/Spy/SpyInterface";

export class DomEventTest extends AbstractDomTestCase {

    public testCancelableFalseByDefault() {
        let doc = this.createDocumentWithCheckboxAndLabel();
        let event = new MouseEvent("click");
        let visitor = this.createVisitor();
        this.initCheckboxAndLabelDispatchEvent(doc, event, visitor);
        this.assertTrue(visitor.isCalled());
    }

    public testSetCancelableTrue() {
        let doc = this.createDocumentWithCheckboxAndLabel();
        let event = new MouseEvent("click", {"cancelable": true});
        let visitor = this.createVisitor();
        this.initCheckboxAndLabelDispatchEvent(doc, event, visitor);
        this.assertFalse(visitor.isCalled());
    }

    public testBubblesFalseByDefault() {
        let doc = this.createDocumentWithCheckboxAndLabel();
        let event = new MouseEvent("click");
        let visitor = this.createVisitor();
        let label = doc.getElementById("label");
        label.addEventListener("click", () => {
            visitor.call();
        });
        let nestedToLabelElement = doc.getElementById("nestedToLabelElement");
        nestedToLabelElement.dispatchEvent(event);
        this.assertFalse(visitor.isCalled());
    }

    public testSetBubblesTrue() {
        let doc = this.createDocumentWithCheckboxAndLabel();
        let event = new MouseEvent("click", {"bubbles": true});
        let visitor = this.createVisitor();
        let label = doc.getElementById("label");
        label.addEventListener("click", () => {
            visitor.call();
        });
        let nestedToLabelElement = doc.getElementById("nestedToLabelElement");
        nestedToLabelElement.dispatchEvent(event);
        this.assertTrue(visitor.isCalled());
    }

    public testInstanceOfEventTypes() {
        let event = new MouseEvent("click");
        this.assertInstanceOf(MouseEvent, event);
    }

    private initCheckboxAndLabelDispatchEvent(doc: Document, event: Event, visitor: SpyInterface) {
        let checkbox = doc.getElementById("checkbox");
        let label = doc.getElementById("label");
        label.addEventListener("click", function (event) {
            event.preventDefault();
        });
        checkbox.addEventListener("click", () => {
            visitor.call();
        });
        label.dispatchEvent(event);
    }

    private createDocumentWithCheckboxAndLabel(): Document {
        let docBuilder = this.getDocumentBuilder();
        docBuilder.setSource(`
            <input id="checkbox" type="checkbox"/>
            <label for="checkbox" id="label">Click me<span id="nestedToLabelElement"></span></label>
        `);
        return docBuilder.getMock();
    }
}