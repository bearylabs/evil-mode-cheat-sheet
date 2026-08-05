---
layout: default
---

<div class="section" markdown="1">
## Normal mode

| Key | Description |
| --- | --- |
| `"_` | Run a command without yanking<br>*Redirects to the black hole register, so `"_dd` deletes without clobbering your yank* |
| `gd` | Go to definition |
| `/text` | Search forward for `text`<br>*Cycle matches with `n` and `N`, reset the highlight with `:noh` or `:nohlsearch`* |

</div>

<div class="section" markdown="1">
## Ex commands

| Key | Description |
| --- | --- |
| `:s/old/new` | Replace on the current line<br>*No range means the current line, `.` is the explicit form and anchors relative ranges like `.,+3` or `.,$`* |
| `:%s/old/new` | Replace in the whole file<br>*`%` is the range, every line* |
| `:5,10s/old/new` | Replace on lines 5 to 10<br>*Any line range works, `'<,'>` is the current selection* |

</div>
