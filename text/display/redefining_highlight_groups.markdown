### Redefining Highlight Groups

<span class="label">sec:re-highlight</span>

<h4>Problem</h4>

You want to change the colours of specific elements of the display. For
example, you want text to be white on a black background.

<h4>Solution</h4>

Use the <kbd>:highight <var>group</var> <var>definition</var></kbd> command.

A <i>highlight group</i> is an element of the display whose colours can be
customised. Some of the default highlight groups are:

<span class="todo">Is a list the right way to present this?</span>

<dl>
  <dt><i>Cursor</i></dt>
  <dd>Character under the cursor.</dd>  
  <dt><i>ErrorMsg</i></dt>
  <dd>Command line error messages.</dd>  
  <dt><i>Normal</i></dt>
  <dd>Normal text.</dd>
  <dt><i>Visual</i></dt>
  <dd>Text selected under Visual mode.</dd>
</dl>

<span class="todo">Explain how to create your own group - just create a name?</span>

The <i>definition</i> is a list of key-value pairs. For example, <kbd>:highlight Normal
ctermfg=black ctermbg=yellow</kbd> sets the terminal foreground colour to black and
the terminal background colour to yellow. 

These are some common arguments:

<dl>
  <dt><i>ctermfg</i></dt>
  <dd>Terminal foreground colour.</dd>
  <dt><i>ctermbg</i></dt>
  <dd>Terminal background colour.</dd>
  <dt><i>term</i></dt>
  <dd>Terminal font style, e.g. <i>bold</i>, <i>italic</i>,
  <i>underline</i>.</dd>
  <dt><i>guifg</i></dt>
  <dd>GUI foreground colour.</dd>
  <dt><i>guibg</i></dt>
  <dd>GUI background colour.</dd>
</dl>  

<span class="todo">Check: does 'underline' work on the terminal?</span>
Apart from <i>term</i>, these arguments take a colour name or number as a value.
Recognised colour names include <i>black</i>, <i>brown</i>, <i>grey</i>,
<i>blue</i>, <i>green</i>, <i>cyan</i>, <i>magenta</i>,
<i>yellow</i>, and <i>white</i>. <span class="todo">See :help ... for the full
  list?</span>

The arguments that are not supplied retain their previous values. For example,
<kbd>:highlight Normal\\ ctermbg=white</kbd> changes the background colour to
<i>white</i>, but keeps the previous foreground colour.

<span class="todo">These examples are all a bit boring; jazz them
  up?</span>

Let's look at some examples:

<ul>
  <li><kbd>:highlight Visual term=bold</kbd> - Text that has been selected using
  Visual mode is rendered in bold.</li>  
  <li><kbd>:highlight Comment ctermfg=grey ctermbg=white term=bold</kbd> -
  Comments are rendered in bold, grey text.</li>
</ul>

<h4>Discussion</h4>

Normally you'll select a colour scheme <span
  class="footnote">Recipe:~\ref{sec:colour-scheme}</span>, and not define
highlighting groups at all. Ocassionally, though, you want more control over
colours or need to edit a syntax file.  That's where the <kbd>:highlight</kbd> command
comes in.

<span class="todo">This leading paragraph builds up, but then we don't deliver. Either
  add more here or delete it.</span>

Before you change highlight groups you may like to check their current values.
You can do this with <kbd>:highlight <var>group</var></kbd>. To view all current settings use
<kbd>:highlight</kbd>.

<div class="callout">

  <h5>Defining a Highlight Group</h5>

  You can define your own highlight group by using the <kbd>highlight</kbd> command as described above with a group name of your choice. To select what is highlighted you use <kbd>:match <var>group</var> /<var>pattern</var>/</kbd>. 

  For example: <kbd>:highlight Elephant ctermbg=grey ctermfg=white</kbd>, <kbd>:match
    Elephant</tt> \verb"/\celephant/"</kbd>. This renders all occurrences of the
word <i>elephant</i>, regardless of case due to the <kbd>\c</kbd> escape, in
white on grey.
</div>

<span class="todo">We have been inconsistent in italicising colour names;
  what's right?</span>
