### Searching and Replacing

<h4>Problem</h4>

You want to replace all occurrences of one string with another.

For example, imagine you were using Vim to write a novel wherein there was a
protaganist named 'Curtis'. You decide to change his name to 'Excalibur' to
give him more panache. You want Vim to make these changes with the least
possible effort.

<h4>Solution</h4>

Execute <code>:%s/<var>target</var>/<var>replacement</var>/g</code> to replace
all occurrences of <var>target</var> with <var>replacement</var>. For
example: <code>:%s/Curtis/Excalibur/g</code>. 

<h4>Description</h4>

<span class="todo">[Sidebar:
http://vim.wikia.com/wiki/Alternate<i>delimiters</i>for<i>the</i>replace\_command
]</span>

<span class="todo">Clarify that the '%' indicates that s/ works over the whole file; if
you want to work on a section you use something else</span>

The solution above replaces 'Curtis' with 'Excalibur'. The 'g' flag at the end
causes this operation to be performed <i>g</i>lobally, i.e. multiple times on
each line, if necessary.

The search string ('Curtis' in this example) doesn't have to be a literal
string; it can be any Vim regular expression. The details of Vim's regular
expressions are explained in the Using Regular Expressions recipe <span
class="todo">link regex recipe</span>, so I won't go into them here. Two tips,
though: 

<span class="todo">Optimal way of typesetting \<?</span>

* Search for words - If you provide a literal string to replace, as above, Vim
even replaces occurrences that form parts of other words. For example
<code>:%s/and/or/g</code> would change 'supply and demand' into 'supply or
demor'. To avoid this, surround the string with 'word boundary anchors'
(<code>\&lt;</code>, <code>\&gt;</code>). Thus, the above command would be
rewritten as <code>:%s/\&lt;and\&gt;/or/g</code>.  
* Search case insensitively - If you want 'linux' to match 'Linux', 'linux',
and 'LiNuX' you need to either add the 'i' flag to the end of the replacement
command, or, use <code>:set ignorecase</code> to toggle this setting for all
searches.

