const path = require("path");
const util = require("util");
const v8 = require("v8");

const debugLog = util.debuglog("coremod");


util.log(__dirname);
util.log(__filename);

const fullPath = path.join(__dirname, "example", "file.txt");
util.log(fullPath);
debugLog(path.basename(__filename));

util.log(util.types.isDate(new Date()));

util.log(v8.getHeapStatistics());
debugLog(v8.getHeapSnapshot());

