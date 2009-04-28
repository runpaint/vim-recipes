%

<span class="label">sec:menu-button</span>

<h4>Problem</h4>

You want to add your own commands to Gvim's menus, or toolbar, for quick
access.

For example, you've written a function that automatically writes bestselling
novels for you, but you're not willing to use it if you have to type its name
every time; you want to invoke it by selecting a menu option.  

<h4>Solution</h4>

Use \texttt{:set amenu \{menu\} \{command\}} to map a menu item to a command.
This is the GUI equivalent of <tt>:map</tt>\footnote{Recipe~\ref{sec:key-map}
explains the use of <tt>:map} in key mappings.</tt>.

For example, <tt>:amenu Help.Op\&tions :help options<cr></tt> adds a new item
to called Options to the Help menu, which invokes <tt>:help options</tt>. The
ampersand (<i>\&</i>) signifies that the chracter it prefixes can be used as a
keyboard shortcut, so in this case <tt><Alt+h> t</tt> selects this command.

<h4>Discussion</h4>

You're not restricted to adding items to existing menus; you can create a new
top-level menu simply by specifying a name not currently in use. For example,
\texttt{:amenu <silent>\&Vim.vim\textbackslash{}.org :!xdg-open http://www.vim.org/<cr>} will
create a new top-level menu called Vim with the shortcut key <tt>V</tt>. It
will contain one entry named vim.org' (we escape the <i>.</i> because otherwise it
would create a <i>vim</i> entry which in turn contain an <i>org</i> item). When invoked
it will open the Vim website on systems adhering to the Free Desktop
specification. The <i><silent></i> prefix prevents the command from being echoed on
the command-line. 

If you want to add a dashed seperator line between menu items use a menu item
named <i>-SEP-</i> and an empty command, e.g. <tt>:amenu Help.-SEP- :</tt>.

To control where a top-level menu appears relative to its neighbours you need
to prefix <tt>amenu</tt> with a numeric priority: the lower the number the further
right the menu is position. For example, <tt>:5amenu First.first :echo
'first'<cr></tt> creates a top-level menu named First that appears before all of
the others.

The same approach can be used to position menu items. For example,
\lstinline!:amenu 9999.1 Help.first :echo 'first'<cr>! adds a <i>first</i> item to the
Help menu, which appears before the other items.

You can also use <tt>:amenu</tt> to add a new toolbar icon: \lstinline!:amenu icon={image-path} Toolbar.{item-name} {command}!. For example,
\lstinline!:amenu icon=options.png ToolBar.OptionsHelp :help<cr>!. If the
<i>image-path</i> consists only of a filename, as above, Vim
prepends \verb"$VIMRUNTIME/bitmaps/" to it.%
%<span class="label">chap:unsorted</span>

%
