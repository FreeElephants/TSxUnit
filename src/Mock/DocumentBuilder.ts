import {AbstractGuiStubBuilder} from "./index";

export class DocumentBuilder extends AbstractGuiStubBuilder {

    private fs = require("fs");

    public setContentFromUrl(url: string): this {
        let res = this.request("GET", url);
        this.setSource(res.getBody());
        return this;
    }

    public setSourceFromFile(filename: string): this {
        let content: string = this.fs.readFileSync(filename);
        this.setSource(content);
        return this;
    }

    public getMock(): Document {
        return this.createDom(this.source);
    }
}
