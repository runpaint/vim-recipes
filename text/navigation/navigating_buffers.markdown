%

<span class="label">sec:nav-buffer</span>

<h4>Problem</h4>

You have multiple files open and want to navigate between them.
<span class="todo">Write recipe for using buffers?</span>

<h4>Solution</h4>

\begin{center}
\begin{tabular}{l|p{0.65\textwidth}}
\multicolumn{1}{c|}{\textbf{Command}} & \multicolumn{1}{c}{\textbf{Result}} \\
\hline
%<tt>:buffers</tt> / <tt>:ls</tt> / <tt>:files</tt> & View the list of buffers along with
%their numbers.                                                       \\
<tt>:buffers</tt>                    &  \multirow{3}{0.65\textwidth{}}{View the list of
buffers along with their numbers.} \\         
<tt>:ls</tt>                         & \\
<tt>:files</tt>                      & \\
<tt>:buffer N</tt>                   & Open buffer <i>N</i>.                       \\ 
<tt>:bn[ext]</tt>                    & Go to the next buffer. (Menmonic: 
<i>b</i>uffer <i>next</i>).                                                \\
<tt>:bp[revious]</tt>                & Go to the previous buffer. 
(Mnemonic: <i>b</i>uffer <i>previous</i>).                                 \\  
<tt>:bfirst</tt>                     & Go to the first buffer.              \\
<tt>:blast</tt>                      & Go to the last buffer.               \\  
<tt>:ball</tt>                       & Open all the buffers in the buffer 
list. (Mnemonic: <i>b</i>uffer <i>all</i>, or have a <i>ball</i>, go crazy and
 open them all at once).                                             \\
\end{tabular}
\end{center}

<h4>Discussion</h4>

To quickly navigate between buffers its common to map <tt>:bnext</tt> and/or
<tt>:bprev</tt> to a key. For example <tt>map <F6> :bn<CR></tt> lets you hit
<tt>F6</tt> to cycle through the open buffers.

<span class="todo">If Vim opens a filelist one in each buffer, as I believe, mention that
here. Use of :next, etc.</span>

%
