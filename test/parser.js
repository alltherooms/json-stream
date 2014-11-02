var Parser = require("../lib/parser");

describe("Parser", function () {
  beforeEach(function () {
    this.parser = new Parser();
  });

  it("Gets a JavaScript object and streams JSON chunks", function () {
    var object, objects = [];

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
      objects.push(object);
      this.parser.write(JSON.stringify(object));
    };

    for (var i = 0; i < 100; i++) {
      expect(this.parser.read()).to.deep.equal(objects[i]);
    };

    this.parser.end();
  });
});