<h3>Bookmarking Lines with Visible Markers (<i>Signs</i>)</h3>

<h4>Problem</h4>

You want to assign visible marks to the margins of certain lines.

For example, you're using Vim as an IDE and want breakpoints to be clearly
marked. Or, you want to label lines in need of editing with a question mark
icon.

<h4>Solution</h4>

Vim allows you to define a <i>sign</i> and then associate it with one or more lines
of a file. It is displayed in the right-hand margin as a two-character string
in the terminal, and an icon in Gvim.

<span class="todo">Mention icon formats; length restrictions on signs</span>

Before you use a sign you must define it. For example: 

<pre><code>
:sign define fixme text=!! linehl=Todo texthl=Error icon=/path/to/todo.xpm
</code></pre>

Let's break this down. We name the sign <i>fixme</i>, which is how we'll refer
to it later. We specify that in the terminal the sign should be displayed as
<i>!!</i>, and that in the GUI the icon stored at <tt>/path/to/todo.xpm</tt>
should be used instead. The <i>linehl</i> argument defines the highlight group
used for the entire line the sign is attached to; <i>texthl</i> defines the
highlight group for the sign itself.

<span class="todo">link highlight groups recipe</span>

Now the sign is defined, presumably in <i>vimrc</i><span
class="fn">Recipe~\ref{sec:configuring} explains how <tt>vimrc</tt></span>
works</span>, you can use it in any file. To attach the sign to a specific
line you use:

<pre><code>
:sign place <var>id</var> line=<var>line</var> name=<var>name</var>
file=<var>file-path</var>
</code></pre>

For example:

<pre><code>
:sign place 22 line=200 name=fixme file=/home/user/novel.txt
</code></pre>

The <var>id</var> is arbitrary, but must be unique and numeric. The
<var>name</var> is the same name you used when you defined the sign. The value
of the <var>line</var> argument is the number of the line on which the sign
should be attached. The <var>file</var> argument is the full path (no
expansion is done) to a currently loaded file to which the sign should be
attached. So, in the above example, two exclamation marks are inserted in the
margin of the 200<sup>th</sup> line of <tt>/home/user/novel.txt</tt>.

<h4>Discussion</h4>

You only need to define signs once, so that's easy enough, but the syntax for
placing signs is particularly unwieldy.  Let's look at some alternative
approaches.

You could place the following stanza in your <i>vimrc</i> so
<tt>&lt;F5&gt;</tt> places the previously defined <i>fixme</i> sign on the
current line of the current file:

<pre><code>
function! SignFixme()
  execute(":sign place ".line(".")." line=".line(".")." name=fixme file=".expand("%:p"))
endfunction
map &lt;F5&gt; :call SignFixme()&lt;CR&gt;
</code></pre>

Rather than placing signs manually, you may prefer to have them automatically
placed on lines satisfying some criteria. The following stanza attaches the
'fixme' sign to lines containing notes like It operates on the current line or
selection. So, you can select a range of lines, press <tt>&lt;F6&gt;</tt> then
have your todo list items flaged in the margin.

<pre><code>
function! SignLines() range
  let n = a:firstline
  execute(":sign define fixme text=!! texthl=Todo")
  while n <= a:lastline
    if getline(n) =~ '\(TODO\|FIXME\)'
      execute(":sign place ".n." line=".n." name=fixme file=".expand("%:p"))
    endif
    let n = n + 1
  endwhile  
endfunction
map &lt;F6&gt; :call SignLines()&lt;CR&gt;
</code></pre>
