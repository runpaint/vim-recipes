/* Derived from http://www.brandspankingnew.net/specials/footnote.html */
window.onload=function()
{
	var noteholder = document.getElementById('footnotes');
	var spans = document.getElementsByTagName("span");
	var notes = 0;
	
	for (i=0;i<spans.length;i++)
	{
		if (spans[i].className == "fn")
		{
			notes++;
			noteholder.innerHTML += "<div class='footnote'><a name='note"+notes+"'></a>" + notes + ". " + spans[i].innerHTML + " <a href='#nlink"+notes+"' title='return to text'>&#8617;</a></div>";
			spans[i].innerHTML = "<sup><a name='nlink"+notes+"' href='#note" + notes + "' title='view footnote' class='fn'>" + notes + "</a></sup>";
      spans[i].style.display = 'inline';
		}
	}
	
}

