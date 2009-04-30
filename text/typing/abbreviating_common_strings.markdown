<h3>Abbreviating Common Strings</h3>

<h4>Problem</h4>

You regularly have to enter the same text, and you don't want to. 

For instance, if you use Vim to write e-mail <span class="todo">recipe
link</span> you may often mention the URL of your website. Instead of typing
<tt>http://example.com/</tt> every time, which is both annoying and error
prone, you want to enter, say, <i>myUrl</i> and have it replaced with the
address.

<h4>Solution</h4>

Use Vim's abbreviations feature to map concise abbreviations to frequently
entered text.

To create the aforementioned abbreviation we use the <tt>:iabbrev</tt>
command: <tt>:iabbrev myUrl http://example.com/</tt>. To use it, type the name
of the abbreviation (<i>myUrl</i> in this case) and then hit
<kbd>&lt;Space&gt;</kbd> or <kbd>&lt;Enter&gt;</kbd>. The name of the
abbreviation is replaced with its payload.

<h4>Discussion</h4>

The abbreviation feature is smart enough not to expand abbreviation names that
occur as part of another word, but its telepathic functionality is suboptimal.
Useful abbreviation names are easy to type, but will not appear in normal
text. The convention I use is to prefix them with <i>my</i>, then uppercase
the first letter. (If you use a programming language that prefers "camelCased"
variable names, you may see clashes. Either stop using Java&reg;, or disable
abbreviations for the source code. <span class="todo">explain how</span>)
 
You can also abbreviate commands. For instance, if you wanted to type
<tt>:docs</tt> instead of <tt>:help</tt> you could map one to the other with
<tt>:cabbr docs help</tt>.

I suggest keeping your abbreviations in an <i>abbreviations</i> file in
<tt>$VIMHOME</tt>.  You can then source it from your <i>vimrc</i>. For
example, you can create the file by running <tt>vim $VIM/abbreviations</tt>,
then populate it with your abbreviations:

<pre><code>
iabbrev myUrl http://example.com/
iabbrev myEmail user@example.com
</code></pre>

Then in <tt>vimrc</tt><span class="fn">Recipe~\ref{sec:configuring} introduces
the <tt>vimrc</tt> file for configuration</span> just write <tt>source
$VIM/abbreviations</tt>. 
