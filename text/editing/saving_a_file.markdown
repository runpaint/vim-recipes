### Saving a File

<h4>Problem</h4>

You want to save the file you've been working on.

After you've made changes to a file you typically want to save them.  For
example, if you've written up a turkey recipe to send to your daughter, you'd
open Vim, type the recipe, save it to <code>turkey-recipe.txt</code>, then
e-mail <code>turkey-recipe.txt</code> to your hungry child.

<h4>Solution</h4>

In Vim parlance, saving is 'writing', so to save your changes to the current
file use <code>:w</code> (mnemonic: <em>w</em>rite). If your file doesn't have
a name yet, you'll need to follow <code>:w</code> with a filename. This is
conceptually similar to most word processors' <em>Save</em> function.

To change the name of an existing file, use <code>:saveas
<var>file</var></code>. If <var>file</var> already exists and you want to
overwrite it, use <code>:saveas! <var>file</var></code>. <span
class="todo">Make general note about the significance of ! in commands.</span>
This is conceptually the same as most word processors' <em>Save As</em>
function.

<h4>Discussion</h4>

There are a number of situations where it can be useful to have Vim save your
file for you automatically. One is when you're working with files loading in
multiple buffers <span class="todo">link to Navigating Buffers, Opening
Files?</span> and cycling between them. By default, everytime you switch to a
buffer Vim prompts you to save the current one first. Another is when you
execute an external command on the current file. The command is passed the
file's name, so if your buffer contains unsaved changes, the command won't see
them. The solution is to <code>:set autowrite</code>. If you also want files
automatically saved when you quit Vim, use <code>:set autowriteall</code>.

The <code>:autowrite</code> functionality is not related to some word
processor's concept of auto-saving a file periodically in case of a crash. Vim
does this automatically. See Recovering from a Crash for more details. <span
class="todo">link recipe; explain that it can be turned off somewhere. Explain
the difference between the two.</span>.

<span class="todo">Save All (http://vim.wikia.com/wiki/VimTip652)</span> <span
class="todo">Writing selections of a file
(http://vim.wikia.com/wiki/VimTip1059); 'backup' options
http://vim.wikia.com/wiki/Auto<i>save</i>files<i>when</i>focus<i>is</i>lost</span>
