<h3>Creating Command-Line Commands</h3>

<h4>Problem</h4>

You want to create your own <tt>:<var>command</var></tt> command.

<span class="todo">Example?</span>

<h4>Solution</h4>

Use the <tt>:command</tt> command like so:<tt>:command <var>name</var>
<var>command</var></tt>, where <var>name</var> is the command you're creating
and <var>command</var> the command <var>name</var> should execute.
(<var>name</var> must start with an initial capital)

For example, <tt>:command Ls !ls -all %</tt> lets you use <tt>:Ls</tt> to view
the 'long listing' for the current file on POSIX systems, thus showing the
permissions, owner, group, etc.

<h4>Discussion</h4>

The <var>command</var> can be anything you could enter at the <tt>:</tt>
prompt.

You can modify how the command is defined by supplying <tt>:command</tt> with
a list of arguments with the syntax <tt>:command <var>arg1</var>,
<var>arg2</var>, &ldots; ,<var>argN</var> <var>name</var>
<var>command</var></tt>. These are not to be confused with arguments passed to
the <var>command</var>.  <span class="todo">awful...</span>

To create a command that accepts arguments you use the syntax <tt>:command
-nargs=<var>spec</var> <var>name</var> <var>command</var></tt>, where
<var>spec</var> is:

<dl>
  <dt>1</dt>
  <dd>One argument.</dd>
  <dt>*</dt>
  <dd>Any number of arguments.</dd>
  <dt>?</dt>
  <dd>Zero or one arguments.</dd>
  <dt>+</dt>
  <dd>One or more arguments.</dd>
</dl>

You reference the arguments in <var>command</var> with the
<var>&lt;args&gt;</var> placeholder. The <var>&lt;q-args&gt;</var> quotes
special characters in the argument.  For example, you could use <tt>:command
-nargs=1 Ci !cd %:h &amp;&amp; git commit %:t -m &lt;q-args&gt;</tt> to
quickly change to the directory containing the current file (<tt>%:h</tt> is
the current pathname with the last component removed) and commit the current
file (<tt>%:t</tt> is the last component of the current pathname) to a
Git repository by typing <tt>:Ci <var>message</var></tt>, without worrying
about using quotation marks and the like.

To create a command that accepts a count you use the
<tt>-count=<var>default</var></tt> argument, then reference the count in
<var>command</var> as <var>&lt;count&gt;</var>.

To create a command that accepts a range you use the
<tt>-range=<var>spec</var></tt> argument. If you don't supply a
<var>spec</var> (i.e.  <tt>-range</tt>), the range defaults to the current
line. A spec of <tt>%</tt> means that the range defaults to the whole file.
<span class="todo">Figure out and explain what
<tt>-range=<var>count</var></tt> actually does</span> You can reference the
range in the <var>command</var> with the placeholders <var>&lt;line1&gt;</var>
and <var>&lt;line2&gt;</var> which denote the first and last line of the given
range, respectively.

<span class="todo">Add some more examples</span>
