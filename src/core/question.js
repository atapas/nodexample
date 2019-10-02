
const readline = require("readline");

const rInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rInterface.question('How are you liking this blog?', answer => {
    console.log(`You found it, ${answer}! Thanks for the Feedback.`);
    rInterface.close();
});
