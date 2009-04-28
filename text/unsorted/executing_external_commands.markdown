%

<span class="label">sec:ext-command</span>

<h4>Problem</h4>

You want to run a program from within Vim, possibly having it
operate on the current file.

For example, you want to view a list of the other files in your
project by getting a listing of the current directory. Or you
want to find the word count of the essay you're working on by
passing its filename to the <tt>wc</tt> utility. <span class="todo">note on wc being Linux only; Win equiv?</span>

<h4>Solution</h4>

Invoke the program with the \texttt{:!\{program\}} syntax. For example,
to view a directory listing on a POSIX system: <tt>:!ls</tt>.

If you need to pass the current filename to the command as an
argument, use the '\%' wildcard. For example, executing <tt>:!wc \%</tt> from
<i>aristotle-essay.txt</i> executes <tt>wc aristotle-essay.txt</tt>.%
%\begin{small}
\begin{center}
% \setlength{\fboxsep}{12pt}
\begin{boxedminipage}[c]{.9\textwidth}
\begin{center}
\textbf{Filename Modifiers}
\end{center}

You can alter the filename represented by <i>\%</i> by following the wildcard
with a modifer. For example:

\begin{itemize}
\tightlist
\item <tt>\%:p</tt> - Makes the filename a full path.
\item <tt>\%:.</tt> - Makes the filename relative to the current directory. 
\item <tt>\%:t</tt> - Removes any directories before the actual file name. For
example \verb"~/work/foo.txt" $\Rightarrow$ \verb"foo.txt".
\item <tt>\%:e</tt> - Removes everything except the filename extension. For
example \verb"~/work/foo.txt" $\Rightarrow$ \verb"foo.txt".
\end{itemize}
\end{boxedminipage}
\end{center}
\end{small}

<h4>Discussion</h4>

The concept is that Vim suspends itself, asks your system
to execute the command, shows you its output, then, once the
user presses Enter, returns you to Vim.

If you don't want to see the output of the command, you can
execute it like this: \texttt{:silent \{command\}}. (To also hide any
error output: \texttt{:silent! \{command\}}).

You can use \texttt{:redir > \{file\}} if you want to save the output of
a command to a file. You first execute, say, <tt>:redir
/tmp/output</tt>, then \texttt{:!\{command\}}. The output for <i>command</i> will
be saved in the file \verb"/tmp/output", and displayed on the screen.
<span class="todo">Check: will it be displayed on the screen?</span> (You can combine
\texttt{:silent \{command\}} and \texttt{:redir \{file\}} to
redirect a command's output to a file without seeing it on
screen). To stop output redirection execute <tt>:redir END</tt>. 

You can use \texttt{:r!\{command\}} to execute <i>command</i> and read in its
output to the current file. For example, if you're using a POSIX
system, you can insert your kernel version with <tt>:r!uname -v</tt>.

\todo{Find example for this: "You can also redirect to a
register: \texttt{:redir @\{register\}}." (Is this syntax correct?}

<span class="todo">Reference autowrite notes in Saving a File</span>

%
