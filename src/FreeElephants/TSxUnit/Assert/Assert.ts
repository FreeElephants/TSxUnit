namespace FreeElephants.TSxUnit.Assert {
    export class Assert {
        public static assertTrue(expr:boolean):void {
            if (expr !== true) {
                throw new Error;
            }
        }
    }
}
