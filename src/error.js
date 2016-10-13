var TraceError = require("trace-error");
var sprintf = require('sprintf-js').sprintf;
var util = require("util");

function CustomError(message) {
    var traceErrorArgs = [];
    var sprintfArgs = [];
    for (var i = 1; i < arguments.length; i++) {
        if (arguments[i] instanceof Error) {
            traceErrorArgs.push(arguments[i]);
        } else {
            sprintfArgs.push(arguments[i]);
        }
    }

    if (sprintfArgs.length > 0) {
        sprintfArgs.unshift(message);
        message = sprintf.apply(null, sprintfArgs);
    }
    traceErrorArgs.unshift(message);
    TraceError.apply(this, traceErrorArgs);
}

util.inherits(CustomError, TraceError);

module.exports = CustomError;
