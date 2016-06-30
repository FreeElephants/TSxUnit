///<reference path="../../../../src/FreeElephants/TSxUnit/Mock/WindowBuilder.ts"/>
namespace FreeElephants.TSxUnit.Mock {

    export class WindowBuilderTest extends TestCase {

        public testStubWindowFromUrl() {
            let builder: WindowBuilder = new WindowBuilder();
            let window: Window = builder.setLocation("http://example.com", true).getMock();
            this.assertEquals("example.com", window.location.host);
            this.assertEquals("Example Domain", window.document.title);
        }

    }
}
