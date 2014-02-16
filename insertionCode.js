function entry(title, summary, link, modified, issued, id, name, email, link) {

    this.title = title;
    this.summary = summary;
    this.modified = modified;
    this.issued = issued;
    this.id = id;
    this.name = name;
    this.email = email;
    this.link = link;

}

function readXML() {

    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "https://mail.google.com/mail/feed/atom", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML;
    //xmlText=xmlhttp.responseText;

    var entries = new Array();
    var ent = xmlDoc.getElementsByTagName("entry");

    for (var i = 0; i < ent.length; i++) {
        var ne = new entry();
        ne.title = ent[i].getElementsByTagName("title")[0].innerHTML;
        ne.summary = ent[i].getElementsByTagName("summary")[0].innerHTML;
        ne.modified = ent[i].getElementsByTagName("modified")[0].innerHTML;
        ne.issued = ent[i].getElementsByTagName("issued")[0].innerHTML;
        ne.id = ent[i].getElementsByTagName("id")[0].innerHTML;
        ne.name = ent[i].getElementsByTagName("name")[0].innerHTML;
        ne.email = ent[i].getElementsByTagName("email")[0].innerHTML;
        ne.link = ent[i].getElementsByTagName("link")[0].getAttribute("href");
        entries.push(ne);
    }
    return entries;

}

function random(min, max) {
    return parseInt((Math.random() * (max - min)) + min);
}

var parent = document.getElementById('jewelContainer');
parent.innerHTML = "<div class='fbJewel' id='fbEmailJewel'> <a class='jewelButton' id='emailButton' aria-labelledby='emailsCountWrapper' href='#'> </a><div style='background-color: red; height: 13px; width: auto; min-width: 11px; position: absolute; left: -1000000px; bottom: 18px; text-align: center; color: white' id='boxNumber'></div> <div style='background-color:#fff;border:1px solid #333;border-bottom:2px solid #293e6a;left:0;position:absolute;top:40px;width:330px;z-index:-1; left: -1000000px; height: auto; max-height: 370px;' id='emailContainer'> <div style='height: 20px; width: auto; font-weight: bold; padding-left: 5px; padding-top: 5px'>Email Inbox</div> <div id='emailDropDown' style='border-bottom:1px solid #293e6a;border-top:1px solid #293e6a;background-color:#fff;overflow-x:hidden; overflow-y: auto;width:330px; height: auto; max-height: 320px;'> </div> <div style='height: 20px; width: auto; font-weight: bold; padding-left: 5px; padding-top: 5px'><center><a href='https://mail.google.com/mail/u/0/#inbox' target='_blank'>See All</a><center> </div> </div> </div>" + parent.innerHTML;
var dd = document.getElementById('emailDropDown'), ec = document.getElementById('emailContainer'), nbox = document.getElementById('boxNumber');
var eb = document.getElementById('emailButton');
function al() {
    var emails = readXML();
    if (emails.length > 0) {
        dd.innerHTML = "<ul><hr/><li>";
    }
    for (var i = 0; i < emails.length; i++) {
        dd.innerHTML = dd.innerHTML + "<li class='semail'><div style='height: 40px; width: 40px; float: left; background-color: rgb(" + random(100, 200) + "," + random(100, 200) + "," + random(100, 200) + "); margin: 7.5px; font-size: 30px; text-align: center; color: white'>" + emails[i].name.substring(0, 1).toUpperCase() + "</div><div style='float: left; width: 250px; height: 60px; overflow: hidden'><div style='font-weight: bolder'><a href='" + emails[i].link + "' target='_blank'>" + emails[i].name + "</a></div><div style='overflow: hidden;'>" + emails[i].title + "</div><div style='overflow: hidden; color: grey'>" + emails[i].summary + "</div></div><li><hr/>";
    }
    if (emails.length > 0) {
        dd.innerHTML = dd.innerHTML + "</li></ul>";
        nbox.style.left = "20px";
        nbox.innerHTML = emails.length.toString();
    }
    else {
        dd.innerHTML = "<ul><hr/><li><li class='semail'><div><div style='font-weight: bold'></div><div>No New Messages</div></div><li><hr/></li></ul>";
        nbox.style.left = "-100000px";
    }
}
al();
shit = setInterval(al, 30000);
var dcase = true;

function toggleDD() {
    if (!dcase) {
        ec.style.left = "-10000px";
        eb.style.backgroundImage = 'url(http://s30.postimg.org/9ifow06jx/insertion_Icon.png)';
    }
    else {
        ec.style.left = "-165px";
        eb.style.backgroundImage = 'url(http://s30.postimg.org/6pmhbz67h/insertion_Icon2.png)';
    }
    dcase = !dcase;
}
document.getElementById('emailButton').onclick = function () {
    toggleDD();
}