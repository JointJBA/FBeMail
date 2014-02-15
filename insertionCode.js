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
	
	console.log(entries);
	return entries;

}
var parent = document.getElementById('jewelContainer');
parent.innerHTML = "<div class='fbJewel' id='fbEmailJewel'> <a class='jewelButton' aria-labelledby='emailsCountWrapper' href='#'> </a> <div id='emailDropDown' style='background-color:#fff;border:1px solid #333;border-bottom:2px solid #293e6a;left:0;overflow-x:hidden; overflow-y: scroll;position:absolute;top:40px;width:330px;z-index:-1; left: -165px; height: auto; max-height: 320px;'> <div style='height: 20px; font-weight: bold; padding-right: 5px; padding-top: 5px'>Email</div> </div> </div>" + parent.innerHTML;
var emails = readXML();
var dd = document.getElementById('emailDropDown');
if(emails.length > 0)
{
dd.innerHTML = dd.innerHTML + "<ul><hr/><li>";
}
for(var i = 0; i < emails.length; i++)
{
dd.innerHTML = dd.innerHTML + "<li class='semail'><div><div style='font-weight: bold'>" + emails[i].name + "</div><div>" + emails[i].title + "</div></div><li><hr/>";
}
if(emails.length > 0)
{
dd.innerHTML = dd.innerHTML + "</li></ul>";
}