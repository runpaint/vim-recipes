%

<span class="label">sec:foreign-char</span>

<h4>Problem</h4>

You want to type characters which don't exist on your keyboard.

For example, you want to type some words in another language, so need to
insert accented characters. Or you want to type a symbol such as ±. 

<h4>Solution</h4>

If you haven't already, set up Vim to use UTF-8 <span class="todo">link recipe</span>. It makes
this process far easier.

To insert an accented character you press <tt><Ctrl>-K</tt>, the unadorned character,
then another character indicating the accent type.  This method can also be
used to produce translations of characters in a given script. <span class="todo">Explain
better; check terminology</span>

For example, to insert an e acute (the last letter in <i>café</i>) you hold down
<tt><Ctrl>-K</tt>, type <i>e</i>, then type an apostrophe
(<i>'</i>). 

The following table shows the different types of characters you can produce:

<span class="todo">Explain the table better</span>
<span class="todo">Use different fonts for troublesome rows?</span>
\begin{tabular}{c|l}
Character &  Meaning \\ \hline 
!         &  Grave   \\  
'         &  Acute accent  \\  
>         &  Circumflex accent \\    
?         &  Tilde  \\ 
-         &  Macron  \\ 
(         &  Breve  \\ 
.         &  Dot Above \\  
:         &  Diaeresis \\  
,         &  Cedilla \\    
\_        &  Underline  \\    
/         & Stroke \\ 
"         & Double acute (Hungarumlaut)  \\  
;         & Ogonek \\ 
<         & Caron \\ 
0         & Ring above  \\ 
2         & Hook  \\ 
9         & Horn  \\  
=         & Cyrillic \\  
*         & Greek \\   
\%        & Greek/Cyrillic special  \\   
+         & smalls: Arabic, caps: Hebrew \\
3         & Some Latin/Greek/Cyrillic  \\
4         & Bopomofo \\
5         & Hiragana  \\
6         & Katakana  \\
\end{tabular}
\begin{comment}
\begin{tabular}{c|l|c}
Character &  Meaning & Example [a,e,i,o,u] \\ \hline 
!         &  Grave   & à,è,ì,ò,ù           \\  
'         &  Acute accent &    á,é,í,ó,ú  \\  
>         &  Circumflex accent &  â,ê,î,ô,û \\    
?         &  Tilde   & ã,ẽ,ĩ,õ,ũ  \\ 
-         &  Macron &  ā,ē,ī,ō,ū  \\ 
(         &  Breve &  ă,ĕ,ĭ,ŏ,ŭ  \\ 
.         &  Dot Above &   ?,ė,ı,?,? \\  
:         &  Diaeresis &   ä,ë,ï,ö,ü \\  
,         &  Cedilla &  ç,ş,ţ [c,s,t]] \\    
\_        &  Underline &  ?,?,?,? \\    
/         & Stroke &     ?,?,?,ø,?  \\ 
"         & Double acute (Hungarumlaut) &   ä,ë,,ő,ű \\  
;         & Ogonek &     ą,ę,į,ǫ,ų  \\ 
<         & Caron &   ǎ,ě,ǐ,ǒ,ǔ  \\ 
0         & Ring above &  ۰,?,?,◎,ů  \\ 
2         & Hook  &  ả,ẻ,ỉ,ỏ,ủ  \\ 
9         & Horn  &  ۹,?,?,ơ,ư \\  
=         & Cyrillic &   а,е,и,о,у \\  
*         & Greek &  α,ε,ι,ο,υ \\   
\%        & Greek/Cyrillic special &   ά,έ,ί,ό,ύ \\   
+         & smalls: Arabic, caps: Hebrew & ا,ع,غ,?,? \\
3         & Some Latin/Greek/Cyrillic & ǣ,?,ΐ,ѫ,ΰ \\
4         & Bopomofo &        ㄚ,ㄜ,ㄧ,ㄨ\\
5         & Hiragana &  あ,え,い,お,う \\
6         & Katakana & ァ,ェ,ィ,ォ,ゥ \\
\end{tabular}
\end{comment}
<h4>Discussion</h4>

This method of input is most suitable for occassionally typing unusual
characters. <span class="todo">Link to recipe more suitable for writing in different
languages, or simply expand.</span>

Vim refers to non-standard characters as <i>digraphs</i>. <span class="todo">Make less
condescending</span> A list of digraphs available on your system can be obtained
with the command <tt>:digraphs</tt>. The output may appear chaotic, but that's mainly
because its so dense. It lists, in columns, the character's internal name, the
literal character, and the character code in decimal.

You can also insert characters using their character code. If you're one of
the slackers who haven't memorised the Unicode specification yet, you can use
the <tt>:digraphs</tt> command, or any other reference, to lookup the code. Hit
<tt><Ctrl>-V</tt>, then type the code in either hexadecimal or decimal. Continuing the
above example of prodcing <i>é</i>, you could enter either <tt><Ctrl>-V xe9</tt> or
<tt><Ctrl>-V 233</tt>. 

The internal name <tt>:digraphs</tt> lists corresponds with the shortcut table above.
That is to say, the internal name for <i>é</i> is <i>e'</i>. Thus, we can generalise the
<tt><Ctrl>-K</tt> approach for any character we know the name of. For example, to produce
the <i>±</i> sign you hit <tt><Ctrl>-K-+\_</tt>.%
%
%
