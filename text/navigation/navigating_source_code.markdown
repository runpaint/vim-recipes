%

<span class="label">sec:nav-code</span>

<h4>Problem</h4>

You're editing the source code for a computer program, and want to navigate it
efficiently.

<h4>Solution</h4>

<span class="todo">Add intro paragraph here; the bare table isn't very welcoming</span>

\begin{center}
\begin{tabular}{l|p{0.8\textwidth}}
\multicolumn{1}{c|}{\textbf{Key}} & \multicolumn{1}{c}{\textbf{Move To}} \\
\hline
<tt>\%</tt> & End of construct <span class="footnote">A construct is a bracket pair, an
if/elsif/else block, or a comment. For example, if you hit <tt>\%</tt> on 
an opening bracket you'd jump to the corresponding closing bracket. 
See <tt>:help \%'} for more details..</tt> \\
<tt>[[</tt> & Backwards to the beginning of the current function.            \\
<tt>][</tt> & Forwards to the beginning of the current function.             \\  
<tt>\}[</tt> & Beginning of the current block.                               \\
<tt>\}]</tt>& End of the current block.                                     \\
<tt>\}[</tt> & Beginning of the current comment block.                        \\
<tt>\}]</tt> & End of the current comment block.                              \\
<tt>\</span>gd</tt> & First usage of the current variable name <span class="footnote">Ocurrences
in comments are ignored.}.  (Mnemonic: <i>g</i>o to <i>d</span>efinition).     \\
<tt>\</i>gD</tt> & Go to the first `global' <span class="footnote"><tt>gd</tt> looks for the 
definition closest to your current position, thus respecting the 
lexical scoping rules of many languages. <tt>gD</span> starts searching from
 the first line of the file, so prefers variables with a global 
scope.</tt> usage of the current variable name.                           \\ 
\end{tabular}
\end{center}

<span class="todo">Sidebar: What is a Function</span>

<h4>Discussion</h4>

The shortcuts\footnote{See recipe~\ref{sec:nav-text}} available for text files are
supported for source code, too, so review them if you haven't already.

There's a lot to remember here. Despite my best efforts, I suspect that the
descriptions above are still confusing. To understand these shortucts you
really need to try them yourself.  Open some source code in your favourite
language with Vim, make sure that syntax highlighting is on <span class="todo">link to
relevant recipe</span>, and bounce back and forth between those braces.

<span class="todo">link to other programming-related recipes</span>

%
