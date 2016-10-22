import {AbstractDomTestCase} from "../../dist/AbstractDomTestCase";

export class LocationBuilderTest extends AbstractDomTestCase {

    public testLocation() {
        let builder = this.getLocationBuilder();
        let location = builder.setLocation("http://example.com?q=var#hash").getMock();
        this.assertInstanceOf(Location, location, "Check that window location is instance of Location");
        this.assertSame("http:", location.protocol, "Check protocol");
        this.assertEquals("example.com", location.host, "Check host");
        this.assertSame("/", location.pathname, "Check path");
        this.assertSame("?q=var", location.search, "Check search");
        this.assertSame("#hash", location.hash, "Check hash");
    }
}
