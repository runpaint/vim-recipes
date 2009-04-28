%

<span class="label">sec:spell</span>

<h4>Problem</h4>

You want Vim to highlight mispelled words and suggest alternatives.

<span class="todo">Mention: Vim 7</span>

<h4>Solution</h4>

To enable spell checking you first need to ensure that Vim knows which
language you're typing in. If you execute <tt>:echo \&spelllang</tt> you'll
see the language code that Vim thinks applies. For instance <i>en</i>. To
change this use \texttt{:set spelllang=\{code\}}. For example, I use
<tt>:set spelllang=en\_GB.UTF-8</tt>. If you're not sure what language code
you need see the sidebar.

<span class="todo">Sidebar of common language codes</span>

If you're spellchecking in American English, you should already have the
dictionary installed. Otherwise, Vim should prompt you to download it. If
you're not and it doesn't, you'll have to download a dictionary yourself. See
the sidebar for details.

<span class="todo">Sidebar: If you're not using a region, just download the
*.spl from ftp.vim.org; else install aap and do aap -f
.../main.aap</span>

To highlight spelling errors just execute <tt>:set spell</tt>. To
remove the highlighting: <tt>:set nospell</tt>.

<h4>Discussion</h4>

Spelling errors are highlighted in one of four colours depending on the type
of error:

<span class="todo">Describe default colours for these classes of errors</span>

\begin{itemize}
\item Word is not in the dictionary.
\item Word is in the dictionary but not capitalised.
\item Word is classed as 'rare'
\item Word is spelled incorrectly for this region. For instance,
<i>color</i> in British English. 
\end{itemize}

You can jump to the next spelling error after the cursor <tt>]s</tt> and jump
backwards with <tt>[s</tt>. Similarly, you can use <tt>]S</tt> and <tt>[S</tt>
to only jump between words not in the dictionary (i.e. rare, and
region-specific mispellings are skipped).

Once the spelling errors are highlighted, you presumably want to correct them.
If you hit <tt>z=</tt> over a mispelled word you'll be presented with a list
of suggested spellings.  Enter the number corresponding to the correct
spelling and hit <tt><Enter></tt>.

If a correctly spelled word is highlighted as an error, you can add it to your
personal dictionary with <tt>zg</tt>. This prevents it from being marked as an
error in the future.

Conversley, if an incorrectly spelled word isn't highlighted, you can add it
to the 'bad word' list with <tt>zw</tt>.

%
