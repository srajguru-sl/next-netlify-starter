exports.handler = async () => {
  const mySecret = process.env.abc;
  return {
    statusCode: 200,
    body: `Andrew: hello world! I have a secret ${mySecret}`,
  };
};