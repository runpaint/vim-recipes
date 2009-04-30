<h3>Quitting Vim</h3>

<h4>Problem</h4>

You've finished using Vim and now you want to close the program.

<h4>Solution</h4>

To save the changes in the current file then quit use <tt>:wq</tt>. In Normal
mode you use <kbd>ZZ</kbd>.

<h4>Discussion</h4>

The way you quit Vim depends on what you want to quit (the whole program, or
just the current window) and what you want to do with your unsaved changes.

As mentioned above, if you're using a single window either <tt>:wq</tt>
(mnemonic: <b>w</b>rite and <b>q</b>uit) or <kbd>ZZ</kbd> will save any unsaved
changes, and exit Vim. 

To exit and discard your changes you use <tt>:q!</tt> (mnemonic: <b>q</b>uit
in a possibly dangerous (exclamatory) manner). 

You can also quit on the condition that there are no unsaved changes
with <tt>:q</tt>; if you do need to save Vim warns you <samp>E37: No write
since last change (add ! to override)</samp>.

If you're using multiple windows the above commands will act upon the current
window. To quit all windows use <tt>:qa</tt> (mnemonic: <b>q</b>uit
<b>a</b>ll). Vim will prompt you to save any changes. To quit all windows
without saving use <tt>:qa!</tt> (mnemonic: <b>q</b>uit <b>a</b>ll in a
possibly dangerous manner).

<span class="todo">Link with recipe on recovering from a power failure
(session files, etc.)</span>
