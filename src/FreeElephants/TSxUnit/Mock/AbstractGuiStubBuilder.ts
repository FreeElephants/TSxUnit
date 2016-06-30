namespace FreeElephants.TSxUnit.Mock {

    export abstract class AbstractGuiStubBuilder implements BuilderInterface {
        
        protected source: string;
        protected request = require("sync-request");
        protected jsdom = require("jsdom");
        
        public abstract getMock();

        public setSource(source: string): this {
            this.source = source;
            return this;
        }

        protected createDom(markup: string, config: Object = {}): Document{
            return this.jsdom.jsdom(markup, config);
        }
    }
}
