const example = async () => ({
  statusCode: 200,
  body: JSON.stringify({
    message: 'Example handler',
  }),
});

module.exports.handler = example;
