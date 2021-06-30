const ok = (body) => ({
  statusCode: 200,
  body: JSON.stringify(body),
});

module.exports = {
  ok,
};
