%

<span class="label">sec:script-plugin</span>

<h4>Problem</h4>

You want to add functionality to Vim, preferably without having to write it
yourself.

<span class="todo">Pick a script to use as an example. It should be
mature, generally useful, and easy to install...</span>

<h4>Solution</h4>

Browse \url{http://www.vim.org/scripts/} to find a script that meets your
needs. Its 'type' should be 'utility' or 'ftplugin'. Download the latest
version to your computer. If the plugin comes with its own installation
instructions, use those; otherwise, read on.

If the file you've downloaded has a name ending with '.vim' you usually just
need to save it in the right directory and then its ready to use. For scripts
labelled 'utility', also known as 'global plugins, this directory is
'\$VIMHOME/plugin'; for those labeled 'ftplugin', also known as 'filetype
plugins',  the last portion of this path is 'ftplugin' instead. If this
directory does not already exist you need to create it. The sidebar lists the
locations of the plugin directories on various operating systems.

If the file is compressed (ending with <i>.zip</i> or <i>.tar.gz</i>), try
uncompressing it in the parent directory of the applicable plugin directory.
For example, on Linux this is <i>~/.vim/</i>.

Now you should just be able to start Vim and have the plugin work.

\subsubsection{Plugin Directory Location}

<span class="todo">Make this clearer. For instance, how do
Windows users find \$HOME?</span>
\textbf{Note}: For filetype plugins, the last portion of
these paths is 'ftplugin'; not 'plugin'.
\begin{itemize}
\item <i>Unix</i> -	<i>~/.vim/plugin</i>
\item <i>PC and OS/2</i> - <i>\$HOME/vimfiles/plugin</i> or
<i>\$VIM/vimfiles/plugin</i>
\item <i>Amiga</i> - <i>s:vimfiles/plugin</i>
\item <i>Macintosh</i> - <i>\$VIM:vimfiles:plugin</i>
\item <i>Mac OS X</i> - <i>~/.vim/plugin</i>
\item <i>RISC-OS</i> - <i>Choices:vimfiles.plugin</i>
\end{itemize}

\subsubsection{Plugin Types}

Plugins can be either 'global' or filetype-specific.  Global plugins are
loaded for every file you open; filetype-specific plugins are only loaded for
certain filetypes.

<h4>Discussion</h4>

As complicated as the above instructions may sound, it's
generally trivial to install a plugin. For example, on Linux
to install the <i>potwiki</i> plugin
(\url{http://www.vim.org/scripts/script.php?script_id=1018}):

\begin{verbatim}
\$ mkdir -p ~/.vim/plugin 
\$ wget http://www.vim.org/scripts/download<i>script.php?src</i>id=6200
-O ~/.vim/plugin/potwiki.vim
\end{verbatim}

If your plugin directory already exists, the first command is superflous.

Vim 7 added support for a new plugin installation method called 'vimball'.
Vimballs make plugin installation and configuration easier, and are a definite
improvement over the previous methods. They're not in wide use yet, but if you
find a plugin distributed in this way (they have a '*.vba' extension), try
following the steps below:

\begin{itemize}
\item Download the <i>*.vba</i> file.
\item Open it with Vim, e.g. <tt>vim something.vba</tt>.
\item Use the <tt>:VimballList</tt> to verify its contents.
\item Install it by sourcing: <tt>:source \%</tt>.
\end{itemize}

%
