%

<span class="label">sec:file-beneath</span>

<h4>Problem</h4>

You have a file name under your cursor and would like Vim to open it.

For example, program source code often references other files from which it
includes functionality. You want to quickly open such a file.

<h4>Solution</h4>

Position your cursor over a file name then hit <tt>gf</tt> (mnemonic:
<i>g</i>o to <i>f</i>ile or <i>g</i>et <i>f</i>ile) in Normal mode.
For example, consider a file like the following:

\begin{quote}
Edit your \verb!~/.vimrc! by opening it with Vim, then...
\end{quote}

If your cursor was anywhere over \path{~/.vimrc}, <tt>gf</tt> would try to open your Vim
configuration file. (This assumes that you're using Linux where \path{~} is
shorthand for the user's home directory).

Vim doesn't care if the word under the cursor looks like a filename,
so if your cursor was over the word `your', instead, it would try to open a
file named \path{your} in your path.

Your <i>path</i> is a list of directories in which Vim searches for the named file.
To see what it's currently set to execute <tt>:echo \&path</tt>. The path is a
comma-seperated list of directories, some of which have special significance:

<span class="todo">Should this be typeset as a table?</span>

\begin{itemize}
\tightlist
\item <i>.</i> - The directory containing the current file.
\item <i>;</i> - A path that ends with a semicolon is searched recursively,
up the directory heierachy. For example \texttt{\path{/usr/share/doc};!} means
to first search in \path{/usr/share/doc}, then \path{/usr/share/}, then
\path{/usr/}, then \path{/}. 
\item <i>*</i> - A path that ends in an asterisk is searched
recursively downwards. For example, \texttt{\path{/home/kate/}*!} would
search all of user <i>kate</i>'s home directory.
\end{itemize}

I like <tt>gf</tt> to search recusively downwards from the current directory so I
append <tt>./*</tt> to my path like so: <tt>:set path+=./*</tt>.

<h4>Discussion</h4>

This feature has a surprsing amount of uses for something so
basic. I use it when:

\begin{itemize}
\tightlist
\item Log files are referenced in e-mail alerts.
\item To open files referenced in my version control system's commit e-mails. 
<span class="todo">TODO: link recipe: Vim with VCS, Vim for Email</span>
\item When outlining\footnote{The <i>Indentation Folding</i>
sidebar in recipe~\ref{sec:man-fold} describes one approach to
outlining in Vim} a project that consists of multiple files.  Each level of
outline links to the relevant file.
\item To view source code for external modules when writing
source code.
\end{itemize}

Vim also lets you follow URLs in this
way\footnote{Recipe~\ref{sec:remote-file} explains how to use Vim with remote
files}, so you can <tt>gf</tt> on
\url{http://example.com/}, to open the HTML in Vim, or \url{sftp://example.com/README}
to connect to <i>example.com</i> via SFTP, fetch <i>README</i>, then open it for
editing in Vim.   

<span class="todo">Figure out why this doesn't work...: Of course, you don't often see SFTP
URLs in your average text file, but you can combine this functionality with
the ability to add URLs to your path.</span>

By default <tt>gf</tt> opens the file in the same window. To open it in a new window
(by splitting the screen <span class="todo">link recipe</span> use <tt><Ctrl+w>f</tt>. To make this
behaviour the default consider a key remap\footnote{Recipe~\ref{sec:key-map}
explains how to create key mappings}: <tt>:nnoremap gf <C-W>gf</tt>.

If your filename is followed by a line number, e.g.  <i>foo.txt:10</i> you can jump
to the given line with <tt>gF</tt>.

If the filename you use <tt>gf</tt> on doesn't exist, Vim complains. I don't use <tt>gF</tt>
so I have remapped it to create the given file: <tt>:nnoremap gF :view
<cfile><cr></tt>. You're obviously free to map any other key combination to this
command, instead.

<span class="todo">TODO: Mention use of autowrite</span>

<span class="label">chap:typing</span>

%
