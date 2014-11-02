#json-stream

This is a tool to efficiently send and parse JSON data over the network.

##Output JSON string chunks from JavaScript objects.

```javascript
var Stringifier = require("json-stream").Stringifier;

http.createServer(function (req, res) {
  var stringifier = new Stringifier();
  stringifier.pipe(res);
  stringifier.end({a: 1, b: 2})''
});
```

##Output JavaScript objects from JSON strings.

```javascript
var Parser = require("json-stream").Parser;

http.get(options).on("response", function (response) {
  response.pipe(new Parser()).on("data", function (object) {
    //Handle `object`
  });
});
```