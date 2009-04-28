### Chaging the Colour Scheme

<h4>Problem</h4>

You don't like the colours Vim uses; you want to change them.

For example, you've found a colour scheme you like better, so want to instruct
Vim to use it. Or, you find that the current colour scheme makes text hard to
read so want to find a better one.

<h4>Solution</h4>

To change to a new colour scheme execute <kbd>:colorscheme <var>name</var></kbd>.

To browse existing colour schemes enter <kbd>:colourscheme</kbd>, then hit
<kbd><Tab></kbd> to cycle through the installed schemes. If you find one that you like hit
<kbd><Enter></kbd> to apply it.

<h4>Discussion</h4>

A colour scheme is a set of rules controlling how different elements of the
interface appear. Vim is distributed with a selection of colour schemes, but
you can also download new ones <span class="todo">link recipe</span>, or create your own
<span class="todo">link recipe</span>.

<span class="todo">some screenshots illustrating different colour schemes along with their
names</span>

Before you change your color scheme you may like to make a note of what you're
using at the moment. You can find the name of the current scheme with <kbd>:echo
  g:colors_name</kbd>.

To change a specific aspect of a colour scheme you can redefine a highlight
group <span class="footnote">Recipe: sec:re-highlight</span>.
