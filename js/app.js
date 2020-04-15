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