<h3>Creating Keyboard Shortcuts with Key Mappings</h3>

<h4>Problem</h4>

You'd like to execute a command, or series thereof, with a keyboard shortcut
rather than continually type it in. Or, you'd like to change an existing
keyboard shortcut so that it does something more useful.

For example, you use the <kbd>&lt;Space&gt;</kbd> key to page down in other
applications, and you'd like to do the same in Vim. Or, you regularly reformat
paragraphs with <kbd>gqap</kbd> <span class="todo">link recipe</span>, but
would prefer to simply hit <kbd>Q</kbd>.

<h4>Solution</h4>

Use "key mappings". A map is simply a key combination followed by another key
combination. When you enter the first key combination Vim acts as if you
entered the second.

For example, to remap <kbd>&lt;Space&gt;</kbd> to <kbd>&lt;PageDown&gt;</kbd>
you execute <tt>:map &lt;Space&gt; &lt;PageDown&gt;</tt>. The <tt>map</tt>
command creates a mapping for Normal, Visual, and Operator Pending <span
class="todo">footnote with explanation</span> mode; i.e. if you press
<kbd>&lt;Space&gt;</kbd> in Insert mode this mapping, thankfully, has no
effect.

Mapping <kbd>Q</kbd> to <kbd>gqap</kbd> is similarly straight forward:
<tt>:nmap Q gqap</tt>. Unlike <tt>map</tt>, <tt>:nmap</tt> only takes effect
in Normal mode. We used <tt>nmap</tt> here because this mapping doesn't make
sense in other modes: in Insert mode we want <kbd>Q</kbd> to insert a literal
<i>Q</i>, and in Visual mode we want to reformat the selected text rather than
the current paragraph. The Visual mode mapping is <tt>:vmap Q gq</tt>.

The other main types of mapping commands are:

<dl>
  <dt><tt>:imap</tt></dt>
  <dd>Insert mode only.</dd>
  <dt><tt>:cmap</tt></dt>
  <dd>Command-line only.</dd>
  <dt><tt>:map</tt></dt>
  <dd>Insert and Command-line.</dd>
</dl>

<h4>Discussion</h4>

Keyboard mapping is yet another way to save valuable keystrokes. If you find
yourself executing a command repeatedly create a mapping. It's also useful for
creating more sensible aliases for existing keyboard shortcuts that you can
never quite remember.

It's generally recommended to map the function keys
(<kbd>&lt;F1&gt;</kbd>-<kbd>&lt;F12&gt;</kbd>), as well as their shifted
counterparts (e.g.  <kbd><kbd>&lt;Shift&gt;</kbd>-<kbd>&lt;F3&gt;</kbd></kbd>)
because they're not used by Vim <span class="fn"><kbd>&lt;F1&gt;</kbd>
<i>is</i> used for <tt>:help</tt> but pretty useless given that you'd normally
use <tt>:help <var>topic</var></tt>.</span>. As long as you use a combination
that doesn't interfere with the commands you do use, you're free to use
whatever you want, though.

Before you create a mapping you might like to check what, if anything, it's
currently being used for. You can do this by executing <tt>:help
<var>key</var></tt>, e.g. <tt>:help &lt;F1&gt;</tt> will show that Vim maps it
to <tt>:help</tt>. If you want to see the user-defined mappings (whether set
by you or a plugin) call the <tt>:map</tt> command with no arguments. This
works will the mode-specific map commands outlined above, too, so
<tt>:imap</tt> will show Insert mode mappings.

<span class="todo">Look into map vs remap, etc. What exactly does this do?</span>

<span class="todo">There's an awful lot more to say here; <tt>:help map</tt>
is huge</span>
