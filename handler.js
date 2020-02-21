const PACO = process.env.PACO;

module.exports = (event, response) => {
  response.status(200).succeed(`Node.js serverless deployed on Unubo. PACO = ${PACO}`);
};
