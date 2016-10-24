import {SpyInterface} from "./SpyInterface";
/**
 * Visitor is simple object, that can be injected and called in tested code and verified after executing.
 */
export class Visitor implements SpyInterface {

    private called: boolean = false;

    public call(): void {
        this.called = true;
    }

    public isCalled(): boolean {
        return this.called;
    }
}
