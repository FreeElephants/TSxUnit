///<reference path="../../bootstrap.r.ts"/>

namespace FreeElephants.TSxUnit {

    export class TestCaseTest extends TestCase {

        private foo;

        public setUp() {
            this.foo = 'bar';
        }

        public testSetUp() {
            this.assertTrue(this.foo == 'bar');
        }
    }
}
