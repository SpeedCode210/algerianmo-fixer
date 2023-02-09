// ==UserScript==
// @name        algerianmo.com RTL fixer
// @namespace   Violentmonkey Scripts
// @include     *algerianmo.com/*
// @downloadURL https://github.com/SpeedCode210/algerianmo-fixer/raw/main/rtl-fix.user.js
// @icon http://www.algerianmo.com/static/images/favicon.ico
// @version     1.0
// @author      Raouf Ould Ali / SpeedCode#0050
// @description 1/25/2023, 5:34:04 PM
// ==/UserScript==

document.getElementsByTagName('head')[0].innerHTML += `
<style>
  * {
    text-align: right;
}
dl, ol, ul {
    list-style-type: none;
    padding: 0;
}
mjx-container {
    overflow: auto clip;
}
.ltr {
    direction: ltr;
    text-align: left;
}
.dropdown-menu {
    text-align: right !important;
}
textarea.form-control {
    height: 220px;
}
.custom-file input {
    position: absolute;
}
.custom-file input + label{
    margin-bottom: 0;
    margin-right: -.25rem;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
}
.math-output {
    background-color: #eee;
    min-height: 75px;
}
.preview-demo {
    position: relative;
}
.preview-demo input {
    position: absolute;
    margin: 5px;
}
/* Begin .solution-card */
.solution-card .card-header,
.comment .card-header {
    background-color: rgb(253, 255, 163);
}
.solution-card .card-body {
    display: flex;
    flex-direction: column;
}
.solution-card img {
    max-width: 100%;
    margin: auto;
}
.solution-card iframe {
    height: 85vh;
}
/* End .solution-card */
.sort-cell {
    cursor: pointer;
    position: relative;
}
.sort-cell::after {
    content: url(../images/arrow-down-up.svg);
    position: absolute;
    margin: 2px 5px 0 0;
}

</style>
`
