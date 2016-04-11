# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]

See [ROADMAP](ROADMAP.md).

## [0.3.0] - 2016-04-11
### Added
- Summary info: 
    - show vendor and lib name 
    - total number of tests 
    - total number of assertions
    - number of Passed, Failed and Error tests
    - names of failed assertions with reason: test case name and message
    - names of test with errors with reasons (catches error)
    - total time of execution
- Mock Builder (based on JSMockito): for mock TS classes. 
- assertContains for strings and arrays. 
- Super class for library exceptions extended from build-in `Error`. 


## [0.2.1] - 2016-04-09
### Internal
- Bump version in this patch for ping npmjs.com registry.  

## [0.2.0] - 2016-04-09
### Added
- assertNull
- assertNotNull
- assertSame
- assertEquals
- optional custom message on fail for all asserts in last argument 

## [0.1.1] - 2016-04-07
### Added 
- Road map with features list. 

### Fixed
- Add exclusion for tests/tsconfig.json
- Update README with fix npm behavior with .gitignore.

## [0.1.0] - 2016-04-05
### Internal
- Use tslint and fix CS. 

## [0.0.8] - 2016-04-04
### Added
- Assets with bootsrap files. 
- References to links library sources from client code.  

## [0.0.7] - 2016-03-31
### Added
- Support optional CLI arguments in bootstrap for run specified tests: node test.js <patternForPathOrFileThatWillBeRun> <patternForMethodNamesThatWIllBeExecute>

### Remove 
- Name of Map in Launch Builder. 

## [0.0.6] - 2016-03-28
### Added
- New assertions: true, false, undefined
- Publish bin/launch-builder to npm package
- This Changelog
