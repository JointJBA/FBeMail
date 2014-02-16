function entry(title,summary,link,modified,issued,id,name,email) {

	this.title = title;
	this.summary = summary;
	this.modified = modified;
	this.issued = issued;
	this.id = id;
	this.name = name;
	this.email = email;

}

function readXML() {

	xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET","https://mail.google.com/mail/feed/atom",false);
	xmlhttp.send();
	xmlDoc=xmlhttp.responseXML;
	//xmlText=xmlhttp.responseText;

	var entries = new Array();
	var ent = xmlDoc.getElementsByTagName("entry");
	
	for (var i=0; i<ent.length; i++) {
		var ne = new entry();
		ne.title = ent[i].getElementsByTagName("title")[0].innerHTML;
		ne.summary = ent[i].getElementsByTagName("summary")[0].innerHTML;
		ne.modified = ent[i].getElementsByTagName("modified")[0].innerHTML;
		ne.issued = ent[i].getElementsByTagName("issued")[0].innerHTML;
		ne.id = ent[i].getElementsByTagName("id")[0].innerHTML;
		ne.name = ent[i].getElementsByTagName("name")[0].innerHTML;
		ne.email = ent[i].getElementsByTagName("email")[0].innerHTML;
		entries.push(ne);
	}
	return entries;

}



var parent = document.getElementById('jewelContainer');
parent.innerHTML = "<div class='fbJewel' id='fbEmailJewel'> <a class='jewelButton' id='emailButton' aria-labelledby='emailsCountWrapper' href='#'> </a> <div style='background-color:#fff;border:1px solid #333;border-bottom:2px solid #293e6a;left:0;position:absolute;top:40px;width:330px;z-index:-1; left: -1000000px; height: auto; max-height: 370px;' id='emailContainer'> <div style='height: 20px; width: auto; font-weight: bold; padding-left: 5px; padding-top: 5px'>Email Inbox</div> <div id='emailDropDown' style='border-bottom:1px solid #293e6a;border-top:1px solid #293e6a;background-color:#fff;overflow-x:hidden; overflow-y: auto;width:330px; height: auto; max-height: 320px;'> </div> <div style='height: 20px; width: auto; font-weight: bold; padding-left: 5px; padding-top: 5px'><center><a href='https://mail.google.com/mail/u/0/#inbox' target='_blank'>See All</a><center> </div> </div> </div>" + parent.innerHTML;
var dd = document.getElementById('emailDropDown'), ec = document.getElementById('emailContainer');
setInterval(function()
{
var emails = readXML();
if(emails.length > 0)
{
dd.innerHTML = "<ul><hr/><li>";
}
for(var i = 0; i < emails.length; i++)
{
dd.innerHTML = dd.innerHTML + "<li class='semail'><div><div style='font-weight: bold'>" + emails[i].name + "</div><div style='overflow: hidden; word-wrap: break-word'>" + emails[i].title + "</div></div><li><hr/>";
}
if(emails.length > 0)
{
dd.innerHTML = dd.innerHTML + "</li></ul>";
}
else
{
dd.innerHTML = "<ul><hr/><li><li class='semail'><div><div style='font-weight: bold'></div><div>No New Messages</div></div><li><hr/></li></ul>";
}
}, 5000);
var dcase = true;


function toggleDD() {
  
  if(!dcase)
  {
  ec.style.left = "-10000px";
  }
  else
  {
  ec.style.left = "-165px";
  }
  dcase = !dcase;
}
document.getElementById('emailButton').onclick = function()
{
toggleDD();
}