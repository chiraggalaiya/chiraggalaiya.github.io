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

function isBetween(n, a, b) {
   return (n - a) * (n - b) <= 0
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

window.onload = function() {
  try { if (window.navigator.canShare({title:'',text:'',url:''})) { document.getElementById("share").style.display = "flex"; } } catch(e) { }
  
  if (window.localStorage.getItem("username") == null) {
    window.localStorage.setItem("username", "");
  }
  document.getElementById("username").value = window.localStorage.getItem("username");
  
  if (window.localStorage.getItem("theme-color") == null) {
    window.localStorage.setItem("theme-color", "pink");
  } else {
    document.documentElement.classList.replace("color-theme-pink", "color-theme-" + window.localStorage.getItem("theme-color"));
  }
}

function update_colour(c) {
  document.documentElement.classList.replace("color-theme-"+window.localStorage.getItem("theme-color"), "color-theme-"+c);
  window.localStorage.setItem("theme-color", c);
  app.popover.close(document.getElementsByClassName("popover-colours")[0], true);
}

var person_popover = app.popover.get($('.popover-person')[0]);
function person() {
  person_popover = app.popover.open(document.getElementsByClassName("popover-person")[0], document.getElementById("person_btn"), true);
  if (person_popover.$el[0].getElementsByTagName("input")[0].value == "") {
    app.input.focus(person_popover.$el[0].getElementsByTagName("input")[0]);
    person_popover.$el[0].getElementsByTagName("input")[0].focus();
  }
}
function update_username() {
  var username = document.getElementById("username").value;
  if (window.localStorage.getItem("username") != username) {
    var new_username = "";
    for (var i = 0; i < username.length; i++) {
      if (isBetween(username.charCodeAt(i), 48, 57) || isBetween(username.charCodeAt(i), 65, 90) || isBetween(username.charCodeAt(i), 97, 122)) {
        new_username += username[i];
      }
    }
    if (new_username != "" && new_username.length > 3) {
      if (username != new_username) { document.getElementById("username").value = new_username; }
      window.localStorage.setItem("username", new_username);
      app.toast.create({
        text: 'Username updated to <b>'+new_username+'</b>',
        closeTimeout: 1200,
      }).open();
      person_popover.close();
    } else if (new_username != "" && new_username.length < 4) {
      app.toast.create({
        text: 'Username too short',
        closeTimeout: 2000,
      }).open();
      app.input.focus(person_popover.$el[0].getElementsByTagName("input")[0]);
      person_popover.$el[0].getElementsByTagName("input")[0].focus();
    }
  } else {
    person_popover.close();
  }
}
$('.popover-person').on('popover:closed', function (e) {
  $('#username')[0].value = window.localStorage.getItem("username");
});
function check_username() {
  if (window.localStorage.getItem("username") == "") {
    app.toast.create({
      text: 'Username required',
      closeTimeout: 2000,
    }).open();
    $("#person_btn")[0].click();
    return false;
  } else {
    return true;
  }
}

function share() { window.navigator.share({title: 'Bukhar App by Chirag Galaiya', text: 'Bukhar App', url: "https://chilichingching.github.io"}); }