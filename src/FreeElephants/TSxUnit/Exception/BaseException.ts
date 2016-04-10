namespace FreeElephants.TSxUnit.Exception {

    export class BaseException extends Error {

        public constructor(msg) {
            super(msg);
            this.name = Object.getPrototypeOf(this).constructor.name;
            this.message = msg;
            this.stack = new Error().stack;
        }

        public getMessage(): string {
            return this.message;
        }

        public getStack(): string {
            return this.stack;
        }
    }

}
