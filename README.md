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

TBD... 

## TODO:
* more assertions
* more reports
* more tests
* think about distribution for usage in client projects
