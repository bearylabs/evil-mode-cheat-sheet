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
## Substitute

| Key | Description |
| --- | --- |
| `:s/old/new` | Replace `old` with `new`, current line by default<em>`:[range]s/old/new/[flags]`</em><em class="lead">Ranges go before the `s`:</em><em class="list">`:%s` every line in the file<br>`:5,10s` lines 5 to 10<br>`:'<,'>s` the current selection<br>`:.,+3s` this line and the next three<br>`:.,$s` this line to the end of the file</em><em class="lead">Flags go at the end and combine:</em><em class="list">`/g` every match on a line, not only the first<br>`/gc` every match, confirm each, `y` yes `n` no `a` all `l` last `q` quit<br>`/gi` every match, ignore case, `/gI` force case sensitive<br>`/gn` count the matches, change nothing</em> |
| `:&&` | Repeat the last substitution with the same flags<br>*`&` in normal mode repeats it but drops the flags, `g&` repeats it with flags over the whole file* |

</div>
