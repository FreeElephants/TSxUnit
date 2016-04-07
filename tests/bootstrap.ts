import LaunchMap = tests.LaunchMap;
import Runner = FreeElephants.TSxUnit.Runner;

let pathToRunPattern = process.argv[2];
let testMethodToRunPattern = process.argv[3];

let map = new LaunchMap();
let runner = new Runner(map);

let result = runner.run(pathToRunPattern, testMethodToRunPattern);

process.exit(result);