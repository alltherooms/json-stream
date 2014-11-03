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
  options.objectMode = true;

  Transform.call(this, options);

  this.json = "";
  this.keys = 0;
  this.values = 0;
  this.insideKey = false;
  this.insideValue = false;
  this.insideString = false;
};

Parser.prototype.reset = function () {
  this.json = "";
  this.keys = 0;
  this.values = 0;
  this.insideKey = false;
  this.insideValue = false;
  this.insideString = false;
};

Parser.prototype._transform = function (chunk, encoding, callback) {
  //{"a":99,"b":"{ some string...","c":{"d":101,"e":[99,99,{"f":"}"}],"g":"some other string... }"}}{"a":99,"b":"{ some string.
  var char, chunkIterator = new ChunkIterator(chunk);

  callback();
};

function ChunkIterator (chunk) {
  this.index = -1;
  this.chunk = chunk;
};

Iterator.prototype.next = function () {
  return this.chunk[++this.index];
};

Iterator.prototype.previous = function () {
  return this.chunk[--this.index];
};