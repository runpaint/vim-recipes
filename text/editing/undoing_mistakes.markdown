### Undoing Mistakes

<h4>Problem</h4>

You've made a mistake while editing and you'd like to revert it.  Or, worse,
you've made a mistake while reverting a mistake, and you'd like to revert
that.

For example, you've just deleted the paragraphs containing, subject to peer
review, the cure for cancer. You'd kinda' like to retrieve it, and pretend the
whole situation had never occurred.

<h4>Solution</h4>

Use the 'undo' feature'. Hit <tt>u</tt> in Normal mode or <tt>:u</tt> in
Command mode. You can undo all recent changes on the current line with
<tt>U</tt>. To undo multiple times either repeat the command or prefix it with
a digit indicating the number of times. For example, to undo the previous
change and the one before that: <tt>uu</tt>.

<span class="todo">Sidebar: "In the Vim way, "uu" undoes two changes.  In
the Vi-compatible way, "uu" does nothing (undoes an undo)."</span>

To redo a change that was undone use <tt>&lt;Ctrl&gt;+R</tt> or <tt>:redo</tt>.

You can also jump backwards and forwards through your edits by time. To return
to how your file looked 1 hour ago use <tt>:earlier 1h</tt>, then travel
forward 20 minutes with <tt>:later 20m</tt>. <span class="todo">Footnote
clarifying that this won't type your document for you</span>

<h4>Discussion</h4>

The undo/redo behaviour described above should be familiar to most users as it
mirrors that of many other applications. Vim, however, extends this concept
into the idea of 'undo branches'.

Imagine you opened a new file and entered 'elephant'. You then entered 'calf'
on a new line and hit <tt>u</tt>. <span class="todo">Pendant: If you did this
fast they'd both be grouped as the same change; how to make this
clearer</span> This undid the addition of 'calf' so now your file just
contains the word 'elephant'. Next you entered 'moose'. If you hit <tt>u</tt>
again you'd undo 'moose' and get back to 'elephant'.  No matter how many times
you do this you'd never get the 'calf' back (which is unacceptable; elephant
calves are particularly photogenic) because you made an edit after undoing (by
adding 'moose'). 

<span class="todo">Image of elephant calf</span>

Undo branches to the rescue. Hit <tt>g-</tt> and your file will now contain
'elephant' then 'calf'. Here are the events represented diagramatically:

<img src="undo-branches.png"/>

Vim implicitly created an undo branch each time you hit <tt>u</tt>. The branch
represents the state of the file before you undid. <tt>g-</tt> (and <tt>g+</tt> to move
forwards) moves between these branches. 
