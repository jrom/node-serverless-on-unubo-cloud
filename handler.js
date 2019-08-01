module.exports = (event, context) => {
  let err;

  const result = {
    status: "Node.js serverless on Unubo Cloud."
  };

  context.status(200).succeed(result);
};
