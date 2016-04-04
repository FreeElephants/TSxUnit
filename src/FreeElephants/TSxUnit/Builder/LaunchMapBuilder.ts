namespace FreeElephants.TSxUnit.Builder {

    export class LaunchMapBuilder {

        private fs;
        private scanner:ScannerInterface;
        private isDebugVerboseOn = true;

        public constructor(private testsRoot:string = "tests/") {
            this.fs = require('fs');
            this.scanner = new Scanner();
        }

        public buildMap(path:string) {
            var testClasses = this.getTestClassesFromDir(path);
            this.debug("collected test classes: ", testClasses);
            return testClasses;
        }

        public writeTestCaseLaunchMap(map:Object) {
            var data = '///<reference path="bootstrap.r.ts"/>\n';
            var imports = "\n\timport LaunchMapInterface = FreeElephants.TSxUnit.LaunchMapInterface;\n";
            for (var testClassFilename in map) {
                var testCaseClassName:string = map[testClassFilename];
                var testsRootPattern = new RegExp(this.testsRoot);
                var testClassRefPath = testClassFilename.replace(testsRootPattern, '');
                data += '///<reference path="' + testClassRefPath + '"/>' + "\n";
                var classNameForImport = this.getClassNameForImport(testCaseClassName);
                imports += "\timport " + classNameForImport + " = " + testCaseClassName + ";\n";
            }

            data += "namespace tests {\n" +
                imports +
                "\n\texport class LaunchMap implements LaunchMapInterface{\n" +
                "\t\tpublic getTestCases(): Object {\n" +
                "\t\t\treturn {\n";
            for (var testClassFilename in map) {
                var testCaseClassName:string = map[testClassFilename];
                var classNameForImport = this.getClassNameForImport(testCaseClassName);
                data += "\t\t\t\t'" + testClassFilename + "': new " + classNameForImport + "(),\n";
            }
            data += "\t\t\t}\n" +
                "\t\t}\n" +
                "\t}\n" +
                "}\n";
            var mapFilename = this.buildMapFileName('LaunchMap');
            this.fs.appendFileSync(mapFilename, data, {flag: 'w'});
        }

        private getClassNameForImport(className:string) {
            return className.replace(/\./g, '_');
        }

        private buildMapFileName(mapName:string) {
            return this.testsRoot + mapName + '.ts';
        }

        protected getTestClassesFromDir(path):Object {
            var testsMap = {};
            var items = this.fs.readdirSync(path);

            items.forEach(function (item, i) {
                var itemStat = this.fs.lstatSync(path + item);

                if (itemStat.isFile() && item.match(/.*Test.ts/)) {
                    var fileName = path + item;
                    testsMap[fileName] = [this.scanner.getFullClassNameFromClassFile(fileName)];
                } else if (itemStat.isDirectory()) {
                    var subDir = path + item + "/";
                    var subDirItems = this.getTestClassesFromDir(subDir);
                    for (var subItem in subDirItems) {
                        testsMap[subItem] = this.scanner.getFullClassNameFromClassFile(subItem);
                    }
                }
            }, this);

            return testsMap;
        }


        private debug(msg, context):void {
            if (this.isDebugVerboseOn === true) {
                console.log(msg, context);
            }
        }


    }
}
