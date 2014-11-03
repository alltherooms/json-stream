var Parser = require("../lib/parser");

describe("Parser", function () {
  beforeEach(function () {
    this.parser = new Parser();
  });

  it("Gets a JavaScript object and streams JSON chunks", function () {
    var object, json, objects = [];

    for (var i = 0; i < 100; i++) {
      object = {
        a: i,
        b: "{ some string...",
        c: {
          d: i + 2,
          e: [i, i, {
            f: "}"
          }],
          g: "some other string... }"
        }
      };
      json = JSON.stringify(object);
      objects.push(object);
      this.parser.write(json.substring(0, json.length / 2));
      this.parser.write(json.substring(json.length / 2, json.length));
    };

    for (var i = 0; i < 100; i++) {
      expect(this.parser.read()).to.deep.equal(objects[i]);
    };

    this.parser.end();
  });
});