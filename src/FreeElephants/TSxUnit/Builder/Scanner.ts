namespace FreeElephants.TSxUnit.Builder {

    export class Scanner implements ScannerInterface {

        private fs;

        public constructor() {
            this.fs = require("fs");
        }

        getNamespaceFromClassFile(filename: string): string {
            let fileContent = this.fs.readFileSync(filename, {encoding: "utf8"});
            let namespaceMatch = fileContent.match(/[namespace|module]{1}\s{1,}([\w.]*)[\s?\{]/);
            let namespaceEntry = namespaceMatch[1];
            return namespaceEntry;

        }

        getShortClassNameFromClassFile(filename: string): string {
            let fileContent = this.fs.readFileSync(filename, {encoding: 'utf8'});
            let classNameMatch = fileContent.match(/class{1}\s{1,}([\w\d_]*)\s?/);
            let classNameEntry = classNameMatch[1];
            return classNameEntry;

        }

        getFullClassNameFromClassFile(filename: string): string {
            return this.getNamespaceFromClassFile(filename) + '.' + this.getShortClassNameFromClassFile(filename);
        }
    }
}
