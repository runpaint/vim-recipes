<h3>Spell Checking</h3>

<h4>Problem</h4>

You want Vim to highlight misspelled words and suggest alternatives.

<span class="todo">Mention: Vim 7</span>

<h4>Solution</h4>

To enable spell checking you first need to ensure that Vim knows which
language you're typing in. If you execute <tt>:echo &amp;spelllang</tt> you'll
see the language code that Vim thinks applies. For instance <i>en</i>. To
change this use <tt>:set spelllang=<var>code</var></tt>. For example, I use
<tt>:set spelllang=en_GB.UTF-8</tt>. If you're not sure what language code
you need see the sidebar.

<span class="todo">Sidebar of common language codes</span>

If you're spellchecking in American English, you should already have the
dictionary installed. Otherwise, Vim should prompt you to download it. If
you're not and it doesn't, you'll have to download a dictionary yourself. See
the sidebar for details.

<span class="todo">Sidebar: If you're not using a region, just download the
*.spl from ftp.vim.org; else install aap and do aap -f
.../main.aap</span>

To highlight spelling errors just execute <tt>:set spell</tt>. To remove the
highlighting: <tt>:set nospell</tt>.

<h4>Discussion</h4>

Spelling errors are highlighted in one of four colours depending on the type
of error:

<span class="todo">Describe default colours for these classes of errors</span>

<ul>
  <li>Word is not in the dictionary.</li>
  <li>Word is in the dictionary but not capitalised.</li>
  <li>Word is classed as 'rare'.</li>
  <li>Word is spelled incorrectly for this region. For instance,
  <i>color</i> in British English.</li> 
</ul>

You can jump to the next spelling error after the cursor <kbd>]s</kbd> and
jump backwards with <kbd>[s</kbd>. Similarly, you can use <kbd>]S</kbd> and
<kbd>[S</kbd> to only jump between words not in the dictionary (i.e. rare, and
region-specific misspellings are skipped).

Once the spelling errors are highlighted, you presumably want to correct them.
If you hit <kbd>z=</kbd> over a misspelled word you'll be presented with a list
of suggested spellings.  Enter the number corresponding to the correct
spelling and hit <kbd>&lt;Enter&gt;</kbd>.

If a correctly spelled word is highlighted as an error, you can add it to your
personal dictionary with <kbd>zg</kbd>. This prevents it from being marked as
an error in the future.

Conversely, if an incorrectly spelled word isn't highlighted, you can add it
to the "bad word" list with <kbd>zw</kbd>.
