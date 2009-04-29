<h3>Navigating Buffers</h3>

<h4>Problem</h4>

You have multiple files open and want to navigate between them.
<span class="todo">Write recipe for using buffers?</span>

<h4>Solution</h4>

<table>
  <tr>
    <th>Command</th>
    <th>Result</th>
  </tr>
  <tr>
    <td><tt>:buffers</tt></td>
    <td rowspan="3">View the list of buffers along with their numbers.</td>
  </tr>
    <td><tt>:ls</tt></td>
  </tr>
  <tr>
    <td><tt>:files</tt></td>
  </tr>
  <tr>
    <td><tt>:buffers</tt></td>
  </tr>
  <tr>
    <td><tt>:buffer <var>N</var></tt></td>
    <td>Open buffer <var>N</var>.</td>
  </tr>
  <tr>
    <td><tt>:bn[ext]</tt></td>
    <td>Go to the next buffer. (Menmonic: <i>b</i>uffer <i>next</i>).</td>
  </tr>
  <tr>
    <td><tt>:bp[revious]</tt></td>
    <td>Go to the previous buffer. (Mnemonic: <i>b</i>uffer
    <i>previous</i>).</td>
  </tr>
  <tr>
    <td><tt>:bf[irst]</tt></td>
    <td>Go to the first buffer.</td>
  </tr>
  <tr>
    <td><tt>:bl[ast]</tt></td>
    <td>Go to the last buffer.</td>
  </tr>
  <tr>
    <td><tt>:ba[ll]</tt>
    <td>Open all the buffers in the buffer list. (Mnemonic: <i>b</i>uffer
      <i>all</i>, or have a <i>ball</i>, go crazy and open them all at once).</td>
  </tr>
</table>

<h4>Discussion</h4>

To quickly navigate between buffers its common to map <tt>:bnext</tt> and/or
<tt>:bprev</tt> to a key. For example <tt>map &lt;F6&gt; :bn&lt;CR&gt;</tt> lets you hit
<kbd>F6</kbd> to cycle through the open buffers.

<span class="todo">If Vim opens a filelist one in each buffer, as I believe,
mention that here. Use of :next, etc.</span>
