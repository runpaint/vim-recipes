%

<span class="label">sec:long-line</span>

<h4>Problem</h4>

Your file contains lines which are too long to fit on the
screen. You find it hard to edit and view.

<h4>Solution</h4>

The <tt>:set wrap</tt> command, which should be on by default, changes how
long lines are displayed. Once they reach the right margin they are broken,
and continued on the line below. (To disable this behaviour: <tt>:set
nowrap</tt>).

<i>wrap</i> only changes the way the lines are displayed, however; the file
will not be changed. It inserts 'soft' line breaks.

This means that a file containing two particularly long lines may be
represented by Vim as having 5 lines, for example, after wrapping. If you try
to navigate this file using the basic movement commands <span class="todo">link recipe</span>
<tt>j</tt> would move between the two logical lines, rather than the 'screen
lines'. The solution is to prefix the movement commands with <tt>g</tt>, so
<tt>gj</tt> moves down one 'screen line'. <span class="todo">line-numbered screenshot
illustrating this</span>

If using <i>wrap</i>, you can specify what point the line should be broken
by executing <tt>:set linebreak</tt>. This uses the value of <i>breakat</i>
to decide where to break the line. To change the characters used modify
<i>breakat</i>.

You can use \texttt{:set textwidth=\{width\}} to enforce a maximumn line
length, after which the text is broken with a 'hard' line break. Vim breaks at
white space, so lines may be shorter than <i>width</i>. To reformat existing
text according to this preference see <span class="todo">link Formatting Paragraphs</span>

<h4>Discussion</h4>

In general, you'll be better off using 'hard' line breaks with
<i>textwidth</i>. This removes the need to differentiate between logical
lines and 'screen lines', and means that the file will display reasonably in
any editor, even if it doesn't wrap long lines.

Traditionally, text file lines are kept under 80 characters.  This is mainly a
holdover from the days of terminals whose displays were limited in this way,
but is still customary in many programming languages and e-mail. To enforce
this restriction just <tt>:set textwidth=80</tt>.

There's another way to insert hard line breaks without specifying a maximumn
line length. It is called <i>wrapmargin</i> and wraps lines relative to the
width of the terminal window. For example, <tt>:set wrapmargin=4</tt> means
that when a line is more than four characters away from the right-hand margin,
it is broken. This approach is more flexible than <i>textwidth</i>, but has
the disadvantage of producing files which will display poorly on smaller
displays or when the screen is split between multiple files.  Especially if
you're sharing the files you produce with others, I suggest the use of
<i>textwidth</i> instead.

\textbf{Note}: <i>textwidth</i> takes precedence over <i>wrapmargin</i>.
For <i>wrapmargin</i> to take effect <i>textwidth</i> must be zero, as it
is by default.

%
