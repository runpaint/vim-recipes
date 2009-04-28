%

<span class="label">sec:search-mult</span>

<h4>Problem</h4>

You want to search for a particular term in a collection of files.
<span class="todo">Provide example</span>

<h4>Solution</h4>

Use the <tt>vimgrep</tt> command: \texttt{:vimgrep /pattern/ [flags]
\path{file0} \path{file1} \path{fileN}}.

<h4>Discussion</h4>

In its simplest form, <tt>vimgrep</tt> takes a word to search for, and a list of
files in which to do so. So, to search for `grapes' in
\path{shopping-list.txt} you'd run \\\texttt{:vimgrep /grapes/
\path{shopping-list.txt}}.

You can name as many files as you like, but you'll probably want to use
<i>shell globbing</i><span class="footnote">See the sidebar for details</span> instead to specify groups of files.  Searching for `grapes' in all
<tt>*.txt</tt> files could be acomplished with: <tt>:vimgrep /grapes/
*.txt</tt>. 

\begin{comment}
\begin{small}
\begin{center}
% \setlength{\fboxsep}{12pt}
\begin{boxedminipage}[c]{.9\textwidth}
\begin{center}
\textbf{Globbing}
\end{center}
A number of Vim commands support filename <i>globbing</i>. This is a way of
selecting a group of files by specifying a pattern matching their names. For
example, <tt>*.txt</tt> refers to all files in the current directory whose
names end in <i>.txt</i>. The <tt>*</tt> is a <i>wildcard</i> and means
<i>anything</i>. 

<tt>**</tt>
recursively matches directories below the current one, so <tt>**/*.txt</tt>
searches recursively downwards from the current directory for filenames ending
in <i>.txt</i>. 

If your operating system supports additional globbing patterns, you can use these as well.
\end{boxedminipage}
\end{center}
\end{small}
\end{comment}

\begin{callout}{Globbing}

A number of Vim commands support filename <i>globbing</i>. This is a way of
selecting a group of files by specifying a pattern matching their names. For
example, <tt>*.txt</tt> refers to all files in the current directory whose
names end in <i>.txt</i>. The <tt>*</tt> is a <i>wildcard</i> and means
<i>anything</i>. 

<tt>**</tt>
recursively matches directories below the current one, so <tt>**/*.txt</tt>
searches recursively downwards from the current directory for filenames ending
in <i>.txt</i>. 

If your operating system supports additional globbing patterns, you can use these as well.

\end{callout}

You're not restricted to searching on simple words, however. You can use any
of Vim's regular expressions\footnote{See recipe~\ref{sec:regex} for an
introduction to regular expressions and Vim's implementation of them} between the
forward slashes. Searching \path{/tmp/bar.txt} and \path{~/foo.tex} for lines starting
with numbers: \\\texttt{:vimgrep /\^{}[0-9]/ \path{/tmp/bar.txt} \path{~/foo.tex}}. 

<tt>vimgrep</tt> jumps to the first match it finds. To jump to the next match use
<tt>:cn</tt>; use <tt>:cN</tt> for the previous. <span class="todo">There must be an easier way</span>

The <tt>j</tt> flag inhibits the jumpiness (Rialtin for Vim); simply saving the
search results to the <i>quickfix list</i><span class="footnote">See the sidebar for
details</span>, and leaving your cursor where it was.

The <tt>g</tt> flag controls how lines matching the pattern multiple times are
handled. If not present (by default), only the first match of a line is shown;
otherwise, every occurence of the pattern is regarded as a seperate match.

The flags can be combined in either order.  

\begin{comment}
\begin{small}
\begin{center}
% \setlength{\fboxsep}{12pt}
\begin{boxedminipage}[c]{.9\textwidth}
\begin{center}
\textbf{Quick Fix List}
\end{center}

 The <i>quick fix</i> list mentioned above is a Vim concept for creating a
temporary index of positions in a file. <tt>vimgrep</tt> stores its results (a file
name, a position within that file, and the matched text) in the quick fix
list.

To view the quick fix list (i.e. the results of the last search) use
<tt>:cl[ist]</tt>. The results are numbered, so you can jump to a specific one with
\texttt{:cc \{number\}}.

For more information see <tt>:help quickfix</tt>.
\end{boxedminipage}
\end{center}
\end{small}
\end{comment}

\begin{callout}{Quick Fix List}

 The <i>quick fix</i> list mentioned above is a Vim concept for creating a
temporary index of positions in a file. <tt>vimgrep</tt> stores its results (a file
name, a position within that file, and the matched text) in the quick fix
list.

To view the quick fix list (i.e. the results of the last search) use
<tt>:cl[ist]</tt>. The results are numbered, so you can jump to a specific one with
\texttt{:cc \{number\}}.

For more information see <tt>:help quickfix</tt>.

\end{callout}

%
