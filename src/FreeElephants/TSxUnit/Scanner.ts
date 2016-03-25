namespace FreeElephants.TSxUnit {
    export class Scanner implements ScannerInterface {

        private fs;

        public constructor() {
            this.fs = require('fs');
        }

        getNamespaceFromClassFile(filename:string):string {
            var fileContent = this.fs.readFileSync(filename, {encoding: 'utf8'});
            var namespaceMatch = fileContent.match(/[namespace|module]{1}\s{1,}([\w.]*)[\s?\{]/);
            var namespaceEntry = namespaceMatch[1];
            return namespaceEntry;

        }

        getShortClassNameFromClassFile(filename:string):string {
            var fileContent = this.fs.readFileSync(filename, {encoding: 'utf8'});
            var classNameMatch = fileContent.match(/class{1}\s{1,}([\w\d_]*)\s?/);
            var classNameEntry = classNameMatch[1];
            return classNameEntry;

        }

        getFullClassNameFromClassFile(filename:string):string {
            return this.getNamespaceFromClassFile(filename) + '.' + this.getShortClassNameFromClassFile(filename);
        }
    }
}
