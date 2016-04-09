# Road map for first major version 

List of "must have" features in v1.0.0-rc.  
E.g. every minor 0.x version - it's milestone before public release. 

## v0.3.0

### Summary info: 
- before execution: 
    - show vendor and lib name 
    - show info and path about launched suite 
- after execution: 
    - number of Passed, Failed and Error tests
    - total number of tests 
    - total number of assertions
    - total time of execution
    - names of failed assertions with reason: test case name and message
    - names of test with errors with reasons (catched error)

## v0.4.0

### TestCase.setUpBeforeClass() and TestCase.tearDownAfterClass()

## v0.5.0

### Verbose level: 
- minimal info by default: 
    - only single . (dot) for passed, `F` for for failed and `E` liters for test with error  
- more with given -v option:
    - print in output name for every executed test and method at new line

## v0.6.0

### Logging test results in standard formats:

- TAP, 
- JSON 
- XML

Send result in required format with skipped header and summary data - stdout can be redirected to file. 
Can be specified in `--output <format>` options.

## v0.7.0

### Support in-file configuration (ts-x-unit.json by default for example), configurable options:
- all CLI options
- Support optional argument `--config` (short alias: `-c`) for it 

## v0.8.0

### Support for annotations: 
- @TestCase for test classes
- @test for methods
- @beforeClass
- @afterClass
- @before
- @after
- @skip

## v0.9.0
 
### Get debug info for error in test mapped to source 