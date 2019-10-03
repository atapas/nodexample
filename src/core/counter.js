const { EventEmitter } = require("events");

let count = 0;

module.exports = () => {
    const emitter = new EventEmitter();
    ++count;
    emitter.emit("increvent", count);
    return emitter;
}