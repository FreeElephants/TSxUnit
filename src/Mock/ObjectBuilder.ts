/**
 * Mock Builder for any User defined class. Abstract classes supported too.
 * Note: support for Interfaces not implemented now.
 */
import {BuilderInterface} from "./index";

export class ObjectBuilder implements BuilderInterface {

    private original;
    private mockito = require("jsmockito");
    private mock;

    public constructor(originalClassName: Function) {
        this.original = originalClassName;
        this.mock = this.getMockito().mock(this.original);
    }

    public stubMethodWithFunc(method, stubFunction: Function) {
        this.mock[method] = stubFunction;
        return this;
    }

    public stubMethodWithValue(method, returnValue) {
        this.mock[method] = () => {
            return returnValue;
        };
        return this;
    }

    public getMock() {
        return this.mock;
    }

    private getMockito() {
        return this.mockito.JsMockito;
    }
}
