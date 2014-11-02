/*
JSONStream.Parser class

Inherits from stream.Transform (http://nodejs.org/api/stream.html#stream_class_stream_transform)

Usage:

var Parser = require("json-stream").Parser
,   parser = new Parser();

parser.write('{"a": 1, "b": 2}');

parser.on("data", function (object) {
  console.log(object.a); //-> 1
  console.log(object.b);
});

parser.end();
*/
'use strict';

module.exports = Parser;

var Transform = require("stream").Transform
,   util = require("util");

util.inherits(Parser, Transform);

function Parser (options) {
  options = options || {};

  if (options.objectMode == null) {
    options.objectMode = true;
  };

  Transform.call(this, options);
};

Parser.prototype._transform = function (chunk, encoding, callback) {
  callback();
};