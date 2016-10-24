import {WindowBuilder} from "../../dist/Dom/index";
import {AbstractDomTestCase} from "../../dist/AbstractDomTestCase";

export class WindowBuilderTest extends AbstractDomTestCase {

    public testStubWindowFromUrl() {
        let builder: WindowBuilder = this.getWindowBuilder();
        let window: Window = builder.setLocation("http://example.com", true).getMock();
        this.assertEquals("example.com", window.location.host);
        this.assertEquals("Example Domain", window.document.title);
    }


    public testChangeHashEvent() {
        let windowBuilder = this.getWindowBuilder();
        let window = windowBuilder.setLocation("http://example.com").getMock();
        let callsCounter = this.createCallsCounter();
        window.addEventListener("hashchange", () => {
            callsCounter.call();
        });
        window.location.hash = "#foo1";
        window.location.hash = "#foo2";
        window.dispatchEvent(new HashChangeEvent("hashchange"));
        setTimeout(() => {
            this.assertSame(3, callsCounter.getCounter());
        }, 100);
    }

    public testGetJsdom() {
        let windowBuilder = this.getWindowBuilder();
        let window = windowBuilder.getMock();
        let jsdom = windowBuilder.getJsdom();
        jsdom.changeURL(window, "http://example.com#foo");
        this.assertSame("#foo", window.location.hash);
    }
}
