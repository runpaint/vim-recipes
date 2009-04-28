%

<span class="label">sec:sessions</span>

<h4>Problem</h4>

Every time you work on a project you need to manually open
all of the files it comprises of, readjust the window size,
etc. You'd like Vim to do all this automatically.

<h4>Solution</h4>

Use 'sessions'.

To save a session: <tt>:mksession</tt>. Vim saves the session
information as 'Session.vim' in the working directory; to
specify your own filename execute \texttt{:mksession {file}}
instead. To overwrite an existing session follow the command
with an exclamation mark: <tt>:mksession!</tt>

To restore a session invoke Vim with the <i>-S</i> flag from the
same directory you saved <i>Session.vim</i> in: <tt>vim -S</tt>. If
you used a different filename for your session: \texttt{vim -S
\{file\}}. If you're already inside Vim, you can load a
session by sourcing the session file, e.g. <tt>:source
Session.vim</tt>.

<h4>Discussion</h4>

Applications such as Mozilla Firefox use the concept of a global
session file which is overwritten every time you use the
program. To make Vim work this way you simply use a fixed
name for the session variable. For example, you could save
it to <i>~/vim/Session.vim</i>. <span class="todo">Windows vs. Linux paths;
use \$VIMHOME?</span> You could use a mapping something like this
to your <i>vimrc</i> <span class="todo">link recipe</span>:

\begin{verbatim}
nmap SQ <ESC>:mksession! ~/vim/Session.vim<CR>:wqa<CR>
\end{verbatim}

(<i>SQ</i> for <i>S</i>ession <i>Q</i>uit). To automatically restore
this session when Vim is called without arguments add the following:

\begin{verbatim}
function! RestoreSession()
  if argc() == 0 "<tt>vim</tt> called without arguments
    execute 'source ~/.vim/Session.vim'
  end
endfunction
autocmd VimEnter * call RestoreSession()
\end{verbatim}

You can extend this in arbitrary ways to suit your working environment. One
approach is to only restore a session if it exists in the current file's
directory. Another is to simply hardcode a list of directories whereby if they
are the file's current directory or parent directory, their session file is
used. This is useful for one-project-per-directory organisation. 

If you don't just want one global session file, as described above, a more
granular approach is suggested below:

\begin{verbatim}
nmap SSA :wa<CR>:mksession! ~/sessions/
nmap SO :wa<CR>:so ~/sessions/
\end{verbatim}

<i>S</i>ession <i>S</i>ave <i>A</i>s saves the open files and prefills
the command line with the command to save the current session in a
<i>~/sessions/</i> directory. All you need to do is enter a name and hit
<tt><Enter></tt>.

<i>S</i>ession <i>O</i>pen also saves the open files, then prefills the
command line with the command to load a session file.  Just type the name of
the session you want to load and hit <tt><Enter></tt>.

You can use <tt><Tab></tt> completion in both cases. For example, you could
save a session with <tt>SSAwork<Enter></tt>. Later, when you want to restore
the session but can't recall its name, just hit <tt>SO<Tab></tt> to cycle
through the saved sessions.

(Both mappings assume the <i>~/sessions/</i> directory already exists;
create it if it doesn't).

<span class="todo">Consider mentioning the various options for saving different aspects of
the session. If there's space, the Sessionx.vim file as well</span>

<span class="todo">Look at trick from
http://64.233.183.104/search?q=cache:cxSii-G2GAMJ:vectorlinux.osuosl.org/hanumizzle/vimrc+vim+file+explorer+hidden+files&hl=en&ct=clnk&cd=5&client=iceweasel-a
for using sessions with GNU screen</span>

%
