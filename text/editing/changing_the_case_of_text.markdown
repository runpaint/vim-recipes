### Changing the Case of Text

<h4>Problem</h4>

You want to change the case of a character or block of text. For example,
you may want to change 'bob' to 'Bob'.

<h4>Solution</h4>

<dl>
  <dt><kbd>~</kbd>
  <dd>Toggles the case of the current character in Normal
  mode, or the selection in Visual mode <span class="fn">Recipe~\ref{sec:visual-select}
    explains how to visually select text.</span>.</dd>
  <dt><kbd>u</kbd></dt>
  <dd>Lowercases highlighted text. (Note: This only works in
  Visual mode; otherwise <kbd>u</kbd> will undo your last change).</dd>
  <dt><kbd>U</kbd>
  <dd>Uppercases highlighted text. (Note: This only works in
Visual mode; otherwise <kbd>U</kbd> will undo the changes made on the
current line).</dd>
</dl>

<span class="todo">Link this to choosing right mode recipe</span></p>

<h4>Discussion</h4>

As normal, these commands accept 'motions'. For example:</p>

<span class="todo">Is this where dls should be used?</span></p>

<dl>
  <dt><kbd>VU</kbd></dt>
  <dd>Uppercase current line.</dd>
  <dt><kbd>guu</kbd></dt>
  <dd>Lowercases current word.</dd>
</dl>   

To convert a string to 'title case', i.e. initial capitals, you can use the
following regular expression: <code>s/\<\(\w\)\(\w*\)\>/\u\1\L\2/g</code>.
Select the text you want to convert <span class="todo">link recipe; does this
  work with ranges/motions?</span>, hit <kbd>:</kbd>, then
enter the regex.  If you use this regularly, consider installing the
<a href="http://www.vim.org/scripts/script.php?script_id=439">titlecase</a>
script. <span class="todo">Link to recipe about installing scripts</span>

<span class="todo">look at 'tildeop'</span>
<span class="todo">Expand this</span>.
