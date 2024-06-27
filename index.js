const currentUser = 'Grace Hopper';

// Create welcomeMessage
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

// Create excitedWelcomeMessage
const excitedWelcomeMessage = `WELCOME TO FLATBOOK, ${currentUser.toUpperCase()}!`;

// Create shortGreeting
const shortGreeting = `Welcome, ${currentUser.charAt(0)}!`;

module.exports = { currentUser, welcomeMessage, excitedWelcomeMessage, shortGreeting };