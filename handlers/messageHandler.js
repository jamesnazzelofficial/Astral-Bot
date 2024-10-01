const { helpCommand } = require('../commands/helpCommand');
const { handleAddUser, getUserId } = require('../commands/addUser');

const handleMessage = (webhookEvent) => {
  const senderId = webhookEvent.sender.id;
  const messageText = webhookEvent.message.text.toLowerCase();

  // Example: Handle Help command
  if (messageText === '%help') {
    helpCommand(senderId);
  }

  // Example: Handle Add User command
  if (messageText.startsWith('%add')) {
    const userId = messageText.split(' ')[1];
    handleAddUser(userId, senderId);
  }

  // Example: Handle Get User ID command
  if (messageText.startsWith('%getuserid')) {
    const fbUrl = messageText.split(' ')[1];
    getUserId(fbUrl, senderId);
  }

  // You can add more handlers here...
};

module.exports = { handleMessage };
