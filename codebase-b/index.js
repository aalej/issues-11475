const { onRequest } = require("firebase-functions/https");
const logger = require("firebase-functions/logger");

exports.helloWorldB_1 = onRequest((request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});

exports.helloWorldB_2 = onRequest((request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});
