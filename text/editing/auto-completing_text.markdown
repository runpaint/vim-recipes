### Auto-Completing Text

<h4>Problem</h4>

You want to be able to type the start of a word and then have Vim complete
it. For example, you want to type 'multip', be offered suggestions for words
that start that way, then pick one.

<h4>Solution</h4>

To auto-complete a word Vim needs a list of possible words.  An obvious
source is the current file. If your file already contains the word
'multiplicand', then Vim can use it to auto-complete 'multip'. Simply hit
<kbd><kbd>Ctrl</kbd>+<kbd>n</kbd></kbd> after the 'p' to complete the word. If
multiple matches are found you'll be presented with a list from which to
choose from.

Another source of words is a dictionary. Get one, using the sidebar for
reference, then point Vim to it with <code>:set
dictionary=<var>file</var></code>.  Then add the dictionary to list of places
Vim looks for words: <code>:set complete+=k</code>.

<span
class="todo">http://64.233.183.104/search?q=cache:cxSii-G2GAMJ:vectorlinux.osuosl.org/hanumizzle/vimrc+vim+file+explorer+hidden+files&hl=en&ct=clnk&cd=5&client=iceweasel-a
contains a command to convert OOo dictionaries for Vim</span>

Auto-complete can also be used to lookup synonyms for the current word. Get
a thesaurus file, again consult the relevant sidebar for details, then
instruct Vim to use it with <code>:set thesaurus=<var>file</var></code>,
<code>:set complete+=s</code>. 

<h4>Discussion</h4>

Vim can use pretty much any word source imaginable. Consult <code>:help
  ins-completion</code> for more details.

Vim version 7 and above supports Omni-Completion, which allows custom
functions to generate possible completions dynamically. Even better, for
programmers at least, is that some popular programming languages already have
Omni-Completion functions which are enabled automatically. <span
class="todo">How would they enable this if needed?</span> These typically
allow context-sensitive completion of method names, objects, and reserved
words. For example, using Ruby I can type an integer, a period, then invoke
Omni-Completion to find that _Fixnum_ objects support methods such as '%',
'*', and '+'. <span class="todo">screenshot</span>

To use Omni-Completion hit <kbd><kbd>Ctrl</kbd>+<kbd>o></kbd></kbd> to be
presented with a list of choices.

Apart from programming languages, Omni-Completion also works for HTML and
CSS.  For example, you can type <kbd>&lt;p cl</kbd>,
<kbd><kbd>Ctrl</kbd><kbd>x</kbd></kbd>
<kbd><kbd>Ctrl</kbd>+<kbd>o</kbd></kbd>, then be shown <samp>class="
CDATA</samp>, <samp>onclick=" Script</samp>, and <samp>ondblclick="
Script</samp>.

When an Omni-Completion plugin doesn't exist for a language, but syntax
highlighting does (and it nearly always does), you can approximate
Omni-Completion support with <code>:setlocal
omnifunc=syntaxcomplete#Complete</code>. The Vim documentation suggests
automating this process by adding the following stanza to your
<code>vimrc</code> <span class="fn">Recipe~\ref{sec:configuring} explains
how</span> <q>after any <code>:filetype</code> command</q>:


    if has("autocmd") && exists("+omnifunc")
        autocmd Filetype *
                   \	if &omnifunc == "" |
                   \		setlocal omnifunc=syntaxcomplete#Complete |
                   \	endif
    endif

<span class="todo">TODO: Mention
http://www.vim.org/scripts/script.php?script_id=1643</span>
