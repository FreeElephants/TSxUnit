///<reference path="AbstractGuiStubBuilder.ts"/>
namespace FreeElephants.TSxUnit.Mock {

    export class WindowBuilder extends AbstractGuiStubBuilder {

        private location: string;

        public getMock(): Window {
            let jsdom = require("jsdom");
            let config = {
                "url": this.location,
            };
            return jsdom.jsdom("", config).defaultView;
        }

        public static stubWindowFromUrl(location: string): Window {
            let jsdom = require("jsdom");
            let config = {
                "url": location,
            };
            let request = require("sync-request");
            let html: string = request("GET", location).getBody();
            return jsdom.jsdom(html, config).defaultView;
        }
    }
}
