//XML reader that returns javascript "entry" objects for gmail input

function entry(title,summary,link,modified,issued,id,name,email) {
	
	this.email = email;
	this.name = name;
	this.id = id;
	this.issued = issued;
	this.modified = modified;
	this.link = link;
	this.summary = summary;
	this.title = title;

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
		ne.link = ent[i].getElementsByTagName("link")[0].getAttribute("href");
		ne.modified = ent[i].getElementsByTagName("modified")[0].innerHTML;
		ne.issued = ent[i].getElementsByTagName("issued")[0].innerHTML;
		ne.id = ent[i].getElementsByTagName("id")[0].innerHTML;
		ne.name = ent[i].getElementsByTagName("name")[0].innerHTML;
		ne.email = ent[i].getElementsByTagName("email")[0].innerHTML;
		entries.push(ne);
	}

	return entries;

}
readXML();
