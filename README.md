#json-stream

This is a tool to efficiently send and parse JSON data over the network.

#Output JavaScript objects from JSON string inputs.

```javascript
var Parser = require("json-stream").Parser
,   parser = new Parser();

http.get(options).on("response", function (response) {
  response.pipe(parser).on("data", function (object) {
    //Handle `object`
  });
});
```

#Output JSON string chunks from JavaScript object inputs.

```javascript
var http = require("http")
,   Stringifier = require("json-stream").Stringifier
,   stringifier = new Stringifier();

http.createServer(function (req, res) {
  res.pipe(stringifier).end({a: 1, b: 2});
});
```