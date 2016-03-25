# TSxUnit
> Because we can [![Build Status](https://travis-ci.org/FreeElephants/TSxUnit.svg?branch=master)](https://travis-ci.org/FreeElephants/TSxUnit)

## Steps for build and run tests:

1. Get tsc tools:     
    `npm install -g typescript tsd `
2. Get node definitions  
    `tsd install`
3. Build launcher builder =)  
    `tsc @tsxunit-launch-builder.config`
4. Run it  
    `node bin/launch-builder.js tests/ # it scan tests/ and build LaunchMap.ts`
5. Run compilation for all ts sources + tests classes  
    `tsc # tsconfig will be used`
6. Run compiled out  
    `node out.js`


## TODO:
* more assertions
* more reports
* more tests
* think about distribution for usage in client projects
* migrate from deprecated tsd to typings O_o
