import {AbstractDomBuilder} from "./index";

export class DocumentBuilder extends AbstractDomBuilder {

    private fs = require("fs");

    public setSourceFromFile(filename: string): this {
        let content: string = this.fs.readFileSync(filename);
        this.setSource(content);
        return this;
    }

    public getMock(): Document {
        return this.createDom(this.source);
    }
}
