// ==UserScript==
// @name        algerianmo.com profile link fixer
// @namespace   Violentmonkey Scripts
// @include     http://www.algerianmo.com/*
// @include     http://algerianmo.com/*
// @downloadURL https://github.com/SpeedCode210/algerianmo-fixer/raw/main/script.user.js
// @icon http://www.algerianmo.com/static/images/favicon.ico
// @version     1.2
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
    thisLink.href = thisLink.href.replace(RegExp("(?<=algerianmo\.com\/accounts\/)([0-9]+)"),right_num);
}
if(window.location.href.match(/algerianmo.com\/accounts\/[0-9]/g).length >= 1){
var zNode = document.getElementsByTagName('tbody')[0];
zNode.innerHTML += '<tr><button id="set_profile" class="btn btn-secondary mt-2 mb-2 w-100" type="button">' + 'Set as my profile</button></tr>';
document.getElementById("set_profile").addEventListener ("click", ButtonClickAction, false);
function ButtonClickAction (zEvent) {
    localStorage.setItem('user_id', window.location.href.match(/(?<=algerianmo\.com\/accounts\/)([0-9]+)/g)[0]);
    document.location.reload()
}
}
