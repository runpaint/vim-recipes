%

<span class="label">sec:split-screen</span>

<h4>Problem</h4>

You want to view multiple files at one time. Or, you want to view different
positions in the same file at the same time.

For example, if you were editing source code in an unfamiliar programming
language, you may want to have the documentation and source visible at the
same time. Or, if you wanted to move text between multiple files, you could
view the source and target file together.

<h4>Solution</h4>

Use Vim's <i>split screen</i> feature to divide the screen into multiple panes,
each of which can contain a file.

\begin{center}
\begin{tabular}{l|l}
\multicolumn{1}{c|}{\textbf{Command}} & \multicolumn{1}{c}{\textbf{Action}} \\ \hline
<tt>:split [file]</tt>  & Splits the window horizontally. \\ 
<tt>:vsplit [file]</tt> & Splits the window vertically.   \\
\end{tabular}
\end{center}

<span class="todo">Terminology: is 'pane' correct?</span>
(If <i>file</i> is specified, that file is shown in the upper/left, as appropriate,
pane; if not, both panes show the current file).

To move between windows you use <tt><Ctrl>-w</tt> (menmonic: <i>control</i> <i>w</i>indow).
To move in a specific direction, add the relevant movement key. <span class="todo">link
recipe</span> So, to move upwards: <tt><Ctrl>-w k</tt>.

To close the active window use <tt>:q</tt>, just as you would to close a window
normally.

You can reduce/increase the size of the current window with <tt><Ctrl>-w -</tt> and
<tt><Ctrl>-w+</tt>, respectively. To specify the size of a window when you open it,
prefix the <tt>:split</tt> command with the desired height/width in lines. For
example, to show \path{README} in a window of 5 lines high: <tt>5 :split README</tt>.

<h4>Discussion</h4>

The default behaviour of both <tt>:split</tt> and <tt>:vsplit</tt> is to show the current
file twice. This is more useful than it may first sound.

When working with long documents it means that you can view the top and bottom
of the file simulteneously. If you use
<i>folding</i>\footnote{Recipe~\ref{sec:man-fold} explains how to manually create
folds.} <span class="todo">Link other folding recipes when they're written?</span> you can
use one window to display an outline of a document while editing a specific
section in another. For example, when I'm working on reports I use <tt>:30
:vsplit</tt> to view the first and second level headings along the left of the
screen, while editing the report in the main window.

If you <tt>:set scrollbind</tt> before you split the screen the windows scroll
together. <span class="todo">explain better</span>

%
