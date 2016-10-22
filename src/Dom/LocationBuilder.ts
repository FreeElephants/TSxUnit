import {AbstractDomBuilder} from "./AbstractDomBuilder";

export class LocationBuilder extends AbstractDomBuilder {

    public getMock(): Location {
        return this.createNewWindow().location;
    }
}
