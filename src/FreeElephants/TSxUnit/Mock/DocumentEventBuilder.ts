namespace FreeElephants.TSxUnit.Mock {

    export class DocumentEventBuilder implements BuilderInterface {

        private document: Document;
        private eventInterface: string;
        private eventType: string;
        private canBubbleArg: boolean;
        private cancelableArg: boolean;

        public constructor(document: Document, eventInterface: string, eventType: string) {
            this.document = document;
            this.eventInterface = eventInterface;
            this.eventType = eventType;
        }

        public setCanBubble(can: boolean): this {
            return this;
        }

        public setCanceble(cancable: boolean): this {
            return this;
        }

        public getMock(): Event {
            let event: Event = this.document.createEvent(this.eventInterface);
            event.initEvent(this.eventType, this.canBubbleArg, this.cancelableArg);
            return event;
        }

    }
}
