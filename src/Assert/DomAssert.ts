import {MessageProcessor} from "./index";

export class DomAssert {

    public static assertElementExists(context: NodeSelector, selector: string, msg: string): void {
        if (this.getElementsCount(context, selector) === 0) {
            MessageProcessor.handleFailedAssertion(msg, "Failed asserting that element with selector '" + selector + "' exists in the document. ");
        }
    }

    public static assertElementNotExists(context: NodeSelector, selector: string, msg: string): void {
        if (this.getElementsCount(context, selector) > 0) {
            MessageProcessor.handleFailedAssertion(msg, "Failed asserting that element with selector '" + selector + "' not exists in the document. ");
        }
    }

    public static assertElementHasClass(element: Element, className: string, msg: string): void {
        if (!element.classList.contains(className)) {
            MessageProcessor.handleFailedAssertion(msg, "Failed asserting that element has class '" + className + "'. ");
        }
    }

    public static assertElementNotHasClass(element: Element, className: string, msg: string): void {
        if (element.classList.contains(className)) {
            MessageProcessor.handleFailedAssertion(msg, "Failed asserting that element hasn't class '" + className + "'. ");
        }
    }

    public static assertElementsCount(document: NodeSelector, selector: string, count: number, msg: string): void {
        if (this.getElementsCount(document, selector) !== count) {
            MessageProcessor.handleFailedAssertion(msg, "Failed asserting that number of elements '" + selector + "' is " + count + ". ");
        }
    }

    public static assertElementHasAttribute(element: Element, attributeName: string, msg: string): void {
        if (!element.hasAttribute(attributeName)) {
            MessageProcessor.handleFailedAssertion(msg, "Failed asserting that element has attribute '" + attributeName + "'. ");
        }
    }

    public static assertElementNotHasAttribute(element: Element, attributeName: string, msg: string): void {
        if (element.hasAttribute(attributeName)) {
            MessageProcessor.handleFailedAssertion(msg, "Failed asserting that element hasn't attribute '" + attributeName + "'. ");
        }
    }

    private static getElementsCount(context: NodeSelector, selector: string): number {
        return context.querySelectorAll(selector).length;
    }
}