%

<span class="label">sec:choose-mode</span>

<h4>Problem</h4>

You know that Vim has multiple modes of operation but aren't sure when to use
which one.

<h4>Solution</h4>

For practical purposes there are four modes:

\begin{itemize}
\item Insert mode - Use only for typing; not moving around or editing. Stay in
this mode for as short a time as possible.
\item Normal mode - Use this for editing: moving around the file, changing
text, and rearranging structure. Dip in and out of Insert mode when needed.
\item Visual mode - Use this for visually selecting text so that you can cut,
copy, or format it. <span class="todo">link recipe</span>
\item Command mode - Use this for entering commands, e.g. <tt>:set number</tt>. 
\end{itemize}

<h4>Discussion</h4>

Vim's modal approach to editing can seem confusing, but it really is the key
to understanding Vim.

It's tempting to spend much of your time in Insert mode, and navigate with the
arrow keys <span class="todo">link basic movement recipe</span>. However, this is slow and
requires an awful lot of key presses. 

Normal mode is the default mode because it makes it so easy to move around the
file to either edit existing text or position the cursor where you want to
insert text. 

If you create a new file, and just want to type, by all means go straight into
Insert mode and do so. All other times, though, stay in Normal mode. 

For example, you want to find a paragraph you've written previously, and
reword it. In Normal mode you can either search for it (e.g. <tt>/Hobson
argued</tt> <span class="todo">link search recipe</span>), or simply page through the file (e.g.
<tt><Ctrl>+F</tt> to scroll downwards) to find it. Once there, you can move to
the section you're interested in using either the basic movement commands
<span class="todo">link recipe</span> or 'text objects' <span class="todo">link recipe</span>. You can now use 'text
objects' again to select something and change it. For example <tt>caw</tt>
deletes the current word and puts you into Insert mode to change it.  Once you
have done so, hit <tt><Esc></tt> again to return to Normal mode. If you decide
to write an extra sentence to conclude this paragraph

%
