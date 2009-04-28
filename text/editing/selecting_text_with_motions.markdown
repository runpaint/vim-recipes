### Selecting Text

<h4>Problem</h4>

You want to define an area of text for a command to operate on in the most
efficient way. <span class="todo">Better wording?</span>

For example, you want to delete next two words, or reformat the current
paragraph. <span class="todo">example sucks</span>

<h4>Solution</h4>

Operators can be followed by 'motions' which describe what text they should
operate on. They can be thought of as a set of directions the operator should
use to select text.

<span class="todo">Note that all of this applies to Normal and Visual mode</span>

<span class="todo">Do we assume that they have already read Navigating Text Files/Source
Code/ Just mention them but require no prior knowledge?</span>

<span class="todo">Terminology check: operator, command, etc.</span>

<span class="note">[NOTE: Trying to explain both motions, text objects, their
operators, and give examples is too complicated. Thus, here we just look at
basic motions; we introduce text objects in the Discussion</span>

For example, you can delete the character under the cursor with <kbd>d</kbd>.
If you wanted to delete the word 'fandangle' you'd need to press <kbd>d</kbd>
nine times: once for each character. You could simply the process by prefixing
<kbd>d</kbd> with a 'count': <span class="todo">Link to repetition
recipe</span> <kbd>9d</kbd>. However, that requires you to know how many
characters are in the word, and would be totally impractical if you wanted to
delete multiple words at once. The motion for a word is <code>w</code>, so you
can delete the word far easier with <kbd>dw</kbd>. <span class="todo">Remove
mention of text objects from this example.</span>

The following table shows some common operators which understand motions.

<table>
  <tr>
    <th>Operator</th>    
    <th>Action</th>
    <th>Description</th>                     
  </tr>
  <tr>
    <td><kbd>c</kbd></td>
    <td>change</td>
    <td>Deletes then enters insert mode.</td>
  </tr>  
  <tr>
    <td><kbd>d</kbd></td>
    <td>delete</td>
    <td>Deletes<span class="fn">See recipe~\ref{sec:delete-text for more on
      deleting text</span></td>
  </tr>
  <tr>
    <td><kbd>y</kbd></td>
    <td>yank</td>
    <td>Copies to a register. <span class="todo">link recipe</span></td>
  </tr>
  <tr>
    <td><kbd>gq</kbd></td>
    <td>format</td>
    <td>Formats. <span class="todo">link recipe, expand desc.</span></td>
  </tr>
  <tr>
    <td><kbd>&gt;</kbd></td>
    <td>indent</td>
    <td>Shifts text left <span class="fn">Recipe~\ref{sec:indenting} explains
      indentation of text</span></td>
  </tr>
  <tr>
    <td><kbd>&lt;</kbd></td>
    <td>unindent</td>
    <td>Shifts text right. <span class="fn">Recipe~\ref{sec:indenting} explains
      indentation of text</span></td>
  </tr>
</table>

Here are some common motions:

<table>
  <tr>
    <th>Command</th>
    <th>Moves</th>
  </tr>
  <tr>
    <td><kbd><var>count</var>h</kbd></td>
    <td>Right <var>count</var> characters.</td>
  </tr>
  <tr>
    <td><kbd><var>count</var>l</kbd></td>
    <td>Left <var>count</var> characters.</td>
  </tr>
  <tr>
    <td><kbd><var>count</var>j</kbd></td>
    <td>Down <var>count</var> characters.</td>
  </tr>
  <tr>
    <td><kbd><var>count</var>k</kbd></td>
    <td>Up <var>count</var> characters.</td>
  </tr>
  <tr>
    <td><kbd><var>count</var>$</kbd></td>
    <td>To end of the line <var>count</var>-1 lines downward. <span class="todo">Fix explanation</span></td>
  </tr>
  <tr>
    <td><kbd>0</kbd></td>
    <td>To start of line <var>count</var>-1 lines downward. <span class="todo">Fix explanation</span></td>
  </tr>
  <tr>
    <td><kbd><var>count</var>f<var>char</var></kbd></td>
    <td>To the <var>count</var>'th occurrence of <var>char</var> to the right.</td>
  </tr>
</table>

We can combine operators and motions to select text then operate upon it.
Let's look at some examples:

<dl>
  <dt><kbd>y10h</kbd></dt>
  <dd>Copy the next 10 characters to a register.</dd>
  <dt><kbd>d$</kbd></dt>
  <dd>Delete from the current character until the end of the line.</dd>
  <dt><kbd>c2j</kbd></dt>
  <dd>Delete the current line and the one below it, then enter insert mode.</dd>
</dl>
		
<h4>Discussion</h4>

Motions aren't very intelligent. Say you wanted to delete the word 'This' with
<kbd>dw</kbd>. That works as long as your cursor is over 'T'; if you were on the 'h',
you'd only delete that.

Vim supports aditional motions for operating on text objects.  One of these is
<kbd>aw</kbd> (mnemonic: *a* *w*ord) which would do the right thing in both examples
above because it considers what *object*, not character, the cursor over.

'Text object' commands are very similar to motions, and can be used with the
same operators. They're frequently just a motion command prefixed with either
'a' or 'i'. The 'a' prefix indicates that the whole object will be selected,
including white space; the 'i' prefix selects the 'inner' object without white
space, or just the white space. A few of the available commands follow:

<table>
  <tr>
    <th>Command</th>
    <th>Selects</th>
  </tr>
  <tr>
    <td><kbd><var>count</var>aw</kbd></td>
    <td rowspan="2"><var>count</var> words</td>
  </tr>
  <tr>
    <td><kbd><var>count</var>iw</kbd></td>
  </tr>
  <tr>
    <td><kbd><var>count</var>as</kbd></td>
    <td rowspan="2"><var>count</var> sentences</td>
  </tr>
  <tr>
    <td><kbd><var>count</var>is</kbd></td>
  </tr>
  <tr>
    <td><kbd><var>count</var>aB</kbd></td>
    <td rowspan="2"><var>count</var> [&hellip;] or {&hellip;} blocks</td>
  </tr>
  <tr>
    <td><kbd><var>count</var>iB</kbd></td>
  </tr>
  <tr>
    <td><kbd><var>count</var>a"</kbd></td>
    <td rowspan="2"><var>count</var> quoted strings</td>
  </tr>
  <tr>
    <td><kbd><var>count</var>i"</kbd></td>
  </tr>
</table>

So, to delete a paragraph, position your cursor anywhere inside it then hit
<kbd>dap</kbd>. *D*elete *a* *p*aragraph - it even sounds
sensible<span class="footnote">No, this is not a bug.</span>.
