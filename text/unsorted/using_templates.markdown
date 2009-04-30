<h3>Using Templates</h3> 

<h4>Problem</h4>

You create documents containing boiler-plate <span class="todo">check this is
hyphenated</span> text and would like to avoid typing it.  <span
class="todo">Better phrasing?</span>

For instance, you write HTML documents and don't want to type the standard
preamble every time.

<h4>Solution</h4>

Use templates and associate them with a file extension. When a new file is
created with an extension for which a template is available, the template
contents will be inserted.
 
You must first create a skeleton document, e.g.:

<span class="todo">Find out \$VIMHOME is used; replace ~/.vim with it</span>

<pre><code>
&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"
	"http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd"&gt;
&lt;html xmlns="http://www.w3.org/1999/xhtml"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://www.w3.org/MarkUp/SCHEMA/xhtml11.xsd"
xml:lang="en"&gt;
	&lt;head&gt;		 	
	&lt;title&gt;Document Title&lt;/title&gt;
	&lt;/head&gt;
	&lt;body&gt;&lt;/body&gt;
&lt;/html&gt; 	
</code></pre>

Save this document in your Vim directory with the corresponding file
extension, e.g. <tt>~/.vim/skel/tmpl.html</tt>. <span class="todo">Suggest it's
chmod'd 600 or 644?</span>

Add the following to your <tt>.vimrc</tt>:

<pre><code>
:autocmd BufNewFile * silent! 0r ~/.vim/skel/tmpl.%:e
</code></pre>

<span class="todo">Shouldn't we add this to a filetype-specific config which
is sourced from .vimrc via a ftplugin?</span>

Now, every time you open a new file Vim checks <tt>~/.vim/skel/</tt> for a
file whose name starts with <tt>tmpl.</tt> and ends with the extension of the
file you're creating. It then reads the template file into your new file's
buffer.

For example, if you added the template above then invoked Vim with <tt>vim
/tmp/page.html</tt>, the XHTML above would be inserted into the
<tt>/tmp/page.html</tt> file automatically.

<h4>Discussion</h4>

Once you have created a document from a template you have to insert text at
various predefined positions. For instance, for the XHTML template, you have
to change the contents of <code>&lt;title&gt;&ldots;&lt;/title&gt;</code>,
then start typing between the <code>&lt;body&gt;&ldots;&lt;/body&gt;</code>
tags. Navigating between these points in the document, which are the same
every time you use the template, is cumbersome. 

The traditional solution is to use placeholders. This involves including some
notation in the template file that indicates where your input is required,
then providing a method to jump between them. 

Here's the previous template with placeholders added:

<pre><code>
&lt;?xml version="1.0" encoding="UTF-8"?&gt;
&lt;!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.1//EN"
	"http://www.w3.org/TR/xhtml11/DTD/xhtml11.dtd"&gt;
&lt;html xmlns="http://www.w3.org/1999/xhtml"
	xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
	xsi:schemaLocation="http://www.w3.org/MarkUp/SCHEMA/xhtml11.xsd"
xml:lang="en"&gt;
	&lt;head&gt;		 	
	&lt;title&gt;%TITLE%&lt;/title&gt;
	&lt;/head&gt;
	&lt;body&gt;%BODY%&lt;/body&gt;
&lt;/html&gt; 	
</code></pre>

The placeholder notation is arbitrary, but let's stick with
<tt>%VARIABLE%</tt> for the sake of example. Now we need a way to jump between
them, and <kbd><kbd>&lt;Ctrl&gt;</kbd>-<kbd>p</kbd></kbd> (menmonic:
<i>p</i>laceholder) seems reasonable. Add the following to your <tt>vimrc</tt>
<span class="todo">Link recipe</span>:

<span class="todo">Improve these regexps. Is the \u inclusion sensible?
Surely we either want to enforce a string of \u, or just let anything be
between the two percentage signs? If we do keep them this, maybe document
that, if users just copy and paste, they need to pay attention to case?</span>

<pre><code>
"Jump between %VAR% placeholders in Normal mode with
" &lt;Ctrl-p&gt;
nnoremap &lt;c-p&gt; /%\u.\{-1,}%&lt;cr&gt;c/%/e&lt;cr&gt;
"Jump between %VAR% placeholders in Insert mode with
" &lt;Ctrl-p&gt;
inoremap &lt;c-p&gt; &lt;ESC&gt;/%\u.\{-1,}%&lt;cr&gt;c/%/e&lt;cr&gt;
" Highlight %VAR% placeholders with the Todo colour group
syn match Todo "%\u\+%" containedin=ALL
</code></pre>

If we create a new HTML file now this is what we see: <span
class="todo">screenshot</span>.  <span class="todo">Walk through inserting
text into template with shortcut keys</span>
