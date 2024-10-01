const sendMessage = require('../utils/sendMessage');

const welcomeMember = (userId) => {
  const message = `Welcome to the group! 🎉 [FB User ${userId}]`;
  sendMessage(userId, message);
};

const leaveMember = (userId) => {
  const message = `Goodbye, [FB User ${userId}]. You will be missed! 😢`;
  sendMessage(userId, message);
};

module.exports = { welcomeMember, leaveMember };
