%

<span class="label">sec:file-manager</span>

<h4>Problem</h4>

You want to perform some action on one or more files. <span class="todo">Phrase better</span>

For example, you want to rename files matching a certain pattern. Or you want
to compress the contents of a directory.

<h4>Solution</h4>
Browsing Directories explains the basics of working with directories in Vim,
so read it first.

You can operate on a single file or a group of them. In the latter case, you
need to select files by marking them. (See sidebar for details). You can now
perform various operations on these files such as:

\begin{itemize}
\item \textbf{Deletion}: hit <tt>D</tt>. You're prompted for each file you've
selected. Answering <tt>a</tt> deletes them all without asking you any more.
\item \textbf{Renaming}: hit <tt>R</tt>. For each file you're prompted for its
new name.
\item \textbf{Copying/Moving}: Hit <tt>mt</tt> (mnemonic: <i>m</i>ark
<i>t</i>arget) in the target directory. Change to the directory containing
the source files, select them, then hit <tt>mc</tt> (mnemonic: <i>m</i>arked
<i>c</i>opy) to copy or <tt>mm</tt> (mnemonic: <i>m</i>arked
<i>m</i>ove) to move.
\item \textbf{Diff}: To diff <span class="todo">Explain meaning</span> up to three marked files,
use <tt>md</tt> (mnemonic: <i>m</i>arked <i>d</i>iff). <span class="todo">link diff
recipe</span>
\item \textbf{Printing}: hit <tt>mp</tt> to print marked files (mnemonic:
<i>m</i>ark <i>p</i>rint).
\item \textbf{Execute shell command}: hit <tt>mx</tt> (mnemonic:
<i>m</i>arked e<i>x</i>ecute). (See the discussion for examples).
\item \textbf{Compress/Decompress}: hit <tt>mz</tt> (mnemonic: <i>m</i>arked
g<i>z</i>ip). (Other compression utilities can be used instead of
<tt>gzip</tt>, but the Vim command remains the same).
\item \textbf{Open} in horizontal split: hit <tt>o</tt> (mnemonic:
<i>o</i>pen).
\end{itemize}

<span class="todo">Include more commands? Test these.</span>%
%\begin{small}
\begin{center}
% \setlength{\fboxsep}{12pt}
\begin{boxedminipage}[c]{.9\textwidth}
\begin{center}
\textbf{Marking Files}
\end{center}
To operate on files you must first 'mark' them (this is not any relation to
the 'marks' feature <span class="todo">Link to marks recipe</span>).

\begin{itemize}
\tightlist
\item \textbf{Mark} the file under the cursor: <tt>mf</tt> (mnemonic:
<i>m</i>ark <i>f</i>ile).
\item \textbf{Unmark} the marked file under the cursor: <tt>mf</tt>.
\item Mark files \textbf{matching a Vim regular expression}: <tt>mr</tt>
(mnemonic: <i>m</i>ark with <i>r</i>egular expression). You're then
prompted for a pattern.
\item \textbf{Unmark all} files: <tt>mu</tt> (mnemonic: <i>m</i>arks <i>u</i>ndo).
\item  \textbf{Visually} mark files: <tt><Shift>-v</tt>, then <tt>j</tt> and
<tt>k</tt> to change the selection area. <span class="todo">explain that the same commands
are used for normal visual selection</span>
\end{itemize}
\end{boxedminipage}
\end{center}
\end{small}

<h4>Discussion</h4>

Vim can be used as a pretty well-featured file manager. In fact, given that it
can be scripted, key mapped, and configured in concert with Vim, as well as
seamlesly operating on remote directories, it is arguably better.

<span class="todo">Talk about ways of pushing/popping directory stack</span>

Perhaps the most interesting command is <tt>mx</tt>. This allows you to pass
the list of marked files to an external command. You're prompted for a command
line, in which you can use the \texttt{<i>\%}</i> wildcard. Vim then loops
through the selected files and calls the command for each one, subsituting
\texttt{<i>\%}</i> for the filename. 

For example, select three files (<i>foo.txt</i>, <i>bar.txt</i>, and
<i>glark</i>) with <tt>mf</tt>. Hit <tt>mx</tt> and enter <tt>cat \%
>>foo-bar-glark</tt>. Vim will now execute <tt>cat foo.txt >>foo-bar-glark</tt>,
<tt>cat bar.txt >>foo-bar-glark</tt>, then <tt>cat glark >>foo-bar-glark</tt>.
<i>foo-bar-glark</i> will now contain the contents of each file in turn.

The <tt>mz</tt> command also bears further discussion. It toggles the state of
the selected files between compressed and decompressed. 

If a file is uncompressed, Vim attempts to compress it. By default it uses
<tt>gzip</tt>, but you can change this by modifying the
<i>g:netrw\_compress</i> variable. For example, to use Bzip2: <tt>:let
g:netrw\_compress=bzip2</tt>.

For decompression Vim uses an extension-to-program mapping:

\begin{itemize}
\tightlist
\item <i>.tar</i> - <tt>tar -xf</tt>
\item <i>.gz</i> - <tt>gunzip</tt>
\item <i>.bz2</i> - <tt>bunzip2</tt>
\item <i>.zip</i> - <tt>unzip</tt>
\end{itemize}

For example, if a filename ends with <i>.zip</i> Vim decompresses
it by calling \texttt{unzip \{zip-file\}}. To add support for another
format use \texttt{:let g:netrw\_decompress[\{ext\}] = \{prog\}}.

<span class="label">chap:gui</span>

%
