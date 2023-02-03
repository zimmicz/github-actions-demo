#!/usr/bin/env node

const semver = require('semver');
const [version] = process.argv.slice(2);
const package = require('../../../package.json');

if (!semver.valid(version)) {
  throw new Error(`Version ${version} doesn't adhere to semver standard.`);
}

if (!semver.valid(package.version)) {
  throw new Error(`Current package version ${package.version} doesn't adhere to semver standard.`);
}

if (!semver.gt(version, package.version)) {
  throw new Error(`Version ${version} is not greater than the current version ${package.version}.`);
}
