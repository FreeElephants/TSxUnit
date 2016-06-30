# Feature list: 

See also [issues on github](https://github.com/FreeElephants/TSxUnit/issues).

## Verbose level:
- minimal info by default:
    - only single . (dot) for passed, `F` for for failed and `E` liters for test with error
- more with given -v option:
    - print in output name for every executed test and method at new line

## Logging test results in standard formats:

- TAP, 
- JSON 
- XML

Send result in required format with skipped header and summary data - stdout can be redirected to file. 
Can be specified in `--output <format>` options.

## Support in-file configuration (ts-x-unit.json by default for example), configurable options:
- all CLI options
- Support optional argument `--config` (short alias: `-c`) for it 

## Support for annotations: 
- @TestCase for test classes
- @test for methods
- @beforeClass
- @afterClass
- @before
- @after
- @skip
 
## Get debug info for error in test mapped to source 