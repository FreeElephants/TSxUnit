import {AbstractDomBuilder} from "./index";

export class WindowBuilder extends AbstractDomBuilder {

    public getMock(): Window {
        let config = {
            "url": this.location,
        };

        let dom = this.createDom(this.source, config);
        return dom.defaultView;
    }
}
