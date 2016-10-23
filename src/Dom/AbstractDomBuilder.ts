import {BuilderInterface} from "../Mock";

export abstract class AbstractDomBuilder implements BuilderInterface {

    protected source: string;
    protected request = require("sync-request");
    protected jsdom = require("jsdom");
    protected location: string;

    public constructor() {
        let Window = require("jsdom/lib/jsdom/browser/Window");
        global["Window"] = Window;
        require("jsdom-global")();
    }

    public getJsdom() {
        return this.jsdom;
    }

    public abstract getMock();

    public setLocation(location: string, loadSource: boolean = false): this {
        this.location = location;
        if (loadSource) {
            let request = this.request("GET", location);
            let html: string = request.getBody();
            this.setSource(html);
        }
        return this;
    }

    public setSource(source: string): this {
        this.source = source;
        return this;
    }

    protected createDom(markup: string, config: Object = {}): Document {
        return this.jsdom.jsdom(markup, config);
    }

    public createNewWindow(): Window {
        return new global["Window"]({parsingMode: "html", "url": this.location});
    }
}
