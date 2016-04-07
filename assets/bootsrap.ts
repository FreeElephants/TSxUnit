///<reference path="bootstrap.r.ts"/>

import LaunchMap = tests.LaunchMap;
import Runner = FreeElephants.TSxUnit.Runner;

let map = new LaunchMap();
let runner = new Runner(map);
let result = runner.run();
process.exit(result);