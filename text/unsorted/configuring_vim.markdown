<h3>Configuring Vim</h3>

<h4>Problem</h4>

You want your Vim preferences to persist over sessions. <span class="todo">Is
this too complex a problem statement?</span>

For example, you want Vim to show line numbers all the time.  <span
class="todo">Link recipe</span> explains how, but when you restart Vim you
find that your preferences have been forgotten.

<h4>Solution</h4>

Throughout this book I have<span class="todo">Correct tense will depend on
this recipes location in the book</span> discussed how to configure Vim
options using the <tt>:set <var>option</var></tt> or <tt>:set
<var>option</var>=<var>value</var></tt> syntax. This works, but only for the
current instance of Vim. If you specify these options in your <tt>vimrc</tt>
file they'll be set permanently.

<span class="todo">Sidebar: Locations of vimrc (user and system) across O/S.
Note that for GUI s/vimrc/gvimrc/ -- we'll refer to both as
<i>vimrc</i></span>

The <tt>vimrc</tt> is a simple plain text file. Open the filename specified in
the sidebar and add one option per line using the
<tt><var>option</var>=<var>value</var></tt> syntax (the ':' prefix is
unnecessary). For example:

<pre><code>
" Set the boolean <tt>number</tt> option to true
set number
" Set the <tt>textwidth</tt> option to '78'
set textwidth=78
" Set the <tt>expandtab</tt> option to false
set noexpandtab
</code></pre>

Quotation marks <span class="todo">Is this the right name?</span> (<i>"</i>)
introduce comments. They are ignored by Vim, but particularly useful for
remembering what all of your preferences mean.

<h4>Discussion</h4>

The <tt>vimrc</tt> locations given in the sidebar are used for user
preferences; there are also system wide <tt>vimrc</tt> files. User preferences
take precedence over system preferences. This means that if you change an
option set in the system <tt>vimrc</tt>, your preferences will be respected.
However, if the system <tt>vimrc</tt> sets an option differently from the Vim
defaults, and you don't include it in your <tt>vimrc</tt>, the system
preference will be used. <span class="todo">Phrase better</span>
			
The example <tt>vimrc</tt> above is very basic. They can also include
functions, conditionals, and anything else Vim's scripting engine supports.
For a simple example look at the usage of <tt>:autocmd</tt> in the Using
Templates recipe <span class="todo">link recipe</span>. The <span
class="todo">link basic scripting</span> recipe provides an introduction to
Vim scripting, which allows you to add logic to your configuration. 

<span class="todo">Can we describe the general principle for adding commands
to <i>vimrc</i>? Just remove ':'?</span>

If your configuration becomes complex you may want to split it over multiple
files. You can instruct Vim to include these files in your configuration by
adding a <tt>source <var>file</var></tt> line to <tt>vimrc</tt> for each
config file. See Abbreviating Common Strings <span class="todo">link
recipe</span> for an example. 

If you want a different configuration for a specific project you can <tt>:set
exrc</tt> then include a <tt>.vimrc</tt> (or <tt>vimrc</tt> on DOS and MS
Windows) in the project's directory. This takes precedence over your
<tt>vimrc</tt>, and will be used when you edit files in that directory. 

<div class="warning">
  <em>Warning</em>: There's the potential for security problems when using
  <tt>exrc</tt>. If a <i>vimrc</i> was placed in your project directory
  without you knowing -- as a result of unpacking an archive, for example -- it
  could be used to execute arbitrary commands under your user account. For this
  reason it's strongly recommended that you use <tt>:set secure</tt> in
  conjunction with <tt>exrc</tt>. This prevents the directory-specific
  <tt>vimrc</tt> files from executing potentially dangerous commands. The Vim
  documentation suggests adding <tt>set secure</tt> as the last line in your
  <tt>vimrc</tt>.
</div>

<span class="todo">Mention portability concerns or address them in new
recipe</span> <span class="todo">Link <i>vimrc</i> in VCS recipe</span>

<div class="callout">
  
<h5>Debugging Configuration</h5>

<ul>
  <li>Start Vim without loading your <tt>vimrc</tt>: <tt>vim -u NORC</tt>.
(Use <tt>-U</tt> for Gvim).</li>
  <li>Start Vim with a different <tt>vimrc</tt>: <tt>vim -u
  <var>file</var></tt>.</li>  
  <li>Start Vim in verbose mode: <tt>vim -V</tt>. (Describes each file being
  sourced).</li>  
  <li>Check the system wide <tt>vimrc</tt> to see whether its interacting
  badly with yours.</li>
</ul>
