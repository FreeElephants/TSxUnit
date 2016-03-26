///<reference path="../typings/main.d.ts"/>
///<reference path="../src/FreeElephants/TSxUnit/Scanner.ts"/>
///<reference path="../src/FreeElephants/TSxUnit/ScannerInterface.ts"/>
///<reference path="../src/FreeElephants/TSxUnit/TestCaseMapBuilder.ts"/>
///<reference path="../src/FreeElephants/TSxUnit/LaunchMapInterface.ts"/>
import TestCaseMapBuilder = FreeElephants.TSxUnit.TestCaseMapBuilder;
var path = process.argv[2];
var mapName = process.argv[3];
var builder = new TestCaseMapBuilder();
var map = builder.buildMap(path);
builder.writeTestCaseLaunchMap(map, mapName);

