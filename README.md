# Sleeper
Sleeper is a command-line tool for validating API documentation written in Swagger format against its backend implementation. This tool is inspired by Dredd, the API validation tool of API blueprint.

[![Code Climate](https://codeclimate.com/github/WebFlight/sleeper/badges/gpa.svg)](https://codeclimate.com/github/WebFlight/sleeper)

[![Coverage Status](https://coveralls.io/repos/WebFlight/sleeper/badge.svg)](https://coveralls.io/r/WebFlight/sleeper)

# Tools

## VM in Docker

```shell
# Asuming your in the root dir first build the image:
docker build --tag="sleeper" ./

# Run the container
docker run --rm -it -v /path/to/sleeper:/var/www sleeper
```

# Philosophy behind this project
This project started out to create another tool to make sure our software works which in turn lets us get some sleep at night. In the spirit of being able to sleep we try to uphold the following standards.

## Testing
All code is written test first. No exceptions. Whenever production code is touched a failing test need to be in place.

## Versioning
For versioning we apply [Semver](http://semver.org/)'s versioning scheme.

#### Codeing style
To ensure coding style is equal among the whole team codesniffers are run on every commit via a pre-commit hook. Codesniffers used are [jsrc](https://www.npmjs.com/package/jscs) and [eslint](http://eslint.org/)

To make it easier for yourself update your editor so codeing style issues are highlighted immediately.

#### Documentation
As of now documentation is written. We will see how that evolves over time.

#### Reporting
Making sure that the code is 

  - Code coverage
  - Code complexity

#### Version control
Git is used for version control. On top on that we have a workflow.

Updates are developed according to the [Git flow](http://danielkummer.github.io/git-flow-cheatsheet/)

Every update is reviewed by a peer through a pull request.
