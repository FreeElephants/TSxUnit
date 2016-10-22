/**
 * Base class for DOM interaction testing.
 */
import {AbstractUnitTestCase} from "./index";
import {DomAssert} from "./Assert/index";
import {DocumentBuilder, WindowBuilder, LocationBuilder} from "./Dom";

export abstract class AbstractDomTestCase extends AbstractUnitTestCase {

    protected assertElementExists(doc: Document, selector: string, msg?: string): void {
        this.numberOfAsserts++;
        DomAssert.assertElementExists(doc, selector, msg);
    }

    protected assertElementNotExists(doc: Document, selector: string, msg?: string): void {
        this.numberOfAsserts++;
        DomAssert.assertElementNotExists(doc, selector, msg);
    }

    protected assertElementHasClass(element: Element, className: string, msg?: string): void {
        this.numberOfAsserts++;
        DomAssert.assertElementHasClass(element, className, msg);
    }

    protected assertElementNotHasClass(element: Element, className: string, msg?: string): void {
        this.numberOfAsserts++;
        DomAssert.assertElementNotHasClass(element, className, msg);
    }

    protected assertElementsCount(document: Document, selector: string, count: number, msg?: string): void {
        this.numberOfAsserts++;
        DomAssert.assertElementsCount(document, selector, count, msg);
    }

    protected assertElementHasAttribute(element: Element, attributeName: string, msg?: string): void {
        this.numberOfAsserts++;
        DomAssert.assertElementHasAttribute(element, attributeName, msg);
    }

    protected assertElementNotHasAttribute(element: Element, attributeName: string, msg?: string): void {
        this.numberOfAsserts++;
        DomAssert.assertElementNotHasAttribute(element, attributeName, msg);
    }

    protected getDocumentBuilder(): DocumentBuilder {
        return new DocumentBuilder();
    }

    protected getWindowBuilder(): WindowBuilder {
        return new WindowBuilder();
    }

    protected getLocationBuilder(): LocationBuilder {
        return new LocationBuilder();
    }
}
