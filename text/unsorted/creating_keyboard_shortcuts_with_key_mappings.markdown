%

<span class="label">sec:key-map</span>

<h4>Problem</h4>

You'd like to execute a command, or series thereof, with a keyboard shortcut
rather than continually type it in. Or, you'd like to change an existing
keyboard shortcut so that it does something more useful.

For example, you use the <tt><Space></tt> key to page down in other
applications, and you'd like to do the same in Vim. Or, you regularly reformat
paragraphs with <tt>gqap</tt> <span class="todo">link recipe</span>, but would prefer to simply
hit <tt>Q</tt>.

<h4>Solution</h4>

Use 'key mappings'. A map is simply a key combination followed by another key
combination. When you enter the first key combination Vim acts as if you
entered the second.

For example, to remap <tt><Space></tt> to <tt><PageDown></tt> you execute
<tt>:map <Space> <PageDown></tt>. The <tt>map</tt> command creates a mapping
for Normal, Visual, and Operator Pending [TODO: footnote with explanation]
mode; i.e. if you press <tt><Space></tt> in Insert mode this mapping,
thankfully, has no effect.

Mapping <tt>Q</tt> to <tt>gqap</tt> is similarly straight forward:
<tt>:nmap Q gqap</tt>. Unlike <tt>map</tt>, <tt>:nmap</tt> only takes effect
in Normal mode. We used <tt>nmap</tt> here because this mapping doesn't make
sense in other modes: in Insert mode we want <tt>Q</tt> to insert a literal
<i>Q</i>, and in Visual mode we want to reformat the selected text rather
than the current paragraph. The Visual mode mapping is <tt>:vmap Q gq</tt>.

The other main types of mapping commands are:

\begin{itemize}
\item <tt>:imap</tt> - Insert mode only.
\item <tt>:cmap</tt> - Command-line only.
\item <tt>:map</tt> - Insert and Command-line.
\end{itemize}

<h4>Discussion</h4>

Keyboard mapping is yet another way to save valuable keystrokes. If you find
yourself executing a command repeatedly create a mapping. It's also useful for
creating more sensible aliases for existing keyboard shortcuts that you can
never quite remember.

It's generally reccomended to map the function keys (F1-12), as well as their
shifted counterparts (e.g. <tt><Shift><F3></tt>) because they're not used by
Vim \todo{footnote that F1 is used for :help but pretty useless given that
you'd normally use \texttt{:help {topic}}}. As long as you use a combination
that doesn't interfere with the commands you do use, you're free to use
whatever you want, though.

Before you create a mapping you might like to check what, if anything, it's
currently being used for. You can do this by executing \texttt{:help {key}},
e.g. <tt>:help <F1></tt> will show that Vim maps it to <tt>:help</tt>. If you
want to see the user-defined mappings (whether set by you or a plugin) call
the <tt>:map</tt> command with no arguments. This works will the mode-specific
map commands outlined above, too, so <tt>:imap</tt> will show Insert mode
mappings.

<span class="todo">Look into map vs remap, etc. What exactly does this do?</span>

<span class="todo">There's an awful lot more to say here; <tt>:help map</span> is huge</tt>

%
