

const inc = require('./counter');

const event = inc();

event.on("increvent", value => {
    console.log(`increvent: value is: ${value}`);
});




