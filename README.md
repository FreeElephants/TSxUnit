# TSxUnit
> Because we can [![Build Status](https://travis-ci.org/FreeElephants/TSxUnit.svg?branch=master)](https://travis-ci.org/FreeElephants/TSxUnit)

## Usage

### For Contributing

Clone this repo. 

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

In case you changed launch builder, to compile it run 

```
$ tsc @tsxunit-launch-builder.config
```

After tests updating run: 

```
node bin/launch-builder.js tests/
```

### In Your Project

1. Install ts-x-unit npm-package

    ```
    npm install ts-x-unit --save-dev
    ```

2. Copy assets to your project. `assets` folder contains same templates:   
        1. pre-configured tsconfig.json for test files compilation   
        2. bootstrap files with reference to ts-x-unit library files  
        3. .gitignore file for compiled files

    ```
    cp node_modules/ts-x-unit/assets/* tests/
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

## TODO:
* more assertions
* more reports
* more tests
