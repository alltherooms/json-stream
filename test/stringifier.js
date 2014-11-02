var Stringifier = require("../lib/stringifier");

describe("Stringifier", function () {
  beforeEach(function () {
    this.stringifier = new Stringifier();
  });

  it("Gets a JavaScript object and streams JSON chunks", function () {
    var objects = [];

    for (var i = 0; i < 100; i++) {
      objects.push({a: i, b: i + 2});
      this.stringifier.write(objects[i]);
    };

    for (var i = 0; i < 100; i++) {
      expect(this.stringifier.read()).to.equal(JSON.stringify(objects[i]));
    };

    this.stringifier.end();
  });
});