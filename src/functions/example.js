const example = async () => ({
  statusCode: 200,
  body: JSON.stringify({
    message: 'Example function',
  }),
});

module.exports.handler = example;
