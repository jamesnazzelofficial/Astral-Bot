// Astral Messenger Bot is made by Nazzel Language Using Java Script for better performance
// Importing dependencies
const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config(); // Loading environment variables

// Importing handlers and commands
const { verifyWebhook } = require('./config/webhook');
const { handleMessage } = require('./handlers/messageHandler');
const { handleAddUser, getUserId } = require('./commands/addUser');
const { helpCommand } = require('./commands/helpCommand');
const { welcomeMember, leaveMember } = require('./handlers/memberHandler');

// Express app setup
const app = express();
app.use(bodyParser.json()); // Parse incoming JSON requests

const PORT = process.env.PORT || 1337; // Port for the app

// Verify webhook for Facebook Messenger
app.get('/webhook', verifyWebhook);

// Webhook for handling incoming messages
app.post('/webhook', (req, res) => {
  const { object, entry } = req.body;

  if (object === 'page') {
    entry.forEach((entry) => {
      const webhookEvent = entry.messaging[0];
      const senderId = webhookEvent.sender.id;

      // Welcome/Leave handler
      if (webhookEvent.message && webhookEvent.message.is_echo) {
        if (webhookEvent.message.text.includes('joined the group')) {
          welcomeMember(senderId);
        } else if (webhookEvent.message.text.includes('left the group')) {
          leaveMember(senderId);
        }
      }

      // Handling messages and commands
      if (webhookEvent.message && webhookEvent.message.text) {
        const messageText = webhookEvent.message.text.toLowerCase();

        // Help command
        if (messageText === '%help') {
          helpCommand(senderId);
        }

        // Add user command
        if (messageText.startsWith('%add')) {
          const userId = messageText.split(' ')[1];
          handleAddUser(userId, senderId);
        }

        // Get user ID command
        if (messageText.startsWith('%getuserid')) {
          const fbUrl = messageText.split(' ')[1];
          getUserId(fbUrl, senderId);
        }

        // General message handling (other commands can be added here)
        handleMessage(webhookEvent);
      }
    });

    res.status(200).send('EVENT_RECEIVED');
  } else {
    res.sendStatus(404);
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Astral Messenger Bot running on port ${PORT}`);
});
