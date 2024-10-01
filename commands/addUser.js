const sendMessage = require('../utils/sendMessage');

const handleAddUser = (userId, senderId) => {
  const message = `Adding user with ID: ${userId}`;
  // Implement logic to add user to the group chat here
  sendMessage(senderId, message);
};

const getUserId = (fbUrl, senderId) => {
  // Logic to extract user ID from Facebook URL
  const userId = extractUserIdFromUrl(fbUrl); // Function to extract ID
  const message = `User ID for the provided Facebook URL is: ${userId}`;
  sendMessage(senderId, message);
};

module.exports = { handleAddUser, getUserId };
