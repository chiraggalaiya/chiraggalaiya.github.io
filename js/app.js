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

function share() { window.navigator.share({title: 'Bukhar App by Chirag Galaiya', text: 'Bukhar App', url: "https://chilichingching.github.io"}); }
function toast(msg, time) { app.toast.create({ text: msg, closeTimeout: time }).open(); }

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
  window.location.hash = Math.random().toString(36).substring(7);
  setTimeout(() => { window.location.hash = Math.random().toString(36).substring(7); }, 100);
}

setTimeout(() => {
  $(window).on("hashchange", function(e) {
    toast("Don't press back button", 1200);
    window.location.hash = Math.random().toString(36).substring(7);
  });
}, 200);

function update_colour(c) {
  document.documentElement.classList.replace("color-theme-"+window.localStorage.getItem("theme-color"), "color-theme-"+c);
  window.localStorage.setItem("theme-color", c);
  app.popover.close(document.getElementsByClassName("popover-colours")[0], true);
}

var person_popover = app.popover.get($('.popover-person')[0]);
function person() {
  window.location.hash = "username-popover";
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
      toast('Username updated to <b>'+new_username+'</b>', 1200);
      person_popover.close();
    } else if (new_username != "" && new_username.length < 4) {
      toast('Username too short', 2000);
      app.input.focus(person_popover.$el[0].getElementsByTagName("input")[0]);
      person_popover.$el[0].getElementsByTagName("input")[0].focus();
    }
  } else {
    person_popover.close();
  }
}
$('.popover-person').on('popover:close', function (e) {
  window.history.back();
});
$('.popover-person').on('popover:closed', function (e) {
  $('#username')[0].value = window.localStorage.getItem("username");
});
function check_username() {
  if (window.localStorage.getItem("username") == "") {
    toast('Username required', 2000);
    $("#person_btn")[0].click();
    return false;
  } else {
    return true;
  }
}

function create_game() {
  if (check_username()) {
    
  }
}

function join_game() {
  if (check_username()) {
    
  }
}

function score() {
  toast("coming soon!", 1200);
}

function history_card() {
  toast("coming soon!", 1200);
}