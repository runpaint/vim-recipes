%

<span class="label">sec:man-fold</span>

<h4>Problem</h4>

You want to <i>fold</i> a file, then navigate it in <i>outline</i> mode.

<h4>Solution</h4>

\begin{callout}{Enabling Folding}

Folding is very likely already enabled in your Vim. If not,
check it has been compiled with the <i>+folding</i> option,
and that <tt>foldenable</tt> is true, i.e. <tt>:set foldenable</tt>.

\end{callout}

Use Vim's <i>folding</i> feature to treat a file hierarchially,
expanding and collapsing its sections as necessary. <span class="todo">Add
screenshots</span>

Fold commands start with <i>z</i>. Vim's help makes the spurious case
that this, kinda', if you squint, looks like a <i>fold</i>ed piece of
paper.

\begin{center}
\begin{tabular}{l|p{10em}}
\multicolumn{1}{c|}{\textbf{Command}}  & \multicolumn{1}{c}{\textbf{Action}} \\ \hline
<tt>zf</tt>        & Fold the selected text.                     \\
<tt>zf\#j</tt>     & Create a fold from the cursor down <i>\#</i> lines.\\
<tt>zf/string</tt> & Create a fold from the cursor to <i>string</i>.  \\
<tt>zfaB</tt>      & Fold the current block delimited by bracket 
B\footnote{B can be any of \textit{()[]\{\}<>}. This feature 
understands nested blocks, too, so will usually do 
the right thing.}.                                        \\
\end{tabular}
\end{center}

<span class="todo">Associate zfaB with the text-object recipe</span>

For instance, <tt>zf4j</tt> creates a fold from the current line to the forth line
down. Or, if you've selected text in Visual mode <span class="todo">link to recipe</span>, then <tt>zf</tt>
will fold the selection.

<h4>Discussion</h4>

How you use folds will depend very much on the type of file you are editing.
They are particularly useful for long papers or essays, for instance, where
you fold each section so as to navigate the document hierarchially. When
editing program source code they can be used with function/method/class
declarations.

This recipe is entitled <i>Manually</i> Creating Folds, because there are other
approaches to folding which are automatic. <span class="todo">Link to examples; expand
explanation</span>. 

<span class="todo">Should this be sidebar'd or another recipe?</span>
\begin{callout}{Indentation Folding}

If you're working with structured, indented text you may prefer to use
indentation folding. 

Enable it with <tt>:set foldmethod=indent</tt>. Folds are now
automatically created for each level of indented text. (To indent simply start
a line with a tab\footnote{Each <i>shiftwidth</i> of indent corresponds to one
fold. See Recipe~\ref{sec:indenting} for more on indentation.}). So, for example, <tt>zM</tt> folds all indented text. <span class="todo">Explain better;
note that this precludes usage of all other indent methods</span>. 
\end{callout}

<span class="todo">Firstly, this isn't the next recipe. Secondly, should we write it?</span>

To expand, collapse, and otherwise navigate folds see the next recipe:
\hyperref[sec:nav-fold]{<i>Navigating Folds}</i>.

%
