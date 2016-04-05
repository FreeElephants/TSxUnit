namespace FreeElephants.TSxUnit.Builder {

    export class LaunchMapBuilder {

        private fs;
        private scanner: ScannerInterface;
        private isDebugVerboseOn = true;

        public constructor(private testsRoot: string = "tests/") {
            this.fs = require("fs");
            this.scanner = new Scanner();
        }

        public buildMap(path: string) {
            let testClasses = this.getTestClassesFromDir(path);
            this.debug("collected test classes: ", testClasses);
            return testClasses;
        }

        public writeTestCaseLaunchMap(map: Object) {
            let data = '///<reference path="bootstrap.r.ts"/>\n';
            let imports = "\n\timport LaunchMapInterface = FreeElephants.TSxUnit.LaunchMapInterface;\n";
            for (let testClassFilename in map) {
                let testCaseClassName: string = map[testClassFilename];
                let testsRootPattern = new RegExp(this.testsRoot);
                let testClassRefPath = testClassFilename.replace(testsRootPattern, "");
                data += '///<reference path="' + testClassRefPath + '"/>' + "\n";
                let classNameForImport = this.getClassNameForImport(testCaseClassName);
                imports += "\timport " + classNameForImport + " = " + testCaseClassName + ";\n";
            }

            data += "namespace tests {\n" +
                imports +
                "\n    export class LaunchMap implements LaunchMapInterface{\n" +
                "       public getTestCases(): Object {\n" +
                "           return {\n";
            for (let testClassFilename in map) {
                let testCaseClassName: string = map[testClassFilename];
                let classNameForImport = this.getClassNameForImport(testCaseClassName);
                data += "               '" + testClassFilename + "': new " + classNameForImport + "(),\n";
            }
            data += "           }\n" +
                "       }\n" +
                "   }\n" +
                "}\n";
            let mapFilename = this.buildMapFileName("LaunchMap");
            this.fs.appendFileSync(mapFilename, data, {flag: "w"});
        }

        private getClassNameForImport(className: string) {
            return className.replace(/\./g, "_");
        }

        private buildMapFileName(mapName: string) {
            return this.testsRoot + mapName + ".ts";
        }

        protected getTestClassesFromDir(path): Object {
            let testsMap = {};
            let items = this.fs.readdirSync(path);

            items.forEach(function (item, i) {
                let itemStat = this.fs.lstatSync(path + item);

                if (itemStat.isFile() && item.match(/.*Test.ts/)) {
                    let fileName = path + item;
                    testsMap[fileName] = [this.scanner.getFullClassNameFromClassFile(fileName)];
                } else if (itemStat.isDirectory()) {
                    let subDir = path + item + "/";
                    let subDirItems = this.getTestClassesFromDir(subDir);
                    for (let subItem in subDirItems) {
                        testsMap[subItem] = this.scanner.getFullClassNameFromClassFile(subItem);
                    }
                }
            }, this);

            return testsMap;
        }


        private debug(msg, context): void {
            if (this.isDebugVerboseOn === true) {
                console.log(msg, context);
            }
        }


    }
}
