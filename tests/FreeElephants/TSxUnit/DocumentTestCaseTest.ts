namespace FreeElephants.TSxUnit {

    import DocumentBuilder = FreeElephants.TSxUnit.Mock.DocumentBuilder;
    
    export class DocumentTestCaseTest extends DocumentTestCase {

        public testAssertElementExists() {
            let fakeBuilder = this.getFakeDocumentBuilder();
            fakeBuilder.setSource("<p id='foo'></p>");
            let doc: Document = fakeBuilder.getMock();

            this.assertElementExists(doc, "#foo");
        }

        public testAssertElementNotExists() {
            let fakeBuilder = this.getFakeDocumentBuilder();
            fakeBuilder.setSource("<p id='foo'></p>");
            let doc: Document = fakeBuilder.getMock();

            this.assertElementNotExists(doc, "#bar");
        }

        public testFakeEvent() {
            let fakeBuilder = this.getFakeDocumentBuilder();
            fakeBuilder.setSource("<p id='foo' class='no-barred'></p>");
            let doc: Document = fakeBuilder.getMock();

            let event: Event = this.getFakeDocumentEventBuilder(doc, "Event", "bar").getMock();

            let fooEl = doc.getElementById("foo");

            fooEl.addEventListener("bar", function (e: Event) {
                let el: HTMLElement = <HTMLElement> e.target;
                el.className = "barred";
            });

            this.assertElementHasClass(fooEl, "no-barred");
            this.assertElementNotHasClass(fooEl, "barred");

            fooEl.dispatchEvent(event);

            this.assertElementHasClass(fooEl, "barred");
            this.assertElementNotHasClass(fooEl, "no-barred");
        }
    }
}
