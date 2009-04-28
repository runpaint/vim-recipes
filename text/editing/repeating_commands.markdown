### Repeating Commands

#### Problem

You've entered a command in Normal mode and want to repeat it without re-typing
it.

#### Solution

The period <kbd><kbd>.</kbd></kbd> repeats the last command. For example,
<kbd><kbd>dd</kbd></kbd> deletes the current line; <kbd><kbd>dd..</kbd></kbd>
deletes the current line, then deletes the new current line, then deletes the
new current line. In other words, it repeats the command twice.

#### Discussion

The period command helps automating repetitive tasks with the fewest keypresses.
It lets you say <q>do that again</q>, but in only one character. 

If you know you want to execute a command <var>n</var> times, you can prefix it
with the integer <var>n</var>. The above example rewritten in this way is
<kbd><kbd>3dd</kbd></kbd>.

The second approach requires fewer keystrokes so is clearly preferable if you
know in advance how many times you want to repeat a command. However, the period
command lets you make that decision incrementally, after executing the command.

You can combine these approaches by prefixing the period command with an integer
to say <q>do that <var>n</var> times again</q>:
<kbd><kbd><var>n</var>.</kbd></kbd>. Be aware that having done this, if you use
the period command again it will repeat your previous repeitions, i.e.
<kbd><kbd><var>command</var></kbd></kbd>, followed by
<kbd><kbd><var>n</var>.</kbd></kbd>, followed by <kbd><kbd>.</kbd></kbd> will
result in <var>command</var> being executed 2<var>n</var> + 1 times. 
