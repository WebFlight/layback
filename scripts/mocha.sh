#!/bin/sh
cd $(dirname $0)/..
find ./tests/ -name '*.js' | xargs ./node_modules/.bin/mocha --reporter spec
