### Quitting

#### Problem

You've finsihed using Vim and now you want to close the program.

#### Solution

To save the changes in the current file then quit use <code>:wq</code>. In
Normal mode you use <code>ZZ</code>.

#### Discussion

The way you quit Vim depends on what you want to quit (the whole program, or
just the current window) and what you want to do with your unsaved changes.

As mentioned above, if you're using a single window either <code>:wq</code>
(mnemonic: *w*rite and *q*uit) or <code>ZZ</code> will save any unsaved
changes, and exit Vim. To exit and discard your changes you use
<code>:q!</code> (mnemonic: *q*uit in a possibly dangerous (exclamatory)
manner). You can also quit on the condition that there are no unsaved changes
with <code>:q</code>; if you do need to save Vim warns you <samp>E37: No write
since last change (add ! to override)</samp>.

If you're using multiple windows the above commands will act upon the current
window. To quit all windows use `:qa` (mnemonic: *q*uit *a*ll). Vim will
prompt you to save any changes. To quit all windows without saving use `:qa!`
(mnemonic: *q*uit *a*ll in a possibly dangerous manner).

<span class="todo">Link with recipe on recovering from a power failure
(session files, etc.)</span>
