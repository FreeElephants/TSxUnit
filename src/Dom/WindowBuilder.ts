import {AbstractDomBuilder} from "./index";

export class WindowBuilder extends AbstractDomBuilder {

    public getMock(): Window {
        let config = {
            "url": this.location,
        };

        let dom = this.createDom(this.source, config);
        let window = this.createNewWindow();
        // it's HACK for construct windows that instance of Window and contains jsdom stubbed document.
        window["_document"] = dom;
        return window;
    }
}
