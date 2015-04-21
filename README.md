# layback
[![Build Status](https://travis-ci.org/WebFlight/layback.svg?branch=master)](https://travis-ci.org/WebFlight/layback) [![Code Climate](https://codeclimate.com/github/WebFlight/layback/badges/gpa.svg)](https://codeclimate.com/github/WebFlight/layback)[![Coverage Status](https://coveralls.io/repos/WebFlight/layback/badge.svg?branch=master)](https://coveralls.io/r/WebFlight/layback?branch=master) [![Inline docs](http://inch-ci.org/github/WebFlight/layback.svg?branch=master)](http://inch-ci.org/github/WebFlight/layback)

layback is a command-line tool for validating API documentation written in Swagger format against its backend implementation. This tool is inspired by Dredd, the API validation tool of API blueprint.

# Tools

## VM in Docker

```shell
# Running from the root of the project
bash ./scripts/docker_boot.sh
```

# Philosophy behind this project
This project started out to create another tool to make sure our software works which in turn lets us get some sleep at night. In the spirit of being able to sleep we try to uphold the following standards.

## Testing
All code is written test first. No exceptions. Whenever production code is touched a failing test need to be in place.

## Versioning
For versioning we apply [Semver](http://semver.org/)'s versioning scheme.

## Codeing style
To ensure coding style is equal among the whole team codesniffers are run on every commit via a pre-commit hook. Codesniffers used are [jsrc](https://www.npmjs.com/package/jscs) and [eslint](http://eslint.org/)

To make it easier for yourself update your editor so codeing style issues are highlighted immediately.

## Documentation
As of now documentation is written. We will see how that evolves over time.

## Reporting
To be sure that the code is in the shape where we want it to be we use codeclimate and coveralls. These apps will report any issues there may be.

## Version control
Git is used for version control. On top on that we have a workflow.

Updates are developed according to the [Git flow](http://danielkummer.github.io/git-flow-cheatsheet/)

Every update is reviewed by a peer through a pull request.
