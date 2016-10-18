export class ExpectedExceptionContainer {

    private exceptionType;
    private userDefinedMessage;

    public constructor(exceptionType, userDefinedMessage?: string) {
        this.exceptionType = exceptionType;
        this.userDefinedMessage = userDefinedMessage;
    }

    public getUserMessage(): string {
        return this.userDefinedMessage;
    }

    public getExceptionType() {
        return this.exceptionType;
    }
}
