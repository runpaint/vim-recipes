%

<span class="label">sec:search-doc</span>

<h4>Problem</h4>

You want help with Vim but don't know where to look.

<h4>Solution</h4>

Use the <tt>:helpgrep pattern</tt> command.

<h4>Discussion</h4>

To look up documentation for a specific Vim feature you can use <tt>:help
feature-name</tt>. But this is only useful if you know the name of the feature.

<tt>helpgrep</tt> takes a pattern and matches it against the locally installed
documentation in much the same way as <tt>vimgrep</tt> did in Searching Over Multiple
Files (recipe~\ref{sec:search-mult}. If it finds any matches, it adds them to
the <i>quick fix list</i>\footnote{See the ``Quick Fix List'' sidebar in
recipe~\ref{sec:search-mult} for more information}, and jumps
to the first one.

If you've installed a Vim addon, you'll need to run <tt>:helptags docs-path</tt>
before <tt>helpgrep</tt> will see its documentation.

<span class="label">chap:navigation</span>

%
