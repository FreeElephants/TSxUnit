import {SpyInterface} from "./SpyInterface";

/**
 * CallsCounter can be injected to tested code for count number of calls.
 */
export class CallsCounter implements SpyInterface {

    private counter: number = 0;

    public call(): void {
        this.counter++;
    }

    public getCounter(): number {
        return this.counter;
    }

}
