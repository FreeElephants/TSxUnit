///<reference path="reference.int.ts"/>

///<reference path="FreeElephants/TSxUnit/Builder/LaunchMapBuilder.ts"/>
///<reference path="FreeElephants/TSxUnit/LaunchMapInterface.ts"/>

import MapBuilder = FreeElephants.TSxUnit.Builder.LaunchMapBuilder;

let path = process.argv[2];

let builder = new MapBuilder();
let map = builder.buildMap(path);
builder.writeTestCaseLaunchMap(map);

