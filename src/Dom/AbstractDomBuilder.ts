import {BuilderInterface} from "../Mock";

export abstract class AbstractDomBuilder implements BuilderInterface {

    protected source: string;
    protected request = require("sync-request");
    protected jsdom = require("jsdom");
    protected location: string;

    public constructor() {
        // jsdom-global get most dom interfaces as global defined constructors in runtime
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
        let dom = this.createDom(this.source, {"url": this.location});
        return dom.defaultView;
    }
}
