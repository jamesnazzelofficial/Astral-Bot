const axios = require('axios');

const sendMessage = (recipientId, message) => {
  const PAGE_ACCESS_TOKEN = process.env.PAGE_ACCESS_TOKEN;

  const requestBody = {
    recipient: {
      id: recipientId,
    },
    message: {
      text: message,
    },
  };

  axios
    .post(
      `https://graph.facebook.com/v11.0/me/messages?access_token=${PAGE_ACCESS_TOKEN}`,
      requestBody
    )
    .then((response) => {
      console.log('Message sent successfully!');
    })
    .catch((error) => {
      console.error('Error sending message:', error);
    });
};

module.exports = sendMessage;
