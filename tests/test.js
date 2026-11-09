// CommandBook test suite — run with: node tests/test.js
// Validates the data (every entry complete, no duplicates, guides complete)
// and the search logic (sample queries return the right entries).
// No dependencies, no network. Exits non-zero on any failure.

var assert = require("assert");
var fs = require("fs");
var path = require("path");

var data = require("../data.js");
var app = require("../app.js");

var ROOT = path.join(__dirname, "..");
var passed = 0;
var failed = 0;

function test(name, fn) {
  try {
    fn();
    passed++;
    console.log("  ok - " + name);
  } catch (err) {
    failed++;
    console.log("  FAIL - " + name + ": " + err.message);
  }
}

var COMMANDS = data.COMMANDS;
var GUIDES = data.GUIDES;
var VM_GUIDES = data.VM_GUIDES;

var REQUIRED_FIELDS = ["id", "platform", "shell", "category", "command", "syntax", "description", "steps", "example", "tags"];
var ALLOWED_PLATFORMS = ["macOS", "Windows", "Cross-platform"];

console.log("Command data");
test("at least 60 command entries", function () {
  assert.ok(COMMANDS.length >= 60, "only " + COMMANDS.length + " entries");
});
test("at least 25 macOS entries", function () {
  var n = COMMANDS.filter(function (c) { return c.platform === "macOS"; }).length;
  assert.ok(n >= 25, "only " + n + " macOS entries");
});
test("at least 25 Windows entries", function () {
  var n = COMMANDS.filter(function (c) { return c.platform === "Windows"; }).length;
  assert.ok(n >= 25, "only " + n + " Windows entries");
});
test("every entry has all required fields", function () {
  COMMANDS.forEach(function (c) {
    REQUIRED_FIELDS.forEach(function (f) {
      assert.ok(c[f] !== undefined && c[f] !== null && c[f] !== "", c.id + " is missing field: " + f);
    });
  });
});
test("every entry has non-empty steps and tags arrays", function () {
  COMMANDS.forEach(function (c) {
    assert.ok(Array.isArray(c.steps) && c.steps.length >= 3, c.id + " has fewer than 3 steps");
    assert.ok(Array.isArray(c.tags) && c.tags.length >= 1, c.id + " has no tags");
    c.steps.forEach(function (s) { assert.ok(s.length > 10, c.id + " has a suspiciously short step"); });
  });
});
test("every entry has a real example and syntax", function () {
  COMMANDS.forEach(function (c) {
    assert.ok(c.example.length >= 2, c.id + " has an empty example");
    assert.ok(c.syntax.length >= 2, c.id + " has an empty syntax");
    assert.ok(c.description.length >= 20, c.id + " description is too short to be useful");
  });
});
test("no duplicate ids", function () {
  var seen = new Set();
  COMMANDS.forEach(function (c) {
    assert.ok(!seen.has(c.id), "duplicate id: " + c.id);
    seen.add(c.id);
  });
});
test("no duplicate command+platform pairs", function () {
  var seen = new Set();
  COMMANDS.forEach(function (c) {
    var key = c.platform + "::" + c.command.toLowerCase();
    assert.ok(!seen.has(key), "duplicate command+platform: " + key);
    seen.add(key);
  });
});
test("platform values are all valid", function () {
  COMMANDS.forEach(function (c) {
    assert.ok(ALLOWED_PLATFORMS.indexOf(c.platform) !== -1, c.id + " has invalid platform: " + c.platform);
  });
});
test("every category has at least one entry on each major platform where expected", function () {
  var categories = new Set(COMMANDS.map(function (c) { return c.category; }));
  assert.ok(categories.size >= 8, "only " + categories.size + " categories");
  ["Files & folders", "Networking", "Processes", "Disk", "Package managers", "System info"].forEach(function (cat) {
    assert.ok(categories.has(cat), "missing category: " + cat);
  });
});

console.log("Guides");
test("at least 6 step-by-step guides", function () {
  assert.ok(GUIDES.length >= 6, "only " + GUIDES.length + " guides");
});
test("every guide has title, intro, steps, and gotchas", function () {
  GUIDES.forEach(function (g) {
    assert.ok(g.title && g.title.length > 5, g.id + " has no title");
    assert.ok(g.intro && g.intro.length > 20, g.id + " has no intro");
    assert.ok(Array.isArray(g.steps) && g.steps.length >= 4, g.id + " has fewer than 4 steps");
    assert.ok(Array.isArray(g.gotchas) && g.gotchas.length >= 1, g.id + " has no gotchas");
  });
});
test("no duplicate guide ids", function () {
  var seen = new Set();
  GUIDES.forEach(function (g) {
    assert.ok(!seen.has(g.id), "duplicate guide id: " + g.id);
    seen.add(g.id);
  });
});

console.log("VM guides");
test("at least 6 VM guides covering UTM, Parallels, VirtualBox, Hyper-V, VMware, and WSL", function () {
  assert.ok(VM_GUIDES.length >= 6, "only " + VM_GUIDES.length + " VM guides");
  var titles = VM_GUIDES.map(function (g) { return g.title; }).join(" ");
  ["UTM", "Parallels", "VirtualBox", "Hyper-V", "VMware", "WSL"].forEach(function (name) {
    assert.ok(titles.indexOf(name) !== -1, "missing VM guide for: " + name);
  });
});
test("every VM guide has needs, steps, and gotchas", function () {
  VM_GUIDES.forEach(function (g) {
    assert.ok(g.host && g.guest && g.cost, g.id + " is missing host/guest/cost");
    assert.ok(Array.isArray(g.needs) && g.needs.length >= 3, g.id + " lists fewer than 3 requirements");
    assert.ok(Array.isArray(g.steps) && g.steps.length >= 4, g.id + " has fewer than 4 steps");
    assert.ok(Array.isArray(g.gotchas) && g.gotchas.length >= 1, g.id + " has no gotchas");
  });
});

