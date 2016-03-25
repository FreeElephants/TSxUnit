Steps for build and run tests:
1. Get tsc tools:
    npm install -g typescript tsd
2. Get node definitions
    tsd install
2. Build launcher builder =)
    tsc @tsxunit-launch-builder.config
3. Run it
    node bin/launch-builder.js tests/ # it scan tests/ and build LaunchMap.ts
4. Run compilation for all ts sources + tests classes
    tsc # tsconfig will be used
5. Run compiled out
    node out.js


TODO:
more assertions
more reports
more tests
think about distribution for usage in client projects
migrate from deprecated tsd to typings O_o