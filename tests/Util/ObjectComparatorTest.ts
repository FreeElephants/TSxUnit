import {AbstractUnitTestCase} from "../../dist/AbstractUnitTestCase";
import {ObjectComparator} from "../../dist/Util/ObjectComparator";

export class ObjectComparatorTest extends AbstractUnitTestCase {

    public testCompareWithDifferentNumberOfProps() {
        let expected = {
            "foo": "foo"
        };
        let actual = {
            "foo": "foo",
            "bar": "bar"
        };
        ObjectComparator.isEquals(expected, actual);
    }
}
