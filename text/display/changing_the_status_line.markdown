### Changing the Status Line

<h4>Problem</h4>

You don't like the way the status line looks or would prefer if it displayed
different types of information.

For example, you work with files created on different operating systems, so
you'd like the file format (e.g. <i>unix</i>, <i>MS-Windows</i>, or
<i>mac</i>) to be displayed along the bottom of the screen.

<h4>Solution</h4>

Use the <kbd>:set statusline</kbd> command along with a format string.  The format
string is the text you want displayed interspersed with variable names
corresponding to the types of information you want included.

For example, to display the file format you could use <kbd>:set
statusline=\%{\&ff}}. You can surround this with arbitrary text, for example:
<kbd>:set statusline=format:\ \%{\&ff}</kbd>.

<span class="todo">screenshot of this status line</span>

<span class="todo">check terminology. What do we call the format specifiers?</span>

Here are some common variables the status line can display:

<table>
  <tr><th>Name</th>    <th>Description</th></tr> 
  <tr><td><i>b</i></td><td>Value of byte under cursor.</td></tr>
  <tr><td><i>c</i></td><td>Column number.</td></tr>
  <tr><td><i>l</i></td><td>Line number.</td></tr>
  <tr><td><i>r</i></td><td>Displays <i>[RO]</i> if file is read only.</td></tr>
  <tr><td><i>t</i></td><td>File name (as opposed to file path)</td></tr>
  <tr><td><i>y</i></td><td>File content type, e.g. <i>[ruby]</i> or
      <i>[latex]</i>.</td></tr>
  <tr><td><i>\&amp;ff</i></td><td>File format, e.g. <i>unix</i>, <i>mac</i>,
      <i>dos</i>.</td></tr>
</table>  

Variable names are prefixed with a percentage sign (<i>\%</i>).  Spaces,
bars (<i>|</i>), and other special characters <span class="todo">What special characters?</span> need to be
backslash escaped.

Here's a longer example: <kbd>:set statusline=\%t\ \%y\ format:\
  \%{\&ff};\ [\%c,\%l]</kbd>. Sample output: <samp>.vimrc [vim] format: unix
[2,3]</samp>.

By default Vim hides the status line. To show it: <kbd>:set
  laststatus=2</kbd>..

<h4>Discussion</h4>

You may have noted that the syntax for displaying the file format was
different from the other variables. The <i>\%{}</i> syntax evaluates the expression
contained within the braces and displays the result.

For example, to display the name of the current colour scheme:
<kbd>\%{g:colors_name}</kbd> (example output: <i>morning</i>). Or the current
language: <kbd>\%{v:lang}</kbd> (example output: <samp>>en_GB.UTF-8</samp>). Here we
are simply displaying the value of Vim internal variables. (See <kbd>:let</kbd>
for a list).

The reason <kbd>\%{\&amp;ff}</kbd> works is because <i>ff</i> is the Vim option for
getting/setting the file format, and the <i>\&amp;</i> prefix is used for referring to
options. The value of any option can be displayed in this way.

You can even call a function <span class="todo">link recipe</span> in this way.  For example, to
show the last modification time of the current file:
<kbd>\%\{strftime(\"\%c\",getftime(expand(\"\%\%\")))\}</kbd>.
