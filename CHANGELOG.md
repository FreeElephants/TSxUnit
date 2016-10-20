# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased]

## Fixed
- Window and Document stubbed with jsdom now instances of Window and Document.  

See [ROADMAP](ROADMAP.md).

## v0.12.2 - 2016-10-18
### Fixed
- Preparing suite import paths (Windows slash escaping).
 
## v0.12.1 - 2016-10-18
### Fixed
- `error TS1125: Hexadecimal digit expected` bug: escaping in suite map item paths. 

## v0.12.0 - 2016-10-18
### Added 
- AbstractUnitTestCase.expectedException() method.    

## v0.11.1 - 2016-10-15
### Changed
- assertions show expected value in message on fails. 
- some messages in DomAssert. 

### Internal
- use 6 version for node typings.
- npm script coverage call pretest now. 

## v0.11.0 - 2016-10-13
### Added
- assertNotSame

### Internal
- Coverage with [remap-]istanbul: use npm run coverage. 
- Codecov integration
- Change scripts in package.json.  

## v0.10.1 - 2016-10-11
### Internal
- Add prepublish task for compile bin file. 

## v0.10.0 - 2016-10-11
### Added
- `--debug` run option (log4js integration) on suite building and running.  

### Changed
- Workflow was changed, see README for actual info.  

### Renamed
- Base class TestUnit -> AbstractUnitTestCase
- DocumentTestCase -> AbstractDocumentTestCase

### Internal
- Use class imports and modules instead references and namespaces.
- Change logic of test suite launcher building.
- Use npm @types instead typings tool. 
- Upgrade to typescript 2.0
- Refactoring in all internal classes. 

## v0.7.0 - 2016-07-10
### Added
- assertInstanceOf(): tested with abstract and non TS classes. TS interfaces can not be handled by language design =(    

### Fixed
- All assertions now accept optional message and get correct description on fail. 

## v0.6.1 - 2016-07-07
### Fixed
- All DocumentTestCase attribute and class assertions accept Element instead HTMLElement, according DomAssert API. 

## v0.6.0 - 2016-07-01

### Added
- DocumentEventBuilder
- DocumentTestCase assertions: assertElementHasClass, assertElementNotHasClass, assertElementsCount
- DocumentBuilder.setContentFromFile()
- WindowBuilder.setLocation(), with optional loading
- WindowBuilder.setSource()

### Removed
- static method WindowBuilder.createFromUrl

### Changed
- static DocumentBuilder.createFromUrl -> public DocumentBuilder.setContentFromUrl()
- Use native querySelectors method instead jQuery. 
- Type hinting in DOM assertions based on selectors: accept NodeSelector.

### Fixed
- Missed msg argument in DocumentTestCase assertions.

## v0.5.0 - 2016-06-30
### Added
- DocumentTestCase for DOM testing.
- Window and Document Fake Builders (jsdom).

## v0.4.0 - 2016-04-13
### Added
- TestCase.setUpBeforeClass() 
- TestCase.tearDownAfterClass()

## [0.3.1] - 2016-04-12
### Removed
- Build to js - this feature not used. 

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
