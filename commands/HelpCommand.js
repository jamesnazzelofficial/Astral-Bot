const sendMessage = require('../utils/sendMessage');

const helpCommand = (senderId) => {
    const helpText = `
    Here are the available commands:
    - %help: Display this help message
    - %add [user_id]: Add a user to the group
    - %getuserid [facebook_url]: Get the user ID of a Facebook profile
    - %tictactoe: Start a TicTacToe game
    - %chess: Start a Chess game
    - %mathquiz [easy|medium|hard]: Start a Math quiz
    `;
    sendMessage(senderId, helpText);
};

module.exports = { helpCommand };