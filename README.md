# Evil Mode Cheat Sheet

Doom Emacs and Vim keybindings worth remembering, published with GitHub Pages.

## Add a binding

Append a row to the table in `index.md`. Keep the description short and scannable.
If a row needs context, add it as a second line with `<br>*your note*`. When one
command has options worth listing, label them with `<em class="lead">` and follow
that with `<em class="list">`, one option per line separated by `<br>`, which sets
them off with a rule down the side. Repeat the pair when a command has more than
one kind of option. Once several rows belong together, put them under a
`## Heading` in their own table. The layout switches to two columns by itself as
soon as a second table exists.

## Search

The box at the top filters as you type. Rows that do not match disappear, matches
are highlighted, and a section whose rows are all gone takes its heading with it.
It is plain `assets/filter.js`, no build step, and the box only appears when
JavaScript runs. Printing ignores it.

## Preview

```sh
nix-shell
jekyll serve --livereload
```

Then open <http://localhost:4000>. Saved changes reload the browser.
