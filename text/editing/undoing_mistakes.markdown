### Undoing Mistakes

<span class="label">sec:undo</span>

<h4>Problem</h4>

You've made a mistake while editing and you'd like to revert it.  Or, worse,
you've made a mistake while reverting a mistake, and you'd like to revert
that.

For example, you've just deleted the paragraphs containing, subject to peer
review, the cure for cancer. You'd kinda' like to retrieve it, and pretend the
whole situation had never occurred.

<h4>Solution</h4>

Use the 'undo' feature'. Hit <tt>u</tt> in Normal mode or <tt>:u</tt> in Command mode. You
can undo all recent changes on the current line with <tt>U</tt>. To undo multiple
times either repeat the command or prefix it with a digit indicating the
number of times. For example, to undo the previous change and the one before
that: <tt>uu</tt>.

<span class="todo">Sidebar: "In the Vim way, "uu" undoes two changes.  In
the Vi-compatible way, "uu" does nothing (undoes an undo)."</span>

To redo a change that was undone use <tt><Ctrl>+R</tt> or <tt>:redo</tt>.

You can also jump backwards and forwards through your edits by time. To return
to how your file looked 1 hour ago use <tt>:earlier 1h</tt>, then travel forward 20
minutes with <tt>:later 20m</tt>. <span class="todo">Footnote clarifying that this won't type your
document for you</span>

<h4>Discussion</h4>

The undo/redo behaviour described above should be familiar to most users as it
mirrors that of many other applications. Vim, however, extends this concept
into the idea of 'undo branches'.

Imagine you opened a new file and entered 'elephant'. You then entered 'calf'
on a new line and hit <tt>u</tt>. <span class="todo">Pendant: If you did this fast they'd both be
grouped as the same change; how to make this clearer</span> This undid the addition
of 'calf' so now your file just contains the word 'elephant'. Next you entered
'moose'. If you hit <tt>u</tt> again you'd undo 'moose' and get back to 'elephant'.
No matter how many times you do this you'd never get the 'calf' back (which is
unacceptable; elephant calves are particularly photogenic) because you made an
edit after undoing (by adding 'moose'). 

<span class="todo">Image of elephant calf</span>

Undo branches to the rescue. Hit <tt>g-</tt> and your file will now contain
'elephant' then 'calf'. Here are the events represented diagramatically:

<span class="todo">Diagram this</span>

\begin{figure}[htb]
\centering
\caption{Undo branches}
\includegraphics{images/undo-branches.pdf}
%\begin{pdfpic}
%%\vspace{0.5cm}
%%\small
%%\psframebox[linearc=0,cornersize=absolute,framesep=0pt]{%
%  \psset{shadowcolor=black!70,blur=true}%
%  \begin{psmatrix}[rowsep=0.5,colsep=0.5]
%    \psframebox[shadow=true]{\textcolor{white}{~~~~~~~~}} \\
%    \psframebox[shadow=true]{elephant} &  \psovalbox[shadow=true]{<tt>u}</tt>\\
%    \psframebox[shadow=true]{\begin{tabular}{c}elephant\\moose\end{tabular}} &
%\psframebox[shadow=true]{\begin{tabular}{c}elephant\\calf\end{tabular}} \\
%    \psovalbox[shadow=true]{<tt>g-}</tt>    \\ 
%    % Links
%    \ncline{->}{1,1}{2,1}<{\textbf{1}}
%    \ncline{->}{3,2}{2,2}\Aput{\textbf{3}}
%    \ncline{->}{2,2}{2,1}
%    \ncline{->}{2,1}{3,2}<{\textbf{2}}
%    \ncline{->}{2,1}{3,1}\Bput{\textbf{4}}
%    \ncline{<-}{4,1}{3,1}\Aput{\textbf{5}}
%    \ncline{->}{4,1}{3,2}
%    %\ncline{->}{2,1}{3,2}<{2}
%    %\ncline{->}{3,2}{3,1}<{3}
%    %\ncline{->}{3,1}{2,1}
%    %\ncline{->}{2,1}{4,1}<{4}
%     %\ncline{->}{3,1}{4,1}<{\textcolor{red}{No}}
%    %\ncline{->}{4,1}{6,1}
%    %\ncline{->}{6,1}{7,1}
%    %\ncline{->}{3,1}{3,2}^{\textcolor{red}{Yes}}
%    %\ncline{->}{3,2}{3,3}
%    %\ncbar[angleA=-90,armB=0,nodesepB=0.25]{->}{2,1}{4,1}
%  \end{psmatrix}%
%%}
%\end{pdfpic}
\end{figure}

\begin{verbatim}
elephant                
           calf <u>  --    > New undo branch: 1
          <-----------|    
           moose <u> -|    > New undo branch: 2
          <------------  
<g-> --->  calf            > Reverts to branch 1  
\end{verbatim}

%\includegraphics[scale=0.5]{undo-branches.png}
Vim implicitly created an undo branch each time you hit <tt>u</tt>. The branch
represents the state of the file before you undid. <tt>g-</tt> (and <tt>g+</tt> to move
forwards) moves between these branches. 

%
