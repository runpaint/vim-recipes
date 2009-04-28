### Displaying Line Numbers

<h4>Problem</h4>

You want to see each line’s number alongside it. For example, if you’re writing a program, error messages frequently reference line numbers.

<h4>Solution</h4>

Use <kbd>:set number</kbd> to enable line numbering. If you're using a small
monitor, you may want to disable them: <kbd>:set nonumber</kbd>.

<h4>Discussion</h4>

Even if you're not programming, line numbers can still be useful. For
example, if you’re collaborating on a file with other people, they may mention
specific lines, which you can then jump to with <kbd>:<var>number</var></kbd>.
If you’re wrapping long lines <span class='fn'>Recipe 4.7</span>, the line number can be used to differentiate the beginning of the line from the point at which it’s been wrapped.

By default the number column is at least 4 characters wide, regardless of how
many lines the file has. To change this minimumn width use <kbd>:set
  numberwidth=<var>width</var></kbd>.

The line numbers are only displayed when you’re viewing the file with Vim;
the actual file isn’t modified. If you'd like it to be, and you have the
<tt>cat</tt> command on your system, you can execute <kbd>:%!cat -n %</kbd>.
This filters the entire file through <tt>cat</tt> and prepends the number to
each line.

Lastly, if you’d like to see the line numbers when you print the file without
permenantly changing its contents: <kbd>:set printoptions=number:y</kbd>.
