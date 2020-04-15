//var $ = Dom7;
var colours = {"red": "#ff3b30", "green": "#4cd964", "blue": "#2196f3", "pink": "#ff2d55", "yellow": "#ffcc00", "orange": "#ff9500", "purple": "#9c27b0", "deeppurple": "#673ab7", "lightblue": "#5ac8fa", "teal": "#009688", "lime": "#cddc39", "deeporange": "#ff6b22"}
var app = new Framework7({
  id: 'chirag.galaiya',
  root: '#app',
  theme: 'md'
});
var shareData = {
  title: 'How Much Toilet Paper',
  text: 'Created by Chirag Galaiya',
  url: window.location.href
}
window.onload = function() {
  if (window.localStorage.getItem("theme-color") == null) {
    window.localStorage.setItem("theme-color", "pink");
  }
  document.documentElement.classList.add("color-theme-" + window.localStorage.getItem("theme-color"));
  document.querySelector("meta[name=theme-color]").setAttribute("content", colours[window.localStorage.getItem("theme-color")]);
  try { if (window.navigator.canShare(shareData)) { document.getElementById("share").style.display = "flex"; } } catch(e) { }
  if (document.getElementsByTagName("div")[document.getElementsByTagName("div").length-1].classList.contains("card") == false) {
    document.getElementsByTagName("div")[document.getElementsByTagName("div").length-1].style.display = "none";
  }
  if (document.getElementsByTagName("div")[document.getElementsByTagName("div").length-2].classList.contains("card") == false) {
    document.getElementsByTagName("div")[document.getElementsByTagName("div").length-2].style.display = "none";
  }
  setTimeout(function() {
    document.getElementById("person2").style.display = "none";
    document.getElementById("person3").style.display = "none";
    document.getElementById("person4").style.display = "none";
    document.getElementById("person5").style.display = "none";
    document.getElementById("person6").style.display = "none";
    document.getElementById("person2").style.opacity = "1";
    document.getElementById("person3").style.opacity = "1";
    document.getElementById("person4").style.opacity = "1";
    document.getElementById("person5").style.opacity = "1";
    document.getElementById("person6").style.opacity = "1";
    document.getElementById("advopts").style.opacity = "1";
  }, 10);
}

function share() { window.navigator.share(shareData); }

function update_colour(c) {
  document.documentElement.classList.replace("color-theme-"+window.localStorage.getItem("theme-color"), "color-theme-"+c);
  window.localStorage.setItem("theme-color", c);
  app.popover.close(document.getElementsByClassName("popover-colours")[0], true);
  document.querySelector("meta[name=theme-color]").setAttribute("content", colours[window.localStorage.getItem("theme-color")]);
}

function calculate() {
  var days = 0;
  for (var i = 1; i < people + 1; i++) {
    days += app.range.getValue(document.getElementById("r"+i.toString()+"1")) * app.range.getValue(document.getElementById("r"+i.toString()+"2"));
  }
  days = (app.range.getValue(document.getElementById("r1")) * app.range.getValue(document.getElementById("r2"))) / days;
  console.log(days);
  var percentage = Math.round((days * 100) / app.range.getValue(document.getElementById("r3")));
  var days = Math.round(days);
  document.getElementById("days").innerHTML = days.toString();
  document.getElementById("percentage").innerHTML = percentage.toString();
}

var people = 1;
var people_toast = app.toast.create({text: "Max 6 people per household", closeTimeout: 1000, closeButton: false});

function add_person() {
  if (people == 1) {
    document.getElementById("del1").style.opacity = 1;
    document.getElementById("del1").onclick = function() { del(1); };
  }
  if (people < 6) {
    people += 1;
    document.getElementById("person"+people.toString()).style.display = "block";
  } else {
    people_toast.open();
  }
  calculate();
}

function del(n) {
  document.getElementById("person"+people.toString()).style.display = "none";
  if (n == people) {
  } else {
    for (var i = n; i < people; i++) {
      app.range.setValue(document.getElementById("r"+i.toString()+"1"), app.range.getValue(document.getElementById("r"+(parseInt(i)+1).toString()+"1")));
      app.range.setValue(document.getElementById("r"+i.toString()+"2"), app.range.getValue(document.getElementById("r"+(parseInt(i)+1).toString()+"2")));
    }
  }
  app.range.setValue(document.getElementById("r"+people.toString()+"1"), 4);
  app.range.setValue(document.getElementById("r"+people.toString()+"2"), 2);
  people -= 1;
  if (people == 1) {
    document.getElementById("del1").style.opacity = 0;
    document.getElementById("del1").onclick = function() { };
  }
  calculate();
}

app.range.get(document.getElementById("r1")).on("change", function(e) { document.getElementById("v1").innerHTML = e.value; calculate(); });
app.range.get(document.getElementById("r2")).on("change", function(e) { document.getElementById("v2").innerHTML = e.value; calculate(); });
app.range.get(document.getElementById("r3")).on("change", function(e) { document.getElementById("v3").innerHTML = e.value; calculate(); });
app.range.get(document.getElementById("r11")).on("change", function(e) { document.getElementById("val11").innerHTML = e.value; calculate(); });
app.range.get(document.getElementById("r12")).on("change", function(e) { document.getElementById("val12").innerHTML = e.value; calculate(); });
app.range.get(document.getElementById("r21")).on("change", function(e) { document.getElementById("val21").innerHTML = e.value; calculate(); });
app.range.get(document.getElementById("r22")).on("change", function(e) { document.getElementById("val22").innerHTML = e.value; calculate(); });
app.range.get(document.getElementById("r31")).on("change", function(e) { document.getElementById("val31").innerHTML = e.value; calculate(); });
app.range.get(document.getElementById("r32")).on("change", function(e) { document.getElementById("val32").innerHTML = e.value; calculate(); });
app.range.get(document.getElementById("r41")).on("change", function(e) { document.getElementById("val41").innerHTML = e.value; calculate(); });
app.range.get(document.getElementById("r42")).on("change", function(e) { document.getElementById("val42").innerHTML = e.value; calculate(); });
app.range.get(document.getElementById("r51")).on("change", function(e) { document.getElementById("val51").innerHTML = e.value; calculate(); });
app.range.get(document.getElementById("r52")).on("change", function(e) { document.getElementById("val52").innerHTML = e.value; calculate(); });
app.range.get(document.getElementById("r61")).on("change", function(e) { document.getElementById("val61").innerHTML = e.value; calculate(); });
app.range.get(document.getElementById("r62")).on("change", function(e) { document.getElementById("val62").innerHTML = e.value; calculate(); });