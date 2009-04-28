%

<span class="label">sec:basic-nav</span>

<h4>Problem</h4>

You want to move around inside a file.

<h4>Solution</h4>

The traditional approach is to use the arrow keys to move up, down, left, and
right. Vim supports that style of navigation but also offers a more efficient
alternative: <span class="todo">Does Vim support arrow keys by default?</span>

\begin{center}
\begin{tabular}{l | l}
\multicolumn{1}{c|}{\textbf{Key}} & \multicolumn{1}{c}{\textbf{Movement}} \\\hline
<tt>h</tt>  & Left                    \\
<tt>l</tt>  & Right                   \\
<tt>k</tt>  & Up a line               \\
<tt>j</tt>  & Down a line             \\
<tt>0</tt>  & Start of line           \\
<tt>^</tt> & First character of line \\
<tt>\$</tt>  & End of line             \\
\end{tabular}
\end{center}

<h4>Discussion</h4>

It is tempting to rely on old habits for something as basic as moving around
in a file. Once you're used to The Vim Way, however, you'll find yourself much
more efficient. One reason for this is that these keys are all located on the
main keyboard, so you don't need to stretch to the arrow keys, hence breaking
your flow.

Another benefit is that you can prefix these shortcuts with <i>counts</i> (as you
can with many Vim commands) which specify how many times they should be
executed. For instance, <tt>2k</tt> moves up two lines. 

<span class="todo">Mention Selecting Text with Motions</span>

%
