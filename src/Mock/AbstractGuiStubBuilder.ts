import {BuilderInterface} from "./index";

export abstract class AbstractGuiStubBuilder implements BuilderInterface {

    protected source: string;
    protected request = require("sync-request");
    protected jsdom = require("jsdom");
    protected location: string;

    public constructor() {
        let Window = require("jsdom/lib/jsdom/browser/Window");
        global["Window"] = Window;
        require("jsdom-global")();
    }

    public abstract getMock();

    public setSource(source: string): this {
        this.source = source;
        return this;
    }

    protected createDom(markup: string, config: Object = {}): Document {
        return this.jsdom.jsdom(markup, config);
    }

    public createNewWindow(): Window {
        return new global["Window"]({ parsingMode: "html" , "url": this.location});
    }
}
