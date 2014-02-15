//xml reader that returns javascript objects

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

readXML();
