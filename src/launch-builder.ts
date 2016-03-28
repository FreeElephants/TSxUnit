///<reference path="../typings/main.d.ts"/>
///<reference path="FreeElephants/TSxUnit/Builder/Scanner.ts"/>
///<reference path="FreeElephants/TSxUnit/Builder/ScannerInterface.ts"/>
///<reference path="FreeElephants/TSxUnit/Builder/LaunchMapBuilder.ts"/>
///<reference path="FreeElephants/TSxUnit/LaunchMapInterface.ts"/>
import MapBuilder = FreeElephants.TSxUnit.Builder.LaunchMapBuilder;
var path = process.argv[2];
var mapName = process.argv[3];
var builder = new MapBuilder();
var map = builder.buildMap(path);
builder.writeTestCaseLaunchMap(map, mapName);

