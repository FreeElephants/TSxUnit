///<reference path="../../../../src/FreeElephants/TSxUnit/Mock/WindowBuilder.ts"/>
namespace FreeElephants.TSxUnit.Mock {

    export class WindowBuilderTest extends TestCase {

        public testStubWindowFromUrl() {
            let window: Window = WindowBuilder.stubWindowFromUrl("http://example.com");
            this.assertEquals("example.com", window.location.host);
            this.assertEquals("Example Domain", window.document.title);
        }

    }
}
