%

<span class="label">sec:configuring</span>

<h4>Problem</h4>

You want your Vim preferences to persist over sessions. <span class="todo">Is this too
complex a problem statement?</span>

For example, you want Vim to show line numbers all the time.  <span class="todo">Link
recipe</span> explains how, but when you restart Vim you find that your preferences
have been forgotten.

<h4>Solution</h4>

Throughout this book I have discussed how to configure Vim options using the
\texttt{:set \{option\}} or \texttt{:set \{option\}=\{value\}} syntax. This works,
but only for the current instance of Vim. If you specify these options in your
<i>vimrc</i> file they'll be set permanently.

<span class="todo">Sidebar: Locations of vimrc across O/S. Note that for GUI
s/vimrc/gvimrc/ -- we'll refer to both as <i>vimrc</span></i>

The <i>vimrc</i> is a simple plain text file. Open the filename specified in
the sidebar and add one option per line using the
\texttt{\{option\}=\{value\}} syntax (the ':' prefix is unnecessary). For
example:

\begin{verbatim}
" Set the boolean <i>number</i> option to true
set number
" Set the <i>textwidth</i> option to '78'
set textwidth=78
" Set the <i>expandtab</i> option to false
set noexpandtab
\end{verbatim}

Quotation marks <span class="todo">Is this the right name?</span> (<i>"</i>)
indicate comments. They are ignored by Vim, but particularly
useful for remembering what all of your preferences mean.

<h4>Discussion</h4>

The <i>vimrc</i> locations given in the sidebar are used for user
preferences; there are also system wide <i>vimrc</i> files. User preferences
take precedence over system preferences. This means that if you change an
option set in the system <i>vimrc</i>, your preferences will be respected.
However, if the system <i>vimrc</i> sets an option differently from the Vim
defaults, and you don't include it in your <i>vimrc</i>, the system
preference will be used. <span class="todo">Phrase better</span>
			
The example <i>vimrc</i> above is very basic. They can also include
functions, conditionals, and anything else Vim's scripting engine supports.
For a simple example look at the usage of <tt>:autocmd</tt> in the Using
Templates recipe <span class="todo">link recipe</span>. The <span class="todo">link basic scripting</span> recipe
provides an introduction to Vim scripting, which allows you to add logic to
your configuration. 

<span class="todo">Can we describe the general principle for adding commands to
<i>vimrc</span>? Just remove ':'?</i>

If your configuration becomes complex you may want to split it over multiple
files. You can instruct Vim to include these files in your configuration by
adding a \texttt{source \{file\}} line to <i>vimrc</i> for each config file. See
Abbreviating Common Strings <span class="todo">link recipe</span> for an example. 

If you want a different configuration for a specific project you can <tt>:set
exrc</tt> then include a <i>.vimrc</i> (or <i>vimrc</i> on DOS and MS
Windows) in the project's directory. This takes precedence over your
<i>vimrc</i>, and will be used when you edit files in that directory. 

\textbf{Warning}: There's the potential for security problems when using
<tt>exrc</tt>. If a <i>vimrc</i> was placed in your project directory
without you knowing -- as a result of unpacking an archive, for example -- it
could be used to execute arbitrary commands under your user account. For this
reason it's strongly recommended that you use <tt>:set secure</tt> in
conjunction with <i>exrc</i>. This prevents the directory-specific
<i>vimrc</i> files from executing potentilly dangerous commands. The Vim
documentation suggests adding <tt>set secure</tt> as the last line in your
<i>vimrc</i>.

<span class="todo">Mention portability concerns or address them in new recipe</span> <span class="todo">Link
<i>vimrc</span> in VCS recipe</i>

\subsubsection{Sidebar: Debugging Configuration}

\begin{itemize}
\item Start Vim without loading your <i>vimrc</i>: <tt>vim -u NORC</tt>.
(Use <tt>-U</tt> for Gvim).  
\item Start Vim with a different <i>vimrc</i>: \texttt{vim -u \{file\}}.  
\item Start Vim in verbose mode: <tt>vim -V</tt>. (Describes each file being sourced).  
\item Check the system wide <i>vimrc</i> to see whether its interacting badly with yours.
\end{itemize}

<span class="todo">locations of system <i>vimrc</span>?</i>  

%
