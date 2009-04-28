%

<span class="label">sec:remote-config</span>

<h4>Problem</h4>

You want to store your <i>vimrc</i> on a remote server, and have Vim use it
automatically.

For example, you regularly work on different computers and want to keep your
configuration synchronised between them.

<h4>Solution</h4>

Upload your <i>vimrc</i> to a server (such as a web server).

You can start Vim with the <i>-S</i> flag, e.g. \texttt{vim -S {url}}.

This is cumbersome, though. Easier is to use the following minimal
<i>vimrc</i> on all of your machines:

\begin{verbatim}
runtime plugin/netrwPlugin.vim
silent source {url}
\end{verbatim}

This acts as a bootstrap config file. Vim loads your local <i>vimrc</i>
first, activates the plugin needed to fetch files over the network
(<i>netrw</i>), fetches the given URL, then 'sources' it as a set of Vim
commands.

\textbf{Warning}: You should only source <i>vimrc</i> files that you've
vetted. They should not be hosted from a shared directory unless you implicity
trust all users with access to it.

<h4>Discussion</h4>

Given how configurable Vim is, it's understandable that users want to use
their handcrafted configuration regardless of what machine they use.

The solution above is simple but does have some drawbacks.  One is that every
time you invoke Vim the remote <i>vimrc</i> is downloaded again. If you
mainly use one Vim instance for long periods of time, perhaps using tabs to
manage multiple files, this may not be a problem, but if you're regularly
starting and quitting Vim instances, you may notice a lag in start-up time.
Another drawback is that if you're working on a machine without Internet
access, your configuration won't be loaded.

One alternative is to perodically fetch your remote <i>vimrc</i> and save it
as <i>~/.vimrc</i> <span class="todo">x-platform caveat</span>.  Unix/Linux users could do this
with a \texttt{wget \{url\} -O \{vimrc-path\}} line in their <tt>crontab</tt>.
This avoids the startup lag, and means that if you lose Internet access Vim
will use the last <i>vimrc</i> it managed to download.

Another is to keep your configuration in a version control system, such as
Subversion, Bazaar, or git, then check out the repository on each machine you
use. This is a more complete solution which allows you to synchronise all of
your configuration files over multiple machines; not just Vim's. A VCS also
makes it easier for multiple people to contribute to the configuration, which
can be especially useful if you're working on a team.

%
