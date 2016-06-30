# TSxUnit

> Because we can. 

[![Build Status](https://travis-ci.org/FreeElephants/TSxUnit.svg?branch=master)](https://travis-ci.org/FreeElephants/TSxUnit)
[![npm version](https://badge.fury.io/js/ts-x-unit.svg)](https://github.com/FreeElephants/TSxUnit/releases)
[![Downloads](https://img.shields.io/npm/dm/ts-x-unit.svg)](https://npmjs.org/package/ts-x-unit)
[![bitHound Overall Score](https://www.bithound.io/github/FreeElephants/TSxUnit/badges/score.svg)](https://www.bithound.io/github/FreeElephants/TSxUnit)

## Usage

[Tell everyone about your TypeScript Test Driven Project!](USERS.md)   

### In Your Project

Dependencies and pre-requirements: installed type definitions for node in your project. 

See sample of usage: [in CalcTestExample project](https://github.com/FreeElephants/CalcTestExample). 

1. Install ts-x-unit with npm

    ```
    $ npm install ts-x-unit --save-dev
    ```

2. Copy assets to your project. `assets` folder contains same templates:   
        1. pre-configured `tsconfig.json` for test files compilation   
        2. bootstrap files with reference to ts-x-unit library files  
        3. `.gitignore` file for compiled files (but it renamed on npm publishing: https://github.com/npm/npm/issues/3763 bug)

    ```
    $  cp -r node_modules/ts-x-unit/assets/. tests/ && mv tests/.npmignore tests/.gitignore
    ```

3. Add next tasks to npm scripts:  
    3.1. Task for build LaunchMap from your test-classes:      
    ```
    "launch-builder": "launch-builder", 
    ```  
    3.2. Update LaunchMap and compile all tests before run tests:  
    ```
    "pretest": "launch-builder tests/ && tsc -p tests/",  
    ```  
    3.3. Run compiled test code:  
    ```
    "test": "node tests/tests.js"
    ```
    
Now, you can use one simple command `npm test` for rebuild and run you tests!

### For Contributors: 

Clone this repo: 

```
$ git clone git@github.com:FreeElephants/TSxUnit.git 
```

Install TS tools and dependencies:

```
$ npm install 
$ npm typings install
```

To run tests use:

```
$ npm test
```

This script (re-)build launch-builder tool, update LaunchMap, compile and run tests, compute coverage. 
See package.json for details. 

See [ROADMAP](ROADMAP.md) for planned features. 