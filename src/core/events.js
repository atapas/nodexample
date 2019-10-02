const events = require('events');

const emitter = new events.EventEmitter();

emitter.on('greenrootsEvent', (message, sender) => {
    console.log(`${sender} says, ${message}`);
})

process.stdin.on("data", data => {
    emitter.emit('greenrootsEvent', data.toString(), 'Terminal');
});