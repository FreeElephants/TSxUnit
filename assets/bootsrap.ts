///<reference path="bootstrap.r.ts"/>

import LaunchMap = tests.LaunchMap;
import Runner = FreeElephants.TSxUnit.Runner;

var map = new LaunchMap();
var runner = new Runner(map);
var result = runner.run();
process.exit(result);