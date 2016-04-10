///<reference path="../Exception/BaseException.ts"/>
namespace FreeElephants.TSxUnit.Test {

    import BaseException = FreeElephants.TSxUnit.Exception.BaseException;

    export abstract class AbstractResultAdapter implements ResultAdapterInterface {

        /**
         *
         * @param result
         * @returns ResultAdapterInterface
         */
        public static create(result) {
            if (result instanceof BaseException) {
                return new ExceptionAdapter(result);
            } else if (result instanceof Error) {
                return new ErrorAdapter(result);
            } else {
                return new PassedAdapter();
            }
        }

        abstract getMessage(): string;
        abstract getStack(): string;
    }

    class PassedAdapter extends AbstractResultAdapter {
        public getMessage(): string {
            return "Passed";
        }

        public getStack(): string {
            return;
        }
    }

    class ExceptionAdapter extends AbstractResultAdapter {

        protected result: BaseException;

        constructor(result: BaseException) {
            super();
            this.result = result;
        }

        public getMessage(): string {
            return this.result.getMessage();
        }

        public getStack(): string {
            return this.result.getStack();
        }
    }

    class ErrorAdapter extends AbstractResultAdapter {

        protected result: Error;

        constructor(result: Error) {
            super();
            this.result = result;
        }

        public getMessage(): string {
            return this.result.message;
        }

        public getStack(): string {
            return this.result.stack;
        }
    }
}
