%

<span class="label">sec:nav-fold</span>
  
<span class="todo">We need to address all the other kinds of folding. Maybe
have one recipe for manual folding, one for, say, syntax
folding, then one for actually navigating said folds?</span>

<h4>Problem</h4>

Your document contains <i>folds</i> and you want to use them for navigation. (To
create folds see \hyperref[sec:man-fold]{<i>Manually Creating Folds}</i>). 

<h4>Solution</h4>

\begin{center}
\begin{tabular}{l|p{0.3\textwidth}|p{0.3\textwidth}}
\multicolumn{1}{c|}{\textbf{Command}} & \multicolumn{1}{c|}{\textbf{Action}} &
\multicolumn{1}{c}{\textbf{Mnemonic}} \\ \hline
<tt>zc</tt>    & Close the current fold.    & <i>c</i>lose fold                     \\
<tt>zo</tt>    & Open the current fold.     & <i>o</i>pen fold                      \\
<tt>zM</tt>    & Close all folds.           & fold <i>M</i>ore                      \\
<tt>zR</tt>    & Open all folds.            & <i>R</i>educe folding                 \\
<tt>zj</tt>    & Move to the next fold.     & <tt>j</tt> moves to the <i>next</i> line     \\
<tt>zk</tt>    & Move to the previous fold. & <tt>k</tt> moves to the <i>previous</i> line \\
<tt>zn</tt>    & Disable folding.           & <i>n</i>o folds                       \\
<tt>zN</tt>    & Re-enable folding.         & <i>N</i> is <i>n</i> toggled\ldots       \\
\end{tabular}
\end{center}

<h4>Discussion</h4>

You can use <tt>zM</tt> to achieve a `birds-eye' view of the file, which can be
useful when you're writing a long book and forget how the recipe you're
currently writing relates to\ldots Anyway, try it.

Vim treats folds like individual lines, so <tt>j</tt> and <tt>k</tt> move over one fold at a
time. Further, you can yank/delete\footnote{<i>yank</i> is Vim terminology
for copying text to the clipboard. Recipe~\ref{sec:copy-paste} explains
cutting, copying, and pasting in Vim.} a fold as
if it was a single line.

By default, folds are forgotten when you edit another file. To save them use
<tt>:mkview</tt>. Then, to restore them, use <tt>:loadview</tt>.  <span class="todo"><tt>mkview</span> recipe
instead of including it here</tt>

The <tt>:set foldcolumn=W</tt>, where <i>W</i> is a integer width less than 13, displays a
column along the left-hand side of the screen with information about the folds
in the current file. It indicates whether the corresponding line is an open or
closed fold (with <i>-</i> or <i>+</i>, respectively), or whether it is contained with a
fold (with <i>$|$</i>).

<span class="todo">More user-oriented title</span>

%
