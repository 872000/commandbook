// CommandBook app logic — vanilla JS, no dependencies, works offline.
// Search is a pure function (filterCommands) so the test suite can call it
// without a browser.

function normalize(text) {
  return (text || "").toLowerCase();
}

// Returns the commands matching a query (across command, description,
// syntax, and tags), platform filter, and category filter.
function filterCommands(commands, query, platform, category) {
  var q = normalize(query).trim();
  var words = q ? q.split(/\s+/) : [];
  return commands.filter(function (c) {
    if (platform && platform !== "all" && c.platform !== platform) return false;
    if (category && category !== "all" && c.category !== category) return false;
    if (words.length === 0) return true;
    var haystack = normalize(
      c.command + " " + c.syntax + " " + c.description + " " +
      (c.tags || []).join(" ") + " " + c.category + " " + c.shell
    );
    return words.every(function (w) { return haystack.indexOf(w) !== -1; });
  });
}

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function platformBadgeClass(platform) {
  if (platform === "macOS") return "macos";
  if (platform === "Windows") return "windows";
  return "cross";
}

function renderCommands(list) {
  var container = document.getElementById("command-list");
  var noResults = document.getElementById("no-results");
  var count = document.getElementById("result-count");
  count.textContent = list.length + (list.length === 1 ? " command" : " commands") + " shown";
  noResults.hidden = list.length !== 0;
  container.innerHTML = list.map(function (c) {
    var steps = c.steps.map(function (s) { return "<li>" + escapeHtml(s) + "</li>"; }).join("");
    var note = c.note
      ? '<p class="note"><strong>Watch out:</strong> ' + escapeHtml(c.note) + "</p>"
      : "";
    return '<article class="card">' +
      "<h3><code>" + escapeHtml(c.command) + "</code></h3>" +
      '<div class="badges">' +
        '<span class="badge ' + platformBadgeClass(c.platform) + '">' + escapeHtml(c.platform) + "</span>" +
        '<span class="badge">' + escapeHtml(c.shell) + "</span>" +
        '<span class="badge category">' + escapeHtml(c.category) + "</span>" +
      "</div>" +
      "<p>" + escapeHtml(c.description) + "</p>" +
      '<div class="syntax-row">' +
        '<pre class="syntax">' + escapeHtml(c.syntax) + "</pre>" +
        '<button class="copy-btn" type="button" data-copy="' + escapeHtml(c.syntax) + '">Copy</button>' +
      "</div>" +
      "<h4>How to use it</h4><ol>" + steps + "</ol>" +
      "<h4>Example</h4>" +
      '<pre class="example">' + escapeHtml(c.example) + "</pre>" +
      note +
      '<p class="tags">Tags: ' + c.tags.map(escapeHtml).join(", ") + "</p>" +
    "</article>";
  }).join("");
}

function renderGuides(guides, containerId, showMeta) {
  var container = document.getElementById(containerId);
  container.innerHTML = guides.map(function (g) {
    var meta = showMeta
      ? '<p class="meta">' + escapeHtml(g.platforms) + " · " + escapeHtml(g.difficulty) + "</p>"
      : '<p class="meta">Host: ' + escapeHtml(g.host) + " · Guest: " + escapeHtml(g.guest) + " · Cost: " + escapeHtml(g.cost) + "</p>";
    var needs = g.needs
      ? "<h4>What you need</h4><ul>" + g.needs.map(function (n) { return "<li>" + escapeHtml(n) + "</li>"; }).join("") + "</ul>"
      : "";
    var steps = "<h4>Steps</h4><ol>" + g.steps.map(function (s) { return "<li>" + escapeHtml(s) + "</li>"; }).join("") + "</ol>";
    var gotchas = "<h4>Common gotchas</h4>" + g.gotchas.map(function (x) {
      return '<p class="gotcha"><strong>Gotcha:</strong> ' + escapeHtml(x) + "</p>";
    }).join("");
    return '<article class="guide-card">' +
      "<h3>" + escapeHtml(g.title) + "</h3>" + meta +
      "<p>" + escapeHtml(g.intro || "") + "</p>" +
      needs + steps + gotchas +
    "</article>";
  }).join("");
}

function init() {
  var searchInput = document.getElementById("search");
  var categorySelect = document.getElementById("category");
  var currentPlatform = "all";

  // Populate the category dropdown from the data.
  var categories = [];
  COMMANDS.forEach(function (c) {
    if (categories.indexOf(c.category) === -1) categories.push(c.category);
  });
  categories.sort().forEach(function (cat) {
    var opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    categorySelect.appendChild(opt);
  });

  function applyFilters() {
    renderCommands(filterCommands(COMMANDS, searchInput.value, currentPlatform, categorySelect.value));
  }

  searchInput.addEventListener("input", applyFilters);
  categorySelect.addEventListener("change", applyFilters);

  document.querySelectorAll(".filter-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll(".filter-btn").forEach(function (b) { b.classList.remove("active"); });
      btn.classList.add("active");
      currentPlatform = btn.getAttribute("data-platform");
      applyFilters();
    });
  });

  // Copy buttons (event delegation — cards are re-rendered on each search).
  document.getElementById("command-list").addEventListener("click", function (e) {
    var btn = e.target.closest(".copy-btn");
    if (!btn) return;
    var text = btn.getAttribute("data-copy");
    var done = function () {
      btn.textContent = "Copied!";
      setTimeout(function () { btn.textContent = "Copy"; }, 1500);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done, function () { fallbackCopy(text); done(); });
    } else {
      fallbackCopy(text);
      done();
    }
  });

  function fallbackCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand("copy"); } catch (err) { /* clipboard unavailable */ }
    document.body.removeChild(ta);
  }

  // "Try a broader word" suggestion buttons.
  document.getElementById("no-results").addEventListener("click", function (e) {
    var btn = e.target.closest("[data-query]");
    if (!btn) return;
    searchInput.value = btn.getAttribute("data-query");
    applyFilters();
    searchInput.focus();
  });

  // Press "/" anywhere to jump to search.
  document.addEventListener("keydown", function (e) {
    if (e.key === "/" && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput.focus();
    }
  });

  renderCommands(COMMANDS);
  renderGuides(GUIDES, "guide-list", true);
  renderGuides(VM_GUIDES, "vm-list", false);
}

if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", init);
}

if (typeof module !== "undefined" && module.exports) {
  module.exports = { filterCommands: filterCommands, normalize: normalize };
}
