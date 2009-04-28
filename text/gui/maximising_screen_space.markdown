### Maximising Screen Space

<h4>Problem</h4>
<span class="todo">Should title be: Maximising Screen Real Estate?</span>

The toolbar, menubar, and other GUI artifacts take up too much of your screen;
you want to hide them.

<h4>Solution</h4>

Modify the <i>guioptions</i> variable. Gvim decides which elements of the
GUI to display based on the value of <i>guioptions</i>. This is a series of
letters, each of which refer to some specfic element. Some examples follow:

<ul>
  <li><i>m</i> - Display a menu bar.</li>
  <li><i>T</i> - Display a toolbar.</li>
  <li><i>r</i> - Always display the right-hand scrollbar.</li>
  <li><i>R</i> - Display the right-hand scrollbar if the window is
split vertically.</li>
  <li><i>l</i> - Always display left-hand scrollbar.</li>
  <li><i>L</i> - Display the left-hand scrollbar if the window is
split vertically.</li>
  <li><i>b</i> - Display the horizontal scrollbar.</li>
</ul>

So, to hide the menu bar, toolbar, and scrollbars you could
use <tt>:set guioptions-=mTrlb</tt>. To display a hidden element use
<i>+=</i> instead, e.g. <tt>:set guioptions+=T</tt>.

<span class="todo">Screenshots: before/after</span>

<h4>Discussion</h4>

If you decide that you want to restore one or more of these elements you can
simply execute <tt>:set guioptions+=m</tt>, for example. This can be
cumbersome, however, as it requires you to remember the significance of each
letter.

The following stanza in your <i>gvimrc</i>\footnote{The configuration file
for Gvim. Its use is explained in recipe~\ref{sec:configuring}} assigns
<tt>&lt;F11&gt;</tt> to toggle the display of extraneous GUI elements:

<span class="todo">Should these variables be in a different scope?</span>

<span class="todo">Display apostrophes correctlty</span>

    function ToggleGUICruft()
      let opts = ['T','m','r','L']
      let sign= &amp;guioptions =~# 'T' ? '-' : '+'
      for opt in opts
        exec('set guioptions'.sign.'='.opt)
      endfor
    endfunction
    map <F11> <Esc>:call ToggleGUICruft()<cr>
	
<span class="todo">Suggest Gnome keyboard shortcuts for
fullscreen</span>
