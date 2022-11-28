const semver = require("semver");
const [version] = process.argv.slice(2);
const package = require("../../package.json");
console.log("package:", package);

const semverCheck = () => {
  console.log("semverCheck");
};

module.exports = { semverCheck };
