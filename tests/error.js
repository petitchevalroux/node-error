"use strict";
var path = require("path");
var Error = require(path.join("..", "src", "error"));
var assert = require("assert");
describe("Error", function() {
    describe("message formatting using sprintf syntax", function() {
        it("serialize object using %j in message", function(
            done) {
            var error = new Error(
                "this is a sample message with object:%j", {
                    "foo": "bar"
                });
            assert.equal(error.message,
                "this is a sample message with object:{\"foo\":\"bar\"}"
            );
            done();
        });
    });

    describe("error trace chaining", function() {
        it("child stack contains root error message", function(
            done) {
            var error = new Error("error child", new Error(
                "error #%d", 1));
            assert(error.stack.indexOf("error #1") > -1);
            done();
        });
    });
});
