%

<span class="label">sec:nav-viewport</span>

<h4>Problem</h4>

You want to scroll through a document in `screenfulls'; not line by line.

<h4>Solution</h4>

\begin{center}
\begin{tabular}{l|p{10em}}
Command & Scroll To                                     \\ \hline
<tt>H</tt>     & Top of the screen. (Mnemonic: <i>H</i>ome).      \\
<tt>L</tt>     & Bottom of the screen. (Mnemonic: <i>L</i>ower).  \\
<tt>M</tt>     & Middle of the screen. (Mnemonic: <i>M</i>iddle). \\
<tt>gg</tt>    & Top of file.                                  \\
<tt>G</tt>     & Bottom of file.                               \\
\end{tabular}
\end{center}

<h4>Discussion</h4>

If you're file is longer than the height of your window, you'll need a way of
scrolling the portion that appears on the screen.

The area of the screen displaying a file is called the `viewport'. As we
scroll down the document using <tt>j</tt>, the viewport updates to hide the line at
the top, and show a new one at the bottom. Scrolling through a long document
this way is inefficient and unhealthy for our fingers. Instead we can scroll
one 'screenfull' at a time, which severely reduces the amount of keypresses
involved.

<span class="todo">Convert diagram to graphic...somehow</span>
<span class="todo">Uncomment diagram -- hidden for UTF-8 test</span>
\begin{comment}
\begin{verbatim}
-------------------------------------------------------------
 .   .   ..   ..   ...   .  .  .. .. ...   . ... ..
.  .  ..    ..  . <tt>g</tt>as is not <tt>g</tt>rass! ..   .  .  .  .
.   . ..    . .  .  . ... ..  ..    .  .  ..
                        
                                            ↑
                                            ↑ <tt><Ctrl>+</tt>  
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░    ↑ <tt>B</tt>ounce
  ░            <tt>H</tt>igh                  ░    ↑
  ░                                    ░       
  ░                                    ░       
  ░^(Hat) wearers <i>end</i> the day with $ ░       
  ░                                    ░       
  ░            <tt>M</tt>iddle                ░       
  ░                                    ░       
  ░                                    ░                 
  ░                                    ░               
  ░                                    ░    ↓     
  ░            <tt>L</tt>ow                   ░    ↓ <tt><Ctrl>+</tt>   
  ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░    ↓ <tt>F</tt>all 
                                            ↓     
                                 
                              
                              
 <tt>G</tt>rass  <tt>G</tt>rass   <tt>G</tt>rass <tt>G</tt>rass   <tt>G</tt>rass        
<tt>G</tt>rass <tt>G</tt>rass <tt>G</tt>rass <tt>G</tt>rass <tt>G</tt>rass <tt>G</tt>rass <tt>G</tt>rass   
-------------------------------------------------------------

\end{verbatim}
\end{comment}

<span class="todo">Mention horizontal scrolling, or leave that for Long
Lines tip?</span>
<span class="todo">Look at <tt>:h scroll</span>.</tt>

%
