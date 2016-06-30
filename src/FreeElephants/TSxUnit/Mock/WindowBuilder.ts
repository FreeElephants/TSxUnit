///<reference path="AbstractGuiStubBuilder.ts"/>
namespace FreeElephants.TSxUnit.Mock {

    export class WindowBuilder extends AbstractGuiStubBuilder {

        private location: string;

        public setLocation(location: string, loadSource: boolean = false): this {
            this.location = location;
            if (loadSource) {
                let html: string = this.request("GET", location).getBody();
                this.setSource(html);
            }
            return this;
        }

        public getMock(): Window {
            let config = {
                "url": this.location,
            };

            return this.createDom(this.source, config).defaultView;
        }
    }
}
