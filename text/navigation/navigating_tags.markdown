<h4>Problem</h4>

You're working on a project where you need to jump between occurrences of
significant keywords, possibly spread across multiple files. <span
class="todo">Phrase better?</span>

For example, you're writing source code and want to be able to type a function
name then quickly jump to where it was initially defined so you understand how
it should be used.  Then you want to return to where you were.  

<h4>Solution</h4>
 
Use <i>tags</i>. Tags are similar to index entries in a book: significant
terms are linked to the key places that they occur. 

We will use a program called <i>Exuberant Ctags</i> to generate the tag list
because it is the most popular; see the sidebar for others. <span
class="todo">sidebar with list from p75 of HV; links: Vim tip 94</span> 

After you have installed Ctags <span class="todo">sidebar on installing,
too?</span> you can generate a tag list for the current directory (and its
sub-directories) with <tt>ctags -R</tt>. To only consider files in the current
directory use <tt>ctags \*</tt>.  This will generate a tag list for source code
in most common languages.

You can now open a source file from that directory and use the <tt>:tag
{tag}</tt> command to jump to the definition of the tag. To look up the tag
under the cursor use <tt>&lt;Ctrl&gt;+]</tt>. You can also auto-complete tag
names by starting to type one then using <tt>&lt;Tab&gt;</tt> to cycle through
the list of matching tags. To return to where you were before you jumped to a
tag you use <tt>&lt;Ctrl&gt;+t</tt>.

<h4>Discussion</h4>

<span class="todo">This bit on helptags is great, but does it really belong
here? Maybe a seperate recipe?</span>

So far, we have only described tags in terms of program source code, but they
are by no means limited to this domain. The Vim help system uses tags
extensively to allow navigation. When you use <tt>:help {term}</tt> you're
actually looking up a tag in the documentation tag file. When you position
your cursor over a highlighted entry in a help file, you use
<tt>&lt;Ctl&gt;+]</tt> to follow it. This is all possible because as long as
you have a way of identifying significant terms in a file, you can generate a
tags list for it.  For example, here's an excerpt from the tags documentation:

<pre>
				*tags-option*
The 'tags' option is a list of file names.  Each of these
files is searched for the tag.  This can be used to use a
different tags file than the default file "tags".  It can
also be used to access a common tags file.
</pre>

The <tt>*tags-option*</tt> syntax is used for defining a tag.  Elsewhere, the
<tt>|tags-option|</tt> syntax is used for linking to a tag. You can use
<tt>:helptags {dir}</tt> for generating a taglist for all <i>*.txt</i> files
in the given directory which are marked up in this way.

However you generate it, the tag list is a static file, so it must be
regenerated when your files change significantly <span class="todo">FIXME:
syn? (double use)</span>.  In programming projects, it is typical to update
the tags file during the build process.  For example, the <i>Makefile</i>
could execute <tt>ctags</tt>.

Both invocations of <tt>ctags</tt> given above are very liberal in what they
index.  They search for all programming language source code in the specificed
directories, and incorporate all the tags found therein into a single tags
file. To limit <tt>ctags</tt> to just Ruby source code, for example, you can
use <tt>ctags \*.rb</tt>. For more control over what files <tt>ctags</tt>
considers, consult its documentation. On Linux: <tt>man ctags</tt>.

Once you have generated the tags file Vim needs to be able to find it. By
default it looks for a file named <tt>tags</tt> in the current directory, but
for projects which span multiple directories this is not always suitable. You
can specify the location of the tags file using <tt>:set tags={file}</tt>.
Specify multiple tag files by seperating the paths with commas.  Instruct Vim
to search for a tags file recursively with <tt>:set tags=./tags;/</tt>.

Using <tt>&lt;Ctrl&gt;+]</tt> to jump to a new tag takes you to a new buffer
to show the results. If you'd rather see them in a new window use
<tt>&lt;Ctrl&gt;+W+]</tt>, or <tt>:stag {tag}</tt>. 

If you get dizzy after all this jumping around you can reaquaint yourself with
where you've been by using the <tt>:tags</tt> command. This shows you which
tags you've jumped to, and where you jumped to them from.

<span class="todo">Sometimes there will be multiple matches for a tag.  HV
claims that <tt>&lt;Ctrl&gt;+]</tt> will show a list in this case, otherwise
jumping to the tag directly. Vim tip 94 and Vim help seem to disagree. Test
this.</span>

<span class="todo">Opening the File Named Beneath the Cursor?</span>
