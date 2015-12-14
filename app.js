var app = angular.module('animApp', ['ngAnimate', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("home");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "partials/home.html"
    })
    .state('dashboard', {
      url: "/dashboard",
      templateUrl: "partials/dashboard.html"
    })
});

app.controller('MainController', MainController);

function MainController() {
  var vm = this;
  vm.toggleClass = toggleClass;
  vm.highlight = false;
  vm.showAlert = false;
  vm.toggleAlert = toggleAlert;


  function toggleClass() {
    vm.highlight = !vm.highlight;
  }

  function toggleAlert() {
    vm.showAlert = !vm.showAlert;
  }

  
}