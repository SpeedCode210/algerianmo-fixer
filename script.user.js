// ==UserScript==
// @name        algerianmo.com profile link fixer
// @namespace   Violentmonkey Scripts
// @match       http://www.algerianmo.com/*
// @version     1.0
// @author      Raouf Ould Ali / SpeedCode#0050
// @description 1/25/2023, 5:34:04 PM
// ==/UserScript==
if (!localStorage.getItem('user_id'))
  localStorage["user_id"] = "729";
var right_num = localStorage.getItem('user_id');
var links,thisLink;
links = document.evaluate("//a[@href]",document,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null);
for (var i=0;i<links.snapshotLength;i++) {
  var thisLink = links.snapshotItem(i);
  if(thisLink.textContent.includes("إنجازاتي"))
    thisLink.href = thisLink.href.replace(RegExp("(?<=http:\/\/www\.algerianmo\.com\/accounts\/)([0-9]+)"),right_num);
}
if(window.location.href.includes("http://www.algerianmo.com/accounts/")){
var zNode = document.createElement ('div');
zNode.innerHTML = '<button id="myButton" type="button">' + 'Set as my profile</button>';
zNode.setAttribute ('id', 'myContainer');
document.body.appendChild (zNode);
document.getElementById ("myButton").addEventListener ("click", ButtonClickAction, false);
function ButtonClickAction (zEvent) {
    localStorage.setItem('user_id', window.location.href.match(/(?<=http:\/\/www\.algerianmo\.com\/accounts\/)([0-9]+)/g)[0]);
    document.location.reload()
}
GM_addStyle ( `
    #myContainer {
        position:               absolute;
        top:                    0;
        left:                   0;
        font-size:              20px;
        background:             orange;
        border:                 3px outset black;
        margin:                 5px;
        opacity:                0.9;
        z-index:                1100;
        padding:                5px 20px;
    }
    #myButton {
        cursor:                 pointer;
        background:             red;
    }
    #myContainer p {
        color:                  red;
        background:             white;
    }
` );
}
