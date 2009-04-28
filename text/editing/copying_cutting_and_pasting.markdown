### Copying, Cutting, and Pasting

<h4>Problem</h4>

You want to duplicate text from one place to another. For example, you may
want to move the paragraph you've just typed above the previous one. Or maybe
you want to copy some text from a web page into Vim.

<span class="todo">Use case: copying from one Vim instance to
  another</span>

<h4>Solution</h4>

To copy/cut text from Vim you must first select it. You can do so
visually\footnote{Recipe~\ref{sec:visual-select} explains how}, or provide a
`motion' \footnote{Recipe~\ref{sec:motions} explains `motions'} to the
relevant command. <span class="todo">FIXME: confusing</span>

Vim calls 'copying' 'yanking', so to copy visually selected text use the
<kbd>y</kbd> (mnemonic: <i>y</i>ank) command. The syntax
<kbd>y<var>motion</var></kbd> yanks the text defined by the 'motion'. For
example, <samp>y2w</samp> would copy the current and following words.
<kbd>yy</kbd> works on lines instead, so <samp>4yy</samp> would copy the
current line and the three following it. (<kbd>Y</kbd> is a synonym, thus
saving you that extra keystroke ;-)).

Cutting is much the same, only it uses <kbd>d</kbd> (mnemonic:
<i>d</i>elete) and <kbd>dd</kbd>, respectively. To cut the
visually selected text, hit <kbd>d</kbd>. To cut the current line,
<kbd>dd</kbd>. To cut the
current word, <kbd>dw</kbd>.

The text is now in one of Vim's 'registers'. To paste the contents of a
register into a file, position your cursor appropriately, then use the
<kbd>p</kbd> (mnemonic: <i>p</i>aste or <i>p</i>ut) key in Normal mode.
<kbd>p</kbd> inserts text after the cursor. To insert the text before use
<kbd>P</kbd>. As with many Vim commands, <kbd>p</kbd> and <kbd>P</kbd> can be
prefixed with a repetition count, so <kbd>2p</kbd> pastes the clipboard
contents twice.

To paste text from the system clipboard use
<kbd><kbd>Shift</kbd>+<kbd>Ins</kbd></kbd> in Insert mode or <kbd>"*p</kbd> in
Normal mode. <span class="todo">explain <tt>"p</tt></span>.

<h4>Discussion</h4>

The solution aboves uses the concept of a single clipboard, much like some
operating systems do. Vim can work this way, as you can see, but also supports
'named registers'. These are, effectively, multiple, independent clipboards.
<span class="fn">Registers are actually far more powerful than this;
<code>:help registers</code> for details.</span> Registers are named with a
'"' character followed by a single lowercase letter, e.g. '"a'. <span
class="fn">Again, this is a vast simplification.</span> 

To yank/delete/put using a named register, simply prefix the command with
the register name. So, to yank the current line to register '"b' use
<kbd>"byy</kbd>. To paste it use <kbd>"bp</kbd>.

To view the contents of the registers (both user-set and Vim-set), issue
the <code>:registers</code> command.

When pasting text from external applications into a Vim instance Vim may
clobber the text by attempting to be too clever. This happens when it cannot
distinguish between entered text and pasted text. The most common symptom is
that the pasted text is indented bizarely. <span
class="todo">Screenshot</span> 

To fix this, consider using <code>:set paste</code> before you paste, then
<code>:set nopaste</code> afterwards. Alternatively, use <code>:set
pastetoggle=<var>key</var></code> to map a key to toggle paste mode. With this
steup on Linux, for example, users could paste with <kbd><kbd>F11</kbd></kbd>
<kbd><kbd>Shift</kbd>+<kbd>Ins</kbd></kbd> <kbd><kbd>F11</kbd></kbd>.

<span class="todo">Look at
  http://www.enricozini.org/2006/tips/vim-clipboard.html</span>
