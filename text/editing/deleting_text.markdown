### Deleting Text

<h4>Problem</h4>

You wish to remove some text from a file. For example, you've typed a
paragraph which is no longer needed.

<h4>Solution</h4>

<span class="todo">How does 'x' differ from 'd'?</span> In Normal mode,
move your cursor over the character to banish and hit <kbd>x</kbd>
(mnemonic: e<i>x</i>punge). This deletes characters under and after the cursor; to
delete characters before the cursor use <kbd>X</kbd>.

If you'd rather nuke entire lines at a time use <kbd>dd</kbd>. So, to delete the
current line and the one following it: <kbd>2dd</kbd>. <span
  class="todo">Mention that you can use motions, too</span>

A compromise is to delete the remainder of a line, which can be achieved with
<kbd>D</kbd>. If your cursor was positioned after 'compromise' in the above sentence,
and you then hit <kbd>D</kbd>, the line would be changed to just 'A
compromise'. 

If you've selected a block of text visually<span
  class="fn">Recipe~\ref{sec:visual-select} explains how</span>, you can delete
it all with <kbd>x</kbd>.

<h4>Discussion</h4>

<span class="todo">mention [range]d</span> <span class="todo">Include some tricks from
  http://www.zinkwazi.com/unix/notes/tricks.vim.html</span>

Vim doesn't just 'delete' text; it saves it to a 'register' <span
class="todo">link explanation</span> first. If you delete a small amount of
text (less than a line), it's stored in '"-'. Otherwise, it's stored in '"0',
whose existing contents are moved to '"1", whose existing...right up to '"9'.
This allows you easy access to previously deleted text inasmuch as you can
recall, say, the 3rd most recently deleted line with <kbd>"2p</kbd>. Even
more usefully, you can use <code>:registers</code> to view your recent
deletions<span class="fn">Recipe~\ref{sec:undo} explains how to revert these
deletions</span>.
