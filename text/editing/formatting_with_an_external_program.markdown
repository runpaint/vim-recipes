### Formatting with an External Program

<h4>Problem</h4>

You want to reformat text with a program other than Vim. For example, you
want to use the <abbr title="World Wide Web Consortium">W3C</abbr>'s 'tidy'
utility to format <abbr="HyperText Markup Language">HTML</abbr>.

<h4>Solution</h4>

Set the <code>equalprog</code> option to the name of the program you want
to use, along with any arguments it should be passed.  For example: <code>:set
equalprog=tidy\ --indent=yes\ -q</code>. <span class="todo">We should make a
general point earlier on about the escaping of spaces when using
:set</span>

You can now select the text you want to format <span class="todo">link
recipe</span>, then hit <kbd>=</kbd>. You can reformat the entire file with
<kbd>1G=G</kbd>.

<h4>Discussion</h4>

The formatter that you use depends on the type of content you are producing.
Here are a couple of suggestions of programs to use for specific file
types:

<ul>
  <li><em>Text</em> - If you want to format normal text using an external
  program, <code>par</code> <span class="todo">Link to details about it</span>
  is a popular choice. It can wrap, align, justify, and quote text in every
  conceivable way, and many more aside.</li>
  <li><em>HTML/XHTML</em> - Use <a
href="http://tidy.sourceforge.net/"><em>HTML Tidy</em></a> <span
class="todo">Give details</span>. You can specify options on the command line,
as shown in the example above. If you want to specify a lot of options, put
them into a config file, and point <code>tidy</code> to it: <samp>tidy
--config <var>file</var></samp>. At a minimumn you probably want to use
<code>:setlocal equalprog=tidy\ -utf8\ --indent\ yes\ -q\ -f\ /tmp/err</code>.
Then you can reformat your file with <kbd>1G=G</kbd>. One caveat is that this
won't work correctly for reformating a specific section of the file. You can
use the <code>--show-body-only true</code> option if you want to be able to do
this, but like many formatters of markup languages, Tidy doesn't perform as
well on fragments because of lack of context.</li>
  <li><em>XML</em> - <em>HTML Tidy</em> can be used to format XML as well by
passing it the <code>-xml</code> option. Alternatively, you can use
<code>xmllint</code>: <span class="todo">Link to further
info.</span><code>:set equalprg=xmllint\ --format\ -</code>.</li>
</ul>  
