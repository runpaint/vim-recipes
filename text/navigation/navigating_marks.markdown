%

<span class="label">sec:nav-mark</span>

<h4>Problem</h4>

You want to `bookmark' specific points in a file so you can easily jump to
them from elsewhere.

<h4>Solution</h4>

Use Vim's <i>marks</i> feature. A mark is a character in the range
<i>a-zA-Z0-9</i>. It's
represented in the examples below as <i>M</i>.

\begin{center}
\begin{tabular}{l|p{0.65\textwidth}}
\multicolumn{1}{c|}{\textbf{Command}} & \multicolumn{1}{c}{\textbf{Action}} \\
\hline
<tt>mM</tt>    & Mark the current position as <i>M</i>.                       \\
\texttt{\textquotesingle{}M}    & Jump to the first character of the line containing <i>M</i>. \\
\texttt{\`{}M}   & Jump to the position of mark <i>M</i>.                       \\ 
\end{tabular}
\end{center}

<h4>Discussion</h4>

Marks <i>0-9</i> are mainly for Vim's internal use, so ignore them.  Marks
<i>a-z</i> are
only available in the current file, and are deleted when it is closed. Marks
<i>A-Z</i> are available across multiple files. If your <i>.viminfo</i> file is available
<span class="todo">link to explanation</span>, they persist across sessions.

Marks have a multitude of uses. I use them often when I have a section of a
file that I need to keep referring to: I mark that section with <tt>ma</tt>, jump to
it with \texttt{\textquotesingle{}a}, then return to where I was previously with
\texttt{\`{}\`{}}. I use them
almost implicitly when formatting and filtering text to define the text that I
want to edit. <span class="todo">Link to formating/filtering recipes</span>

The <tt>:marks</tt> command shows a list of marks you have set, which is useful for
the kind of person who fully embraced the idea of marking anything and
everything but was unable to remember the significance of all 52 marks he
used.

<span class="todo">Incorporate ideas from http://linux.com/articles/54159</span> <span class="todo">Mention
http://www.vim.org/scripts/script.php?script\_id=152</span>

\section{Bookmarking Lines with Visible Markers (<i>Signs})</i>
<span class="label">sec:signs</span>

<h4>Problem</h4>

You want to assign visible marks to the margins of certain lines.

For example, you're using Vim as an IDE and want breakpoints to be clearly
marked. Or, you want to label lines in need of editing with a question mark
icon.

<h4>Solution</h4>

Vim allows you to define a <i>sign</i> and then associate it with one or more lines
of a file. It is displayed in the right-hand margin as a two-character string
in the terminal, and an icon in Gvim.

<span class="todo">Mention icon formats; length restrictions on signs</span>

Before you use a sign you must define it. For example: 

\begin{lstlisting}
:sign define fixme text=!! linehl=Todo texthl=Error icon=/path/to/todo.xpm
\end{lstlisting}

%\end{lstlisting}

Let's break this down. We name the sign <i>fixme</i>, which is how we'll
refer to it later. We specify that in the terminal the sign should be
displayed as <i>!!</i>, and that in the GUI the icon stored at
\path{/path/to/todo.xpm} should be used instead. The <i>linehl</i> argument
defines the highlight group used for the entire line the sign is attached to;
<i>texthl</i> defines the highlight group for the sign itself.

<span class="todo">link highlight groups recipe</span>

Now the sign is defined, presumably in
<i>vimrc</i>\footnote{Recipe~\ref{sec:configuring} explains how
<i>vimrc} works</i>, you can use it in any file. To attach the sign to a
specific line you use:

\begin{lstlisting}
:sign place {id} line={line} name={name} file={file-path}
\end{lstlisting}

For example:

\begin{lstlisting}
:sign place 22 line=200 name=fixme file=/home/user/novel.txt
\end{lstlisting}

The <i>id</i> is arbitrary, but must be unique and numeric. The
<i>name</i> is the same name you used when you defined the sign. The
value of the <i>line</i> argument is the number of the line on which the sign
should be attached. The <i>file</i> argument is the full path (no expansion is
done) to a currently loaded file to which the sign should be attached. So, in
the above example, two exclamation marks are inserted in the margin of the
200\textsuperscript{th} line of \path{/home/user/novel.txt}.

<h4>Discussion</h4>

You only need to define signs once, so that's easy enough, but the syntax for
placing signs is particularly unwieldy.  Let's look at some alternative
approaches.

You could place the following stanza in your <i>vimrc</i> so <tt><F5></tt> places the
previously defined `fixme' sign on the current line of the current file:

<span class="todo">The below should work but doesn't...fix it!</span>
\begin{lstlisting}
map <F5> :exe
":sign place ".line(".").  \\ "line=".line(".")."name=fixme
file=".expand("\%:p")<CR>
\end{lstlisting}

Rather than placing signs manually, you may prefer to have them automatically
placed on lines satisfying some criteria. The following stanza attaches the
`fixme' sign to lines containing notes like <i>`FIXME: Looks to have off-by-one
error'</i> <span class="todo">This code should actually
do something.</span>. It operates on the current line or selection. So, you can
select a range of lines, press <tt><F6></tt> then have your todo list items flaged in
the margin.

<span class="todo">The extra escape character in line 5 of the below snippet shouldn't
appear in the output...check. Also, see what we had escaped but now don't need
to...</span>

\begin{lstlisting}
function! SignLines() range
  let n = a:firstline
  execute(":sign define fixme text=!! texthl=Todo")
  while n <= a:lastline
    if getline(n) =~ '\\[\(TODO\|FIXME\)'
      execute(":sign place ".n." line=".n." name=fixme file=".expand("\%:p"))
    endif
    let n = n + 1
  endwhile  
endfunction
map <F6> :call SignLines()<CR>
\end{lstlisting}

%
