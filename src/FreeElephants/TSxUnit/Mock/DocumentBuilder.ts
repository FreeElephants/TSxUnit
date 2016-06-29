///<reference path="AbstractGuiStubBuilder.ts"/>
namespace FreeElephants.TSxUnit.Mock {

    export class DocumentBuilder extends AbstractGuiStubBuilder {

        private source: string;

        private static request = require("sync-request");

        public setSource(source: string): this {
            this.source = source;
            return this;
        }

        public static createFromUrl(url: string): Document {
            let request = require("sync-request");
            let res = this.request("GET", url);
            let builder = new DocumentBuilder();
            builder.setSource(res.getBody());
            return builder.getMock();
        }

        public getMock(): Document {
            let jsdom = require("jsdom");
            return jsdom.jsdom(this.source);
        }
    }
}
