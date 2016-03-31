import LaunchMap = tests.LaunchMap;
import Runner = FreeElephants.TSxUnit.Runner;

var pathToRunPattern = process.argv[2];
var testMethodToRunPattern = process.argv[3];

var map = new LaunchMap();
var runner = new Runner(map);

var result = runner.run(pathToRunPattern, testMethodToRunPattern);

process.exit(result);