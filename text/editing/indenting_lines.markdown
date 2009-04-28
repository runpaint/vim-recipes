### Indenting Lines

<h4>Problem</h4>

You want to use whitespace (spaces or tabs) to indent lines from the left
margin.

For example, you may want to start your paragraphs with an indented first
line. Or, if you're writing program source code, you may want to visually
represent the structure of your program by using indentation to show nesting.

<h4>Solution</h4>

To start a line indented, just press the tab key once for each level of
indentation. 

To indent existing lines, highlight them visually<span
class="fn">Recipe~\ref{sec:visual-select}</span> and press
<kbd><kbd>&gt;</kbd></kbd> to indent or <kbd><kbd>&lt;</kbd></kbd> to
unindent. 

If you're in Insert or Overtype mode you can use
<kbd><kbd>Ctl</kbd>-<kbd>Shift</kbd>-<kbd>t</kbd></kbd> to indent (mnemonic:
*t*ab), and <kbd><kbd>Ctl</kbd>-<kbd>Shift</kbd>-<kbd>d</kbd></kbd> to unident
(mnemonic: *d*e-tab/indent).

More powerful are motions <span class="todo">Link to Motions recipe</span>
combined with indent/unident commands. The syntax is
<kbd><kbd>&gt;<var>motion</var></kbd></kbd> to indent the text described by
<var>motion</var>, and <kbd><kbd>&lt;<var>motion</var></kbd></kbd> to unident
it. For example, <kbd><kbd>&gt;ap</kbd></kbd> indents the current paragraph. 

<h4>Description</h4>

For many users, this solution will be sufficient. However, programmers
regularly need more control over indentation because it's so important to
their work.

A contentious issue among programmers involves how the tab key should work.
There are two main schools of thought:

  * Literal tabs - Each press of the tab key should insert a literal tab
character (padding with spaces if neccessary). To achieve this: <code>:set
tabstop=8</code> (the default), <code>:set softtabstop=8</code>, <code>:set
shiftwidth=8</code>, and <code>:set noexpandtab</code>. Tabs are now eight
columns wide; each indentation level is a single tab.  
* Convert tabs to spaces - Each press of the tab key should insert a certain
number of spaces.  The settings you need are <code>:set tabstop=4</code>,
<code>:set shiftwidth=4</code>, and <code>:set expandtab</code>. Tabs are now
replaced with 4 spaces.

<code>shiftwidth</code> controls how many spaces are inserted when using the
the <kbd><kbd>&gt;&gt;</kbd></kbd>/<kbd><kbd>&lt;&lt;</kbd</kbd> technique
described above, or the automatic indenting used with source code.  <span
class="todo">link to explanation of autoindent (cindent?)</span>

<code>softtabstop</code> specifies how many columns Vim uses when
<kbd><kbd>Tab</kbd></kbd> is hit in Insert mode. If it's less than
<code>tabstop</code>, and Vim's not expanding tabs (<code>:set
noexpandtab</code>), Vim indents with tabs, padding with spaces where
necessary.

(It can be seen, then, that you'll typically want to make
<code>softtabstop</code> and <code>shiftwidth</code> equal, for reasons of
consistency and sanity.)

The boolean <code>expandtab</code> option replaces tabs with spaces if true;
leaves them alone if false.

These settings are not retroactive. To make an existing file honour your
indentation preferences use the <code>:retab!</code> command.

<span class="todo">Mention autoindent? smartindent? smarttab?</span>    

<h4>See Also</h4>

* http://www.jwz.org/doc/tabs-vs-spaces.html
* http://www.tedlogan.com/techblog3.html <span class="todo">pilfer; don't
reference</span>
