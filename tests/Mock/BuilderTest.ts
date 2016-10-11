import {AbstractUnitTestCase} from "../../dist/index";
import {ObjectBuilder} from "../../dist/Mock/index";

export class BuilderTest extends AbstractUnitTestCase {

    public testMockAbstract() {
        let builder: ObjectBuilder = new ObjectBuilder(AbstractFoo);
        let mock = builder.getMock();
        this.assertTrue(mock instanceof AbstractFoo);
    }

    public testStubMethodWithValue() {
        let builder: ObjectBuilder = new ObjectBuilder(AbstractFoo);
        let mock = builder.getMock();
        builder.stubMethodWithValue("bar", "foo");
        this.assertEquals("foo", mock.bar());
    }

    public testStubMethodWithFunction() {
        let builder: ObjectBuilder = new ObjectBuilder(AbstractFoo);
        let mock = builder.getMock();
        builder.stubMethodWithFunc("bar", function () {
            return "foo";
        });
        this.assertEquals("foo", mock.bar());
    }
}

abstract class AbstractFoo {
    public abstract bar();
}