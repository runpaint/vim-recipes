<h3>Inserting Accented or "Foreign" Characters</h3>

<h4>Problem</h4>

You want to type characters which don't exist on your keyboard.

For example, you want to type some words in another language, so need to
insert accented characters. Or you want to type a symbol such as &plusmn;. 

<h4>Solution</h4>

If you haven't already, set up Vim to use UTF-8 <span class="todo">link
recipe</span>. It makes this process far easier.

To insert an accented character you press
<kbd><kbd>&lt;Ctrl&gt;</kbd>-<kbd>K</kbd></kbd>, the unadorned character, then
another character indicating the accent type.  This method can also be used to
produce translations of characters in a given script. <span
class="todo">Explain better; check terminology</span>

For example, to insert an e acute (the last letter in <i>café</i>) you hold
down <kbd><kbd>&lt;Ctrl&gt;</kbd>-<kbd>K</kbd></kbd>, type <i>e</i>, then type
an apostrophe (<i>'</i>). 

The following table shows the different types of characters you can produce:

<span class="todo">Explain the table better</span>
<span class="todo">If Prince has reasonable support for character entities,
put the example column back in.</span>

<table>
  <tr>
    <th>Character</th>
    <th>Meaning</th>
  </tr>
  <tr>
    <td>!</td>
    <td>Grave</td>
  </tr>
  <tr>
    <td>'</td>
    <td>Acute accent</td>
  </tr>
  <tr>
    <td>&gt;</td>
    <td>Circumflex accent</td>
  </tr>
  <tr>
    <td>?</td>
    <td>Tilde</td> 
  <tr>
    <td>-</td>
    <td>Macron</td>
  </tr>
  <tr>
    <td>(</td>
    <td>Breve</td>
  </tr>
  <tr>
    <td>.</td>
    <td>Dot above</td>
  </tr>
  <tr>
    <td>:</td>
    <td>Diaeresis</td>
  </tr>
  <tr>
    <td>,</td>
    <td>Cedilla</td>
  </tr>
  <tr>
    <td>_</td>
    <td>Underline</td>
  </tr>
  <tr>  
    <td>/</td>
    <td>Stroke</td>
  </tr>
  <tr>
    <td>"</td>
    <td>Double acute (Hungarumlaut)</td>
  </tr>
  <tr>
    <td>;</td>
    <td>Ogonek</td>
  </tr>
  <tr>
    <td>&lt;</td>
    <td>Caron</td>
  </tr>
  <tr>
    <td>0</td>
    <td>Ring above</td>
  </tr>
  <tr>
    <td>2</td>
    <td>Hook</td>
  </tr>
  <tr>
    <td>9</td>
    <td>Horn</td>
  </tr>
  <tr>
    <td>=</td>
    <td>Cyrillic</td>
  </tr>
  <tr>
    <td>*</td>
    <td>Greek</td>
  </tr>
  <tr>
    <td>%</td>
    <td>Greek/Cyrillic special</td>
  <tr>
    <td>+</td>
    <td>Smalls: Arabic, caps: Hebrew</td>
  </tr>
  <tr>
    <td>3</td>
    <td>Some Latin/Greek/Cyrillic</td>
  </tr>
  <tr>
    <td>4</td>
    <td>Bopomofo</td>
  </tr>
  <tr>
    <td>5</td>
    <td>Hiragana</td>
  </tr>
  <tr>
    <td>6</td>
    <td>Katakana</td>
  </tr>
</table>

<h4>Discussion</h4>

This method of input is most suitable for occasionally typing unusual
characters. <span class="todo">Link to recipe more suitable for writing in different
languages, or simply expand.</span>

Vim refers to non-standard characters as <i>digraphs</i>. <span class="todo">Make less
condescending</span> A list of digraphs available on your system can be obtained
with the command <tt>:digraphs</tt>. The output may appear chaotic, but that's mainly
because it's so dense. It lists, in columns, the character's internal name, the
literal character, and the character code in decimal.

You can also insert characters using their character code. If you're one of
the slackers who haven't memorised the Unicode specification yet, you can use
the <tt>:digraphs</tt> command, or any other reference, to lookup the code.
Hit <kbd><kbd>&lt;Ctrl&gt;</kbd>-<kbd>V</kbd></kbd>, then type the code in
either hexadecimal or decimal.  Continuing the above example of producing
<i>é</i>, you could enter either <kbd><kbd>&lt;Ctrl&gt;</kbd>-<kbd>V</kbd>
  <kbd>xe9</kbd></kbd> or <kbd><kbd>&lt;Ctrl&gt;</kbd>-<kbd>V</kbd>
  <kbd>233</kbd></kbd>. 

The internal name <tt>:digraphs</tt> lists corresponds with the shortcut table
above.  That is to say, the internal name for <i>é</i> is <i>e'</i>. Thus, we
can generalise the <kbd><kbd>&lt;Ctrl&gt;</kbd>-<kbd>K</kbd></kbd> approach
for any character we know the name of. For example, to produce the
<i>&plusmn;</i> sign you hit
<kbd><kbd>&lt;Ctrl&gt;</kbd>-<kbd>K</kbd>-<kbd>+-</kbd></kbd>. 
