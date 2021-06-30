const { ok } = require('../helpers/http-helper');

const example = async () => ok({ message: 'Example handler' });

module.exports.handler = example;
