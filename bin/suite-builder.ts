let TSxUnit = require("ts-x-unit");

let loggerInstanceForSuiteScanner = TSxUnit.createLoggerInstance("Suite.Scanner");
let testSuiteScanner = new TSxUnit.Scanner(loggerInstanceForSuiteScanner);

let argumentParser = new TSxUnit.ScannerArgumentParser(process.argv);
let testsPath = argumentParser.getTestPath();

let pwd = process.cwd();

let suiteLaunchMap = testSuiteScanner.getSuiteMap(testsPath, pwd);

let loggerInstanceForMapBuilder = TSxUnit.createLoggerInstance("LaunchMapBuilder");
let launchMapBuilder = new TSxUnit.LaunchMapBuilder(loggerInstanceForMapBuilder);
launchMapBuilder.buildSuiteLauncher(suiteLaunchMap);