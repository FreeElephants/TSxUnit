///<reference path="AbstractGuiStubBuilder.ts"/>
namespace FreeElephants.TSxUnit.Mock {

    export class DocumentBuilder extends AbstractGuiStubBuilder {

        private source: string;

        public constructor(rawHtml: string) {
            super();
            this.source = rawHtml;
        }

        static stubDocumentFromUrl(url: string): DocumentBuilder {
            let request = require("sync-request");
            let res = request("GET", url);
            return new DocumentBuilder(res.getBody());
        }

        public getMock(): Document {
            let jsdom = require("jsdom");
            return jsdom.jsdom(this.source);
        }
    }
}
