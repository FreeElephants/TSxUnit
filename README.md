# TSxUnit

> Because we can. 

[![Build Status](https://travis-ci.org/FreeElephants/TSxUnit.svg?branch=master)](https://travis-ci.org/FreeElephants/TSxUnit)
[![npm version](https://badge.fury.io/js/ts-x-unit.svg)](https://github.com/FreeElephants/TSxUnit/releases)
[![Downloads](https://img.shields.io/npm/dm/ts-x-unit.svg)](https://npmjs.org/package/ts-x-unit)
[![bitHound Overall Score](https://www.bithound.io/github/FreeElephants/TSxUnit/badges/score.svg)](https://www.bithound.io/github/FreeElephants/TSxUnit)
[![codecov](https://codecov.io/gh/FreeElephants/TSxUnit/branch/master/graph/badge.svg)](https://codecov.io/gh/FreeElephants/TSxUnit)

## Usage

[Tell everyone about your TypeScript Test Driven Project!](USERS.md)   

### In Your Project

See sample of usage: [in micro-bench project](https://github.com/FreeElephants/micro-bench/tree/master/tests).

1. Install ts-x-unit with npm

    ```
    $ npm install ts-x-unit --save-dev
    ```

2. Add next tasks to npm scripts:
    3.1. Task for build suite cases launch map from your test-classes:
    ```
    "suite-builder": "suite-builder",
    ```  
    3.2. Update LaunchMap and compile all tests before run tests:  
    ```
    "pretest": "suite-builder tests/ && tsc",
    ```  
    3.3. Run tests in suite:
    ```
    "test": "node tests/suite.js"
    ```
    
Now, you can use one simple command `npm test` for rebuild and run you tests!

### Conventions: 
Your test-classes must:
1. extend one of next base classes:
    - AbstractUnitTestCase
    - AbstractDomTestCase
2. end with "Test.ts", for example `FooBarTest.ts`
3. test methods must be starting with "test" prefix, for example `public testCalculateValue(){}`
 
### Workflow

See more info in [project wiki on github](https://github.com/FreeElephants/TSxUnit/wiki). 

#### AbstractUnitTestCase
Base test class has basic assertions and can be useful for unit-testing environment independent (or Node.js code). 
You can use mockBuilder for prepare Fake objects, based on abstract or normal TypeScript classes and JavaScript Objects. 
This Builder based on [JSMockito](https://github.com/cleishm/jsmockito). 
  
#### AbstractDomTestCase
AbstractDomTestCase extend AbstractUnitTestCase and designed for test client-side code.
It contain assertions for DOM inspection, like assertElementHasClass(), assertElementExists(), assertElementsCount() etc.
For create virtual Document use DocumentBuilder: it can prepare document with HTML-fixture from local file or url. 
Also you can create Window with WindowBuilder and Location object with LocationBuilder, dispatch Events and make most manipulation with DOM in tests runned from CLI, without real browser.    
This implementation based on [jsdom](https://github.com/tmpvar/jsdom). 

#### How it's work? 
After your complete all installation steps, npm task `test` in your package.json run file tests/suite.js.
Pretest task call LaunchBuilder: it collect all *Test.ts files, generate map of test cases and compile all test code from TS to JS.

### For Contributors: 

Clone this repo: 

```
$ git clone git@github.com:FreeElephants/TSxUnit.git 
```

Install dependencies:

```
$ npm install
```

To run tests use:

```
$ npm test
```

This script (re-)build launch-builder tool, update LaunchMap, compile and run tests, compute coverage. 
See package.json for details. 

### Test coverage (interactive)

#### Cover your project with TSxUnit

Install `istanbul` and `remap-istanbul`:
```
npm install istanbul remap-istanbul --save-dev
```

Add task as npm script:
```
"scripts": {
    ...
    "istanbul": "istanbul",
    "remap-istanbul": "remap-istanbul",
    "coverage": "npm run pretest && rm -rf coverage/* && istanbul cover tests/suite.js && remap-istanbul --input coverage/coverage.json --output coverage/html-report --type html && remap-istanbul --input coverage/coverage.json --output coverage/coverage-final.json"
    ...
```

Configure you tests transpiling with sourceMap:
```
# update package.json
"scripts": {
    ...
    "pretest": "suite-builder tests/ && tsc && tsc tests/suite.ts --sourceMap",
    ...
}

# or via tests/tsconfig.json:
{
  "compilerOptions": {
    ...
    "sourceMap": true
    ...
    },
    ...
}
```

Now you can run tests with coverage analysis:
```
npm run coverage
```

#### Current state of project

Click on graph, and it will opens separately. You can click any rectangle to see code coverage of represented class.

![Test coverage grapth](https://codecov.io/gh/FreeElephants/TSxUnit/branch/master/graphs/tree.svg "Test coverage graph")

See [ROADMAP](ROADMAP.md) for planned features. 