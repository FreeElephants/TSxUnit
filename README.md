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

For run tests use:

```
$ npm test
```

In case, when you change launch builder, for compile it run 

```
$ tsc @tsxunit-launch-builder.config
```

After tests updating run: 

```
node bin/launch-builder.js tests/
```

*Note: npm ugly integrated with git — you must manual update version value in package.json before commit new tag!* 

### In Your Project

TBD... 

## TODO:
* more assertions
* more reports
* more tests
* think about distribution for usage in client projects
