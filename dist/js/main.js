!function e(t,n,r){function a(o,s){if(!n[o]){if(!t[o]){var l="function"==typeof require&&require;if(!s&&l)return l(o,!0);if(i)return i(o,!0);var c=new Error("Cannot find module '"+o+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[o]={exports:{}};t[o][0].call(u.exports,function(e){var n=t[o][1][e];return a(n||e)},u,u.exports,e,t,n,r)}return n[o].exports}for(var i="function"==typeof require&&require,o=0;o<r.length;o++)a(r[o]);return a}({1:[function(e,t,n){"use strict";function r(e){return Array.isArray(e)?e:Array.from(e)}function a(){document.getElementById("loading").style.height="100%"}function i(){document.getElementById("loading").style.height="0%"}function o(){var e=document.createElement("span");return e.innerHTML='<i class="fa fa-pencil color-icon" aria-hidden="true"></i>',e.setAttribute("class","pushRight"),e.id="edit",e}function s(){var e=document.createElement("span");return e.innerHTML='<i class="fa fa-trash color-icon" aria-hidden="true"></i>',e.setAttribute("class","pushRight"),e.id="goAway",e}function l(){var e=document.createElement("span");return e.setAttribute("contenteditable","false"),e.id="editName",e.setAttribute("class","editli"),e}function c(){var e=s(),t=o(),n=document.getElementById("bind").value,r=l(),a=y(n);return r.appendChild(a),[e,t,n,r,a]}function u(e,t,n){var r=document.createElement("LI");return r.appendChild(e),r.className="player",r.appendChild(t),r.appendChild(n),document.getElementById("load").appendChild(r),[r]}function d(){var e=document.getElementById("errfn");e.style.opacity="1",e.innerHTML="this is invalid name";var t=document.getElementById("bind");t.setAttribute("class","warningBorder"),e.setAttribute("class","err"),document.addEventListener("keypress",function(n){13!==n.keyCode&&(e.style.opacity="0",t.setAttribute("class","theplayer pre"))})}function m(e){if(""===document.getElementById("bind").value)return d(),!1;var t=c(),n=A(t,5),r=n[0],a=n[1],i=(n[2],n[3]),o=(n[4],u(r,a,i));document.getElementById("bind").value="",i.addEventListener("keypress",function(e){13==e.keyCode&&(e.preventDefault(),i.setAttribute("contenteditable","false"),i.setAttribute("autofocus","true"),i.setAttribute("class",""))}),a.addEventListener("click",function(e){e.currentTarget.classList.contains("toggled")?(e.currentTarget.classList.remove("toggled"),i.setAttribute("class",""),i.contenteditable=!1,i.setAttribute("contenteditable","false")):(e.currentTarget.classList.add("toggled"),i.setAttribute("class","editable"),i.setAttribute("contenteditable","true"),document.getElementById("editName").focus())}),document.querySelector("#editName").classList.toggle("hidden-phone"),r.addEventListener("click",function(){this.parentNode.remove(o)})}function y(e){var t=e.split(" ");return 2!=t.length?document.createTextNode(e):(t[1]=h(t[1]),t.splice(1,0,b()),document.createTextNode(t.join(" ")))}function f(e){if(3===e.nodeType)return e.data;var t="";if(e=e.firstChild)do{t+=f(e)}while(e=e.nextSibling);return t}function g(e){for(var t=e.length;t;t--){var n=Math.floor(Math.random()*t),r=[e[n],e[t-1]];e[t-1]=r[0],e[n]=r[1]}}function h(e){return e.charAt(0).toUpperCase()+e.slice(1)}function p(e,t){return Math.floor(Math.random()*(t-e))+e}function b(){var e=["Angry","Spunky","Meaty","Meat","Crabby","Small","Poop","Pony","Baby","Chocolate","Ape","Fun","Wobble","Angry","Greedy","Naked","Zippy","Home","Flabby","Drunken","Snuggle","Crushing","Thigh","Twisted","Loose","Fuzzy","Double","Leggy","Fried","Triple","Hump","Tenacious"],t=["Donkey","Patties","Monkey","Crab","Dawg","Cat","Whoppers","Cow","Pony","Poop","Whale","Muscles","Ankles","Bubbles","Hammer","Chick","Leg","Wheels","Pants","Lube","Timbers","Fuzz","Chin","Belly"];return'"'+h(e[p(0,e.length)])+" "+h(t[p(0,t.length)]+'"')}function v(){var e=["adorable","beautiful","clean","drab","elegant","fancy","glamorous","handsome","long","magnificent","old-fashioned","plain","quaint","sparkling","ugliest","unsightly","angry","bewildered","clumsy","defeated","embarrassed","fierce","grumpy","helpless","itchy","jealous","lazy","mysterious","nervous","obnoxious","panicky","repulsive","scary","thoughtless","uptight","worried"],t=["women","men","children","teeth","feet","people","leaves","mice","geese","halves","knives","wives","lives","elves","loaves","potatoes","tomatoes","cacti","foci","fungi","nuclei","syllabuses","analyses","diagnoses","oases","theses","crises","phenomena","criteria","data"];return h(e[p(0,e.length+1)])+" "+h(t[p(0,t.length+1)])}function E(){m(),setTimeout(function(){document.getElementById("go").className="submit"},800)}var A=function(){function e(e,t){var n=[],r=!0,a=!1,i=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);r=!0);}catch(e){a=!0,i=e}finally{try{!r&&s.return&&s.return()}finally{if(a)throw i}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),B=(document.getElementById("result"),document.getElementById("bind")),w=document.getElementById("thego"),L=(B.value,document.getElementById("teammateys").getElementsByTagName("li"));w[window.addEventListener?"addEventListener":"attachEvent"](window.addEventListener?"click":"onclick",E,!1);!function(e,t){for(var n=[],r=-1,a=e.length;++r<a;)n[r]=t(e[r])}(L,f);document.getElementById("bind").onkeydown=function(e){13==e.keyCode&&E()},document.getElementById("go").addEventListener("click",function(){document.getElementById("load").getElementsByTagName("li").length<=2?alert("Please enter at least three names"):(a(),setTimeout(function(){i();var e=document.querySelectorAll(".player"),t=Array.from(e).map(function(e){return e.innerHTML});g(t);var n=r(t),a=n[0],o=n[1],s=n.slice(2),l=document.getElementById("pre");document.getElementById("result").className+="see";var c=v();l.className="hide",document.getElementById("captain").innerHTML+='<p class="congrats">Congrats! You\'re <b style="color: black;">'+c+"</b> Now go win the touchdown and the free throws! SPORTS!</p>",document.getElementById("captain").innerHTML+='<p class="captain-subtext">Your captain is</p><h2 class="thecaptain">'+a+"</h2>",document.getElementById("captain").innerHTML+='<p class="captain-subtext">Your co-captain is</p><h2 class="thecaptain">'+o+"</h2>",s.forEach(function(e){document.getElementById("teammateys").innerHTML+='<li class="forcefont">'+e+"</li>"}),document.getElementById("result").innerHTML+='<div id="maketeam" class="maketeam"><button class="submit" id="resetform" onClick="window.location.reload()">Reset</button></div>';var u=document.querySelectorAll("#goAway, #edit");[].forEach.call(u,function(e){e.setAttribute("class","hide")})},2e3))})},{}]},{},[1]);
//# sourceMappingURL=maps/main.js.map
