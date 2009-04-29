<h3>Searching for the Word Beneath the Cursor</h3>

<h4>Problem</h4>

You want to search the current document for the word underneath your cursor.
You'd rather not type it in again.

<h4>Solution</h4>

In Normal mode, place your cursor on or just in front of the word you wish to
find, then press <tt>*</tt> (mnemonic: star search).  This will jump to the <i>next</i>
occurence of the word in the current file. Alternatively, pressing <tt>#</tt> will
find the <i>previous</i> occurence.

<h4>Discussion</h4>

After finding the first match using either of the above methods, you can press
the <kbd>n</kbd> (mnemonic: <i>n</i>ext match) key to jump to the next match.
To jump to the previous match, use <kbd>N</kbd>. <span class="todo">This is
repeated across multiple tips; sidebar it?</span>

To search for words <i>containing</i> the current word, press <kbd>g*</kbd> or
<kbd>g#</kbd>, as appropriate. For instance, if the current word is
<i>back</i>, <tt>g*</tt> will jump to <i>hunchback</i>.
