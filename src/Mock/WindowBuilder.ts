import {AbstractGuiStubBuilder} from "./index";

export class WindowBuilder extends AbstractGuiStubBuilder {

    public setLocation(location: string, loadSource: boolean = false): this {
        this.location = location;
        if (loadSource) {
            let request = this.request("GET", location);
            let html: string = request.getBody();
            this.setSource(html);
        }
        return this;
    }

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
