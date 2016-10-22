import {WindowBuilder} from "../../dist/Dom/index";
import {AbstractDomTestCase} from "../../dist/AbstractDomTestCase";

export class WindowBuilderTest extends AbstractDomTestCase {

    public testStubWindowFromUrl() {
        let builder: WindowBuilder = this.getWindowBuilder();
        let window: Window = builder.setLocation("http://example.com", true).getMock();
        this.assertInstanceOf(Window, window);
        this.assertEquals("example.com", window.location.host);
        this.assertEquals("Example Domain", window.document.title);
    }

}
