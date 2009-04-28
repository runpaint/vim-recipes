### Visually Selecting Text

<span class="label">sec:visual-select</span>

<h4>Problem</h4>

You want to interactively select some text by drawing a box around it, thus
enabling you to perform a command that affects it. IOW, you want to select a
text like you would in a GUI wordprocessor using only the keyboard.

<h4>Solution</h4>

To select text character by character change to Visual mode with <tt><Esc>-v</tt>,
then move the cursor as normal using the <tt>h</tt>,<tt>j</tt>,<tt>k</tt>,<tt>l</tt> keys. For example, to
select the current character and the 3 that follow hit <tt><Esc>-v</tt>, then <tt>3l</tt>.
To select the current paragraph: <tt><Esc>-v</tt>, then  <tt>ap</tt>.

To select text in lines switch to Visual Line mode with <tt><Esc>-V</tt>, then move
upwards and downwards with <tt>k</tt> and <tt>j</tt> as normal. For example, to select the
current line and the 2 following it hit <tt><ESC>-V</tt>, then <tt>2j</tt>.

To select text in vertical blocks, or 'columns' to the rest of us, you use
Visual Block mode with <tt><Esc>-<Ctrl>-v</tt>. For example, if you wanted to select
the first two characters of the current line and the 20 following, you'd
position your cursor on the first character of the first line you're
interested in, hit <tt><Esc>-<Ctrl>-v</tt>, move one character to the right (<tt>l</tt>),
then move down 20 lines with <tt>20j</tt>.

<h4>Discussion</h4>

As you get used to Vim's movement command, you'll have less of a need for the
various visual modes. Regardless, they can still be convenient when you're
making complex selections or aren't really sure what you're doing. ;-)

The point of selecting text is to operate on it. Here are some common actions:

\begin{itemize}
\item Copy/cut it - See Copying, Cutting, and Pasting. <span class="todo">link</span>
\item Format it - See Formatting Paragraphs,\ldots <span class="todo">link
to relevant recipes</span> 
\item Indent it using <tt>></tt> or <tt><</tt> - See Indenting Lines <span class="todo">link to actual section, check
recipe name</span>
\end{itemize}

<span class="todo">Mention how to unselect a selection, and how to reselect the last
selection</span>

%
