%

<span class="label">sec:nav-tabs</span>

<h4>Problem</h4>

You want to group your windows into multiple, logical groups.

When you have alot of open windows/buffers it can be tricky to navigate
between them. Often it makes more sense to group them into logical
<i>tabs</i>, so you can switch between them easier, and operate on them as a
group.

For example, if you were using Vim to edit a website, you may have your CSS
files open in one tab, the HTML files in another, and a HTML reference guide
in the third. 

<h4>Solution</h4>

Use <i>tabs</i>.

<span class="todo">When multiple commands have the same description, use a split cell to
display them</span>

<span class="todo">Fix wrapping for multirow columns</span>

\begin{center}
\begin{tabular}{l|p{10em}}
\multicolumn{1}{c|}{\textbf{Command}} & \multicolumn{1}{c}{\textbf{Action}} \\ \hline
<tt>:tabedit [file]</tt> & Open a new tab. If the optional file is
supplied, that file is opened in the new tab. \\ \hline

<tt>:tabclose</tt> & Close the current tab.          \\ \hline

<tt>:tabnext [n]</tt> &  \multirow{2}{8em}{Go to next tab, or the
\textit{n\textsuperscript{th}}} \\ 
<tt>[n]gt</tt>        & \\ \hline

<tt>:tabs</tt> & Show a list of the open tabs. \\ \hline

<tt>:tabprevious [n]</tt> & \multirow{2}{8em}{Go to previous tab, or the
\textit{n\textsuperscript{th}}.} \\ 
<tt>[n]gT</tt> & \\ \hline 

\texttt{:tabdo \{cmd\}} & Executes <i>cmd</i> in each open tab, aborting on the
first error. \\ \hline
\end{tabular}
\end{center}

<h4>Discussion</h4>
<span class="todo">Check we want trademark, as opposed to copyright or registered for</span>
You can use Vim's tabs like those in Firefox\texttrademark and
Opera\texttrademark, <span class="todo">Expand examples
with popular apps</span> by opening one file in each tab, then switching between
them. Vim enables you to extend this concept, however, by allowing multiple
files to be opened in the same tab.

When you open a tab, a <i>tabline</i> appears along the top of the screen, which
lists the open tabs. <span class="todo">Ins screenshot. Mention how you modify this?</span>

You can either cycle through open tabs using <tt>gt</tt>, or go directly to a
specific tab by prefixing <tt>gt</tt> with its number. Tabs are numbered starting
with 1, so to switch to the 3rd tab on the tabline, say, you'd use <tt>3gt</tt>. If
you have a lot of tabs, their numbers may not be obvious. In this case, use
<tt>:tabs</tt> to find them.

The power of tabs comes from executing commands on the windows they contain as
a logical group. Continuing the above example, this would let you perform a
search and replace\footnote{Recipe~\ref{sec:search-replace} explains how to
search and replace} on all HTML files. For example, if you
were in the HTML tab, you could say \\\verb":windo s/\<foo\>/bar/g", and all of your
HTML files would have their `foo's replaced with `bar's.

%
