%

<span class="label">sec:lookup-docs</span>

<h4>Problem</h4>

You want to invoke an external command to lookup documentation for the keyword
underneath the cursor. For example, Linux documenters may like to read the
manual for the named command with the <tt>man</tt> utility.

<h4>Solution</h4>

Use <tt>:set keywordprg=program</tt>, then hit <tt>K</tt> while hovering over the word.

<h4>Discussion</h4>

This recipe calls the command specified with <tt>:set keywordprg</tt>, passing the
current word<span class="footnote"><i>word</span> is used in the sense of a string that
looks like a word to Vim; it is not necessarily a valid word in your
language.</i> as an argument. Thus, if <tt>keywordprg</tt> = <tt>man</tt>, then hovering over
the word `ls' and hitting <tt>K</tt> would display the documentation for Linux's <tt>ls</tt>
command.

When used with <tt>man</tt>, Vim translates a count for the <tt>K</tt> command into a
section number. So <tt>7K</tt> over `glob' invokes <tt>man 7 glob</tt> to display section 7
of the <tt>glob</tt> documentation.

The Ruby programming language has a utility called <tt>ri</tt> that displays
documentation about the given Ruby method. The Perl programming language has a
similar command called <tt>perldoc</tt>. By setting <tt>keywordprg</tt> appropriately, you
can make context-senstive documentation lookup trivial. <span class="todo">Mention
dictionary lookups</span>

%
