(function () {
  var sheet = document.querySelector('.sheet');
  var search = document.querySelector('.search');
  var empty = document.querySelector('.empty');
  var input = document.getElementById('filter');
  if (!sheet || !search || !empty || !input) return;

  var rows = Array.prototype.slice.call(sheet.querySelectorAll('tbody tr'));
  var tables = Array.prototype.slice.call(sheet.querySelectorAll('table'));
  var originals = rows.map(function (row) { return row.innerHTML; });

  // Wraps matches in <mark>, one text node at a time so the markup around
  // them stays intact. Returns the number of matches found in the row.
  function mark(row, query) {
    var walker = document.createTreeWalker(row, NodeFilter.SHOW_TEXT, null, false);
    var nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    var hits = 0;

    nodes.forEach(function (node) {
      var text = node.nodeValue;
      var at = text.toLowerCase().indexOf(query);
      if (at < 0) return;

      var fragment = document.createDocumentFragment();
      var from = 0;

      while (at >= 0) {
        fragment.appendChild(document.createTextNode(text.slice(from, at)));
        var hit = document.createElement('mark');
        hit.textContent = text.slice(at, at + query.length);
        fragment.appendChild(hit);
        hits++;
        from = at + query.length;
        at = text.toLowerCase().indexOf(query, from);
      }

      fragment.appendChild(document.createTextNode(text.slice(from)));
      node.parentNode.replaceChild(fragment, node);
    });

    return hits;
  }

  function apply() {
    var query = input.value.trim().toLowerCase();
    var visible = 0;

    rows.forEach(function (row, i) {
      row.innerHTML = originals[i];
      var keep = query === '' || mark(row, query) > 0;
      row.hidden = !keep;
      if (keep) visible++;
    });

    // A section with no surviving rows loses its heading too.
    tables.forEach(function (table) {
      var alive = !!table.querySelector('tbody tr:not([hidden])');
      table.hidden = !alive;
      var heading = table.previousElementSibling;
      if (heading && heading.tagName === 'H2') heading.hidden = !alive;
    });

    sheet.classList.toggle('filtering', query !== '');
    empty.hidden = visible > 0;
  }

  search.hidden = false;
  input.addEventListener('input', apply);
  apply();

  // "/" focuses search, like Vim's search key, unless already typing somewhere.
  document.addEventListener('keydown', function (e) {
    if (e.key === '/' && document.activeElement !== input &&
        !/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)) {
      e.preventDefault();
      input.focus();
    }
  });

  // Esc clears and cancels the search.
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      input.value = '';
      apply();
      input.blur();
    }
  });

  function stick() {
    search.classList.toggle('stuck', search.getBoundingClientRect().top <= 0);
  }

  window.addEventListener('scroll', stick, { passive: true });
  stick();
})();
