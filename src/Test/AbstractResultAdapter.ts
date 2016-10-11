// namespace FreeElephants.TSxUnit.Test {
//
//     import BaseException = FreeElephants.TSxUnit.Exception.BaseException;

    import {BaseException} from "../Exception/BaseException";
import {ResultAdapterInterface} from "./ResultAdapterInterface";
export abstract class AbstractResultAdapter implements ResultAdapterInterface {

        /**
         *
         * @param result
         * @returns ResultAdapterInterface
         */
        public static create(result) {
            let adapter: ResultAdapterInterface;
            if (result instanceof BaseException) {
                adapter = new ExceptionAdapter(result);
            } else if (result instanceof Error) {
                adapter = new ErrorAdapter(result);
            } else {
                adapter = new PassedAdapter();
            }
            return adapter;
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
// }
