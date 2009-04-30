<h3>Navigating the Viewport</h3>

<h4>Problem</h4>

You want to scroll through a document in "screenfulls"; not line by line.

<h4>Solution</h4>

<table>
  <tr><th>Command</th>    <th>Scroll To</th></tr>
  <tr><td><tt>H</tt></td> <td>Top of the screen. (Mnemonic:
<i>H</i>ome).</td></tr>
  <tr><td><tt>L</tt></td> <td>Bottom of the screen. (Mnemonic:
<i>L</i>ower).</td></tr>
  <tr><td><tt>M</tt></td> <td>Middle of the screen. (Mnemonic:
<i>M</i>iddle).</td></tr>
  <tr><td><tt>gg</tt></td> <td>Top of file.</td></tr>
  <tr><td><tt>G</tt></td>  <td>Bottom of file.</td></tr>
</table>

<h4>Discussion</h4>

If you're file is longer than the height of your window, you'll need a way of
scrolling the portion that appears on the screen.

The area of the screen displaying a file is called the <i>viewport</i>. As we
scroll down the document using <tt>j</tt>, the viewport updates to hide the line at
the top, and show a new one at the bottom. Scrolling through a long document
this way is inefficient and unhealthy for our fingers. Instead we can scroll
one "screenfull" at a time, which severely reduces the amount of keypresses
involved.

<span class="todo">Convert diagram to graphic...somehow</span>
<pre>
-------------------------------------------------------------
 .   .   ..   ..   ...   .  .  .. .. ...   . ... ..
.  .  ..    ..  . <tt>g</tt>as is not <tt>g</tt>rass! ..   .  .  .  .
.   . ..    . .  .  . ... ..  ..    .  .  ..
                        
                                            ↑
                                            ↑ <tt>&lt;Ctrl&gt;+</tt>  
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░    ↑ <tt>B</tt>ounce
  ░            <tt>H</tt>igh           ░    ↑
  ░                                    ░       
  ░                                    ░       
  ░^(Hat) wearers <i>end</i> the day with $ ░       
  ░                                    ░       
  ░            <tt>M</tt>iddle         ░       
  ░                                    ░       
  ░                                    ░                 
  ░                                    ░               
  ░                                    ░    ↓     
  ░            <tt>L</tt>ow            ░    ↓ <tt>&lt;Ctrl&gt;+</tt>   
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░    ↓ <tt>F</tt>all 
                                            ↓     
                                 
                              
                              
 <tt>G</tt>rass  <tt>G</tt>rass   <tt>G</tt>rass <tt>G</tt>rass   <tt>G</tt>rass        
<tt>G</tt>rass <tt>G</tt>rass <tt>G</tt>rass <tt>G</tt>rass <tt>G</tt>rass <tt>G</tt>rass <tt>G</tt>rass   
-------------------------------------------------------------
</pre>

<span class="todo">Mention horizontal scrolling, or leave that for Long
Lines tip?</span>
<span class="todo">Look at <tt>:h scroll</tt>.</span>
