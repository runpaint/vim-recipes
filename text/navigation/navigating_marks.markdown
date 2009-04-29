<h4>Problem</h4>

You want to "bookmark" specific points in a file so you can easily jump to
them from elsewhere.

<h4>Solution</h4>

Use Vim's <i>marks</i> feature. A mark is a character in the range
<i>a-zA-Z0-9</i>. It's represented in the examples below as <i>M</i>.

<table>
  <tr>
    <th>Command</th>
    <th>Action</th>
  </tr>
  <tr>
    <td><tt>mM</tt></td>
    <td>Mark the current position as <i>M</i>.</td>
  </tr>
  <tr>
    <td><tt>'<var>M</var></tt></td>
    <td>Jump to the first character of the line containing <var>M</var>.</td>
  </tr>
  <tr>
    <td><tt>&#96;<var>M</var></tt></td>
    <td>Jump to the position of mark <var>M</var>.</td>
  </tr>
</table>
 
<h4>Discussion</h4>

Marks <i>0-9</i> are mainly for Vim's internal use, so ignore them.  Marks
<i>a-z</i> are only available in the current file, and are deleted when it is
closed. Marks <i>A-Z</i> are available across multiple files. If your
<i>.viminfo</i> file is available <span class="todo">link to
explanation</span>, they persist across sessions.

Marks have a multitude of uses. I use them often when I have a section of a
file that I need to keep referring to: I mark that section with <tt>ma</tt>,
jump to it with <tt>'a</tt>, then return to where I was
previously with <tt>&#96;&#96;</tt>. I use them almost implicitly when
formatting and filtering text to define the text that I want to edit. <span
class="todo">Link to formating/filtering recipes</span>

The <tt>:marks</tt> command shows a list of marks you have set, which is
useful for the kind of person who fully embraced the idea of marking anything
and everything but was unable to remember the significance of all 52 marks he
used.

<span class="todo">Incorporate ideas from http://linux.com/articles/54159</span> 
<span class="todo">Mention Vim tip 152</span>
