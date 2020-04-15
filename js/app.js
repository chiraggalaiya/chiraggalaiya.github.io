if ('serviceWorker' in navigator) {
  console.log('CLIENT: service worker registration in progress.');
  navigator.serviceWorker.register('/service-worker.js').then(function() {
    console.log('CLIENT: service worker registration complete.');
  }, function() {
    console.log('CLIENT: service worker registration failure.');
  });
} else {
  console.log('CLIENT: service worker is not supported.');
}

var $ = Dom7;

var routes = [
  {
    path: '/',
    url: './index.html',
    name: 'home',
  }, {
    path: '/about/',
    url: './pages/about.html',
    name: 'about',
  }, {
    path: '(.*)',
    url: './pages/404.html',
  }
];

var app = new Framework7({
  id: 'chirag.galaiya.points',
  root: '#app',
  theme: 'md',
  routes: routes
});
var mainView = app.views.create('.view-main');

var colours = {"red": "#ff3b30", "green": "#4cd964", "blue": "#2196f3", "pink": "#ff2d55", "yellow": "#ffcc00", "orange": "#ff9500", "purple": "#9c27b0", "deeppurple": "#673ab7", "lightblue": "#5ac8fa", "teal": "#009688", "lime": "#cddc39", "deeporange": "#ff6b22"}

window.onload = function() {
  try { if (window.navigator.canShare(shareData)) { document.getElementById("share").style.display = "flex"; } } catch(e) { }
  if (window.localStorage.getItem("username") == null) {
    window.localStorage.setItem("username", "");
  }
  document.getElementById("username").value = window.localStorage.getItem("username");
  if (window.localStorage.getItem("theme-color") == null) {
    window.localStorage.setItem("theme-color", "pink");
  }
  document.documentElement.classList.replace("color-theme-pink", "color-theme-" + window.localStorage.getItem("theme-color"));
  document.querySelector("meta[name=theme-color]").setAttribute("content", colours[window.localStorage.getItem("theme-color")]);
}

function update_colour(c) {
  document.documentElement.classList.replace("color-theme-"+window.localStorage.getItem("theme-color"), "color-theme-"+c);
  window.localStorage.setItem("theme-color", c);
  app.popover.close(document.getElementsByClassName("popover-colours")[0], true);
  document.querySelector("meta[name=theme-color]").setAttribute("content", colours[window.localStorage.getItem("theme-color")]);
}

function person() {
  person_popover = app.popover.open(document.getElementsByClassName("popover-person")[0], document.getElementById("person_btn"), true);
  if (document.getElementsByClassName("popover-person")[0].getElementsByTagName("input")[0].value == "") {
    app.input.focus(document.getElementsByClassName("popover-person")[0].getElementsByTagName("input")[0]);
    document.getElementsByClassName("popover-person")[0].getElementsByTagName("input")[0].focus();
  }
}

function share() {
  if (usingCordova) {
    window.plugins.socialsharing.shareWithOptions(shareOptions,function(){},function(){});
  } else { window.navigator.share(shareData); }
}