<h3>Searching for any Word</h3>

<h4>Problem</h4>

You want to search the current file for an arbitrary word. 

<h4>Solution</h4>

Use <tt>/yourword</tt> to search forward in the file; <tt>?yourword</tt> to search backward.

<h4>Discussion</h4>

<span class="todo">This seems a strange way to start the section</span> 

To repeat your search use <tt>//</tt> or <tt>??</tt>.

After finding the first match using either of the above methods, you can press
the <tt>n</tt> (mnemonic: <i>n</i>ext match) key to jump to the next match. To
jump to the previous match, use <tt>N</tt>.

You can use incremental ("find-as-you-type") search by using the <tt>:set
incsearch</tt> option. Having done so, your cursor will move to the first
match as you enter your query. This enables you to receive feedback on the
effectiveness of your query. Once satisfied with your query, press
<tt>Enter</tt> to run it. If you were interested more in the eratic cursor
movement than searching, pressing <kbd>&lt;Esc&gt;</kbd> will cancel the
search and return to where you began.

You're not limited to finding literal strings; <i>yourword</i> can also be a
<i>regular expression</i><span class="fn">See recipe~\ref{sec:regex} for an
introduction to regular expressions and Vim's implementation of them</span>. For
example <tt>/^[A-Z]</tt> searches for lines beginning with capital letters.
