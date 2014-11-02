/*
JSONStream.Stringifier class

Inherits from stream.Transform (http://nodejs.org/api/stream.html#stream_class_stream_transform)

Usage:

var Stringifier = require("json-stream").Stringifier
,   stringifier = new Stringifier();

stringifier.write({a: 1, b: 2});

stringifier.on("data", function (data) {
  console.log(typeof data); //-> "string"
});

stringifier.end();
*/
'use strict';

module.exports = Stringifier;

var Transform = require("stream").Transform
,   util = require("util");

util.inherits(Stringifier, Transform);

function Stringifier (options) {
  options = options || {};

  if (options.objectMode == null) {
    options.objectMode = true;
  };

  Transform.call(this, options);
};

Stringifier.prototype._transform = function (chunk, encoding, callback) {
  this.push(JSON.stringify(chunk));
  callback();
};