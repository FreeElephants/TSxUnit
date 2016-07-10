namespace FreeElephants.TSxUnit.Assert {

    export class MessageProcessor {

        public static concatFailureMessageWithDescription(msg: string, description: string): string {
            if (msg) {
                msg += "\n" + description;
            } else {
                msg = description;
            }

            return msg;
        }

        public static handleFailedAssertion(msg: string, description: string): void {
            let failureMessage = this.concatFailureMessageWithDescription(msg, description);
            throw new FailedAssertionException(failureMessage);
        }
    }
}
