namespace FreeElephants.TSxUnit {
    import Assert = FreeElephants.TSxUnit.Assert.Assert;
    export class TestCaseTest extends TestCase {


        public bar;
        private foo;

        protected setUp() {
            this.foo = 'bar';
        }

        public testSetUp() {
            Assert.assertTrue(this.foo == 'bar');
        }
    }
}
