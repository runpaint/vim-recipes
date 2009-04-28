### Working with Remote Files

<span class="label">sec:remote-file</span>

<h4>Problem</h4>

You want to edit/view a file that is stored on another computer.

For example, you might want to change a file on your website
from your home computer. Or, you want to change the 'message of
the day' file on a server you administer.

<h4>Solution</h4>

To invoke Vim with a remote file use its URL as the argument to <tt>vim</tt>.
For example: <tt>vim sftp://guest@example.com/file.txt</tt>.

To work with remote files from within Vim, just use their URLs in place of a
filename with normal editing commands.

So, to to open a remote file for editing use \texttt{:e \{URL\}}. For example:
<tt>:e ftp://user@example.com/README</tt>.

To save to a remote file use \texttt{:w \{URL\}}. For example: <tt>:w
scp://kci@jojo.example.com/etc/motd</tt>.

<h4>Discussion</h4>

If you need to make a quick change to a remote file Vim's native support for
editing URLs is invaluable. <span class="todo">Is this just fluff?</span>

Vim supports the following protocols: 'SCP', 'SFTP', 'RCP', 'HTTP'
(read-only), 'DAV', 'rsync' (read-only), and 'fetch' (read-only). However, it
relies on external programs to do so.  On Linux, most of these programs are
available by default; on Windows, for example, only 'FTP' is normally
available. <span class="todo">Is this still true? Macs?</span> See <tt>:help
netrw-externapp</tt> for more information.

If the protocol requires authentication, you can supply the username as part
of the URL, and then be prompted for the password interactively. This gets
boring fast, however. 

If you're editing files via SSH or SCP consider setting up "passwordless
logins". <span class="todo">Explain this. Sidebar explanation?  Ref:
netrw-ssh-hack</span>

If you're using FTP on Linux, you can store your credentials in
<tt>~/.netrc'</tt>.  <span class="todo">sidebar on dangers of FTP?</span> <span class="todo">Sidebar this
explanation</span> The file is formatted as follows:

\begin{verbatim}
 machine {host name 1}
         login {username}
         password {password}

 machine {host name 2}
\ldots
\end{verbatim}

It should be made read-only for your user: <tt>chmod 600 ~/.netrc</tt>
<span class="todo">Windows explanation?</span>.  Now you can use URLs like
<i>ftp://example.org/README</i>, and it will find your username and password
automatically.

%
