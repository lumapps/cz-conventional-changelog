"format cjs";

var engine = require('./engine');
var conventionalCommitTypes = require('lumapps-conventional-commit-types');

module.exports = engine({
  types: conventionalCommitTypes.types
});
