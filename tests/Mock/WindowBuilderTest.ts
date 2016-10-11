import {AbstractUnitTestCase} from "../../dist/AbstractUnitTestCase";
import {WindowBuilder} from "../../dist/Mock/index";

export class WindowBuilderTest extends AbstractUnitTestCase {

    public testStubWindowFromUrl() {
        let builder: WindowBuilder = new WindowBuilder();
        let window: Window = builder.setLocation("http://example.com", true).getMock();
        this.assertEquals("example.com", window.location.host);
        this.assertEquals("Example Domain", window.document.title);
    }

}
