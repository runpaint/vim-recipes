%

<span class="label">sec:nav-text</span>

<h4>Problem</h4>

You're editing a text file such an essay or e-mail, and want to exploit its
structure to navigate it efficiently.

<h4>Solution</h4>

In normal mode you can use the following shorcuts:

\begin{center}
\begin{tabular}{l|l}
\multicolumn{1}{c|}{\textbf{Key}} & \multicolumn{1}{c}{\textbf{Move To}} \\
\hline
\texttt{\{} & Beginning of current paragraph \\
<tt>\}</tt> & End of current paragraph       \\
<tt>(</tt> & Beginning of current sentence  \\
<tt>)</tt> & End of current sentence        \\
<tt>w</tt> & Beginning of next word         \\
<tt>b</tt> & Beginning of the previous word \\
<tt>e</tt> & End of the word                \\
\end{tabular}
\end{center}

<h4>Discussion</h4>

The shortcuts above all rely on the fact that plain text is often very
structured. A document consists of paragraphs seperated by newlines.
Paragraphs contain one or more sentences which begin with capital letters and
end with periods. Sentences are collections of words which are seperated by
spaces.

After using one of these shortcuts you may want to return to where you were
previously. This is particularly useful if you're writing one thing and are
then reminded that you now have to change another: you use a shortcut to jump
to the location of the change, then want to resume where you left of. You can
use the <tt>g,</tt> (mnemonic: <i>g</i>o back to where I paused (commas can be used to
represent pauses...)) command. Each time you execute it you'll be taken back
another step. To move in the other direction (towards more recent changes),
use <tt>g;</tt>.

All of these shortcuts can be combined. So, to move to the end of the previous
word you type <tt>be</tt>. You can also prefix them with numbers to indicate how many
times they should be executed.  <tt>3b</tt> moves to the beginning of the 3rd
previous word.

%
