%

<span class="label">sec:create-command</span>

<h4>Problem</h4>

You want to create your own \texttt{:\{command\}} command.

<span class="todo">Example?</span>

<h4>Solution</h4>

Use the <tt>:command</tt> command like so: \texttt{:command \{name\}
\{command\}}, where <i>name</i> is the command you're creating and
<i>command</i> the command <i>name</i> should execute. (<i>name</i> must
start with an initial capital)

For example, <tt>:command Ls !ls -all \%</tt> lets you use <tt>:Ls</tt> to
view the 'long listing' for the current file on POSIX systems, thus showing
the permissions, owner, group, etc.

<h4>Discussion</h4>

The <i>command</i> can be anything you could enter at the <tt>:</tt>
prompt.

You can modify how the command is defined by supplying
<tt>:command</tt> with a list of arguments with the syntax
\texttt{:command [arg1, arg2,...argN] \{name\} \{command\}}. These are
not to be confused with arguments passed to the <i>command</i>.
<span class="todo">awful...</span>

To create a command that accepts arguments you use the
syntax \texttt{:command -nargs=\{spec\} \{name\} \{command\}}, where
<i>spec</i> is:

\begin{itemize}
\item <i>1</i> - One argument.
\item <i>*</i> - Any number of arguments.
\item <i>?</i> - Zero or more arguments.
\item <i>+</i> - One or more arguments.
\end{itemize}

You reference the arguments in <i>command</i> with the <i><args></i>
placeholder. The <i><q-args></i> quotes special characters in the argument.
For example, I use <tt>:command -nargs=1 Ci !bzr ci \% -m <q-args></tt> to
quickly commit the current file to a Bazaar respository by typing \texttt{:Ci
\{message\}}, without worrying about using quotation marks and the like.

To create a command that accepts a count you use the
\textit{-count=\{default\}} argument, then reference the count in
<i>command</i> as <i><count></i>.

To create a command that accepts a range you use the \textit{-range=\{spec\}}
argument. If you don't supply a <i>spec</i> (i.e.  <i>-range</i>), the
range defaults to the current line. A spec of <i>\%</i> means that the range
defaults to the whole file. \todo{Figure out and explain what
\textit{-range=\{count\}} actually does} You can reference the range in the
<i>command</i> with the placeholders <i><line1></i> and <i><line2></i>
which denote the first and last line of the given range, respectively.

<span class="todo">Add some examples</span>

%
