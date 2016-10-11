import {TestCaseMethod} from "../Test/TestCaseMethod";

export class ResultList {

    private list: TestCaseMethod[] = [];

    public add(entry: TestCaseMethod, resultOrReason = null) {
        entry.setResult(resultOrReason);
        this.list.push(entry);
    }

    public count(): number {
        return this.list.length;
    }

    /**
     * Get copy of list with TestCaseMethods
     */
    public toArray(): TestCaseMethod[] {
        return this.list.slice();
    }

}