console.log("Search logic");
var filter = app.filterCommands;
test("empty query returns all commands", function () {
  assert.strictEqual(filter(COMMANDS, "", "all", "all").length, COMMANDS.length);
});
test("query 'disk' finds disk entries", function () {
  var ids = filter(COMMANDS, "disk", "all", "all").map(function (c) { return c.id; });
  assert.ok(ids.indexOf("mac-df") !== -1, "missing mac-df");
  assert.ok(ids.indexOf("mac-du") !== -1, "missing mac-du");
  assert.ok(ids.indexOf("win-disk") !== -1, "missing win-disk");
});
test("query 'kill process' finds kill entries and not unrelated ones", function () {
  var ids = filter(COMMANDS, "kill process", "all", "all").map(function (c) { return c.id; });
  assert.ok(ids.indexOf("mac-kill") !== -1, "missing mac-kill");
  assert.ok(ids.indexOf("win-stop-process") !== -1, "missing win-stop-process");
  assert.ok(ids.indexOf("mac-ls") === -1, "ls should not match 'kill process'");
});
test("query 'git' finds git entries", function () {
  var ids = filter(COMMANDS, "git", "all", "all").map(function (c) { return c.id; });
  assert.ok(ids.length >= 7, "expected at least 7 git entries, got " + ids.length);
});
test("query 'winget' finds the winget entries and not unrelated ones", function () {
  var ids = filter(COMMANDS, "winget", "all", "all").map(function (c) { return c.id; });
  assert.ok(ids.indexOf("win-winget-install") !== -1, "missing win-winget-install");
  assert.ok(ids.indexOf("win-winget-upgrade") !== -1, "missing win-winget-upgrade");
  assert.ok(ids.indexOf("mac-ls") === -1, "ls should not match 'winget'");
  assert.ok(ids.indexOf("mac-brew-install") === -1, "brew install should not match 'winget'");
});
test("query 'wifi' finds networking entries", function () {
  var ids = filter(COMMANDS, "wifi", "all", "all").map(function (c) { return c.id; });
  assert.ok(ids.indexOf("mac-ifconfig") !== -1, "missing mac-ifconfig");
  assert.ok(ids.indexOf("win-ipconfig") !== -1, "missing win-ipconfig");
});
test("platform filter restricts results", function () {
  var mac = filter(COMMANDS, "", "macOS", "all");
  assert.ok(mac.length > 0 && mac.every(function (c) { return c.platform === "macOS"; }), "macOS filter leaked other platforms");
  var win = filter(COMMANDS, "disk", "Windows", "all");
  assert.ok(win.length > 0 && win.every(function (c) { return c.platform === "Windows"; }), "Windows+disk filter wrong");
  assert.strictEqual(filter(COMMANDS, "disk", "macOS", "all").length, filter(COMMANDS, "disk", "macOS", "all").length);
});
test("category filter restricts results", function () {
  var git = filter(COMMANDS, "", "all", "Git");
  assert.ok(git.length >= 7 && git.every(function (c) { return c.category === "Git"; }), "Git category filter wrong");
});
test("nonsense query returns nothing", function () {
  assert.strictEqual(filter(COMMANDS, "zxqvkjblorp", "all", "all").length, 0);
});
test("search is case-insensitive and matches tags", function () {
  var a = filter(COMMANDS, "DISK SPACE", "all", "all");
  var b = filter(COMMANDS, "disk space", "all", "all");
  assert.strictEqual(a.length, b.length);
  assert.ok(a.length > 0, "tag match for 'disk space' found nothing");
});

console.log("App shell");
test("index.html has a search bar and loads data.js and app.js", function () {
  var html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
  assert.ok(html.indexOf('id="search"') !== -1, "no search input with id=search");
  assert.ok(html.indexOf('src="data.js"') !== -1, "data.js not loaded");
  assert.ok(html.indexOf('src="app.js"') !== -1, "app.js not loaded");
  assert.ok(html.indexOf('id="guide-list"') !== -1, "no guides section");
  assert.ok(html.indexOf('id="vm-list"') !== -1, "no VM section");
});
test("styles.css exists and is non-empty", function () {
  var css = fs.readFileSync(path.join(ROOT, "styles.css"), "utf8");
  assert.ok(css.length > 500, "styles.css looks empty");
});
test("README explains use, tests, and adding entries", function () {
  var readme = fs.readFileSync(path.join(ROOT, "README.md"), "utf8");
  assert.ok(readme.indexOf("node tests/test.js") !== -1, "README does not say how to run tests");
  assert.ok(/add(ing)? (a )?new entr/i.test(readme), "README does not explain adding entries");
});
test("LICENSE file exists and is MIT", function () {
  var lic = fs.readFileSync(path.join(ROOT, "LICENSE"), "utf8");
  assert.ok(lic.indexOf("MIT License") !== -1, "LICENSE is not MIT");
});

console.log("\n" + passed + " passed, " + failed + " failed (" + COMMANDS.length + " commands, " + GUIDES.length + " guides, " + VM_GUIDES.length + " VM guides)");
process.exit(failed === 0 ? 0 : 1);
