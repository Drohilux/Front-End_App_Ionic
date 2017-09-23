angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('visitaRio', {
    url: '/comecar',
    templateUrl: 'templates/visitaRio.html',
    controller: 'visitaRioCtrl'
  })

  .state('visitaRio2', {
    url: '/navegacao',
    templateUrl: 'templates/visitaRio2.html',
    controller: 'visitaRio2Ctrl'
  })

  .state('visitaRio3', {
    url: '/praias',
    templateUrl: 'templates/visitaRio3.html',
    controller: 'visitaRio3Ctrl'
  })

  .state('visitaRio4', {
    url: '/hoteis',
    templateUrl: 'templates/visitaRio4.html',
    controller: 'visitaRio4Ctrl'
  })

  .state('visitaRio5', {
    url: '/Eventos',
    templateUrl: 'templates/visitaRio5.html',
    controller: 'visitaRio5Ctrl'
  })

  .state('visitaRio6', {
    url: '/delegacias',
    templateUrl: 'templates/visitaRio6.html',
    controller: 'visitaRio6Ctrl'
  })

  .state('visitaRio7', {
    url: '/hospitais',
    templateUrl: 'templates/visitaRio7.html',
    controller: 'visitaRio7Ctrl'
  })

  .state('visitaRio8', {
    url: '/turismo',
    templateUrl: 'templates/visitaRio8.html',
    controller: 'visitaRio8Ctrl'
  })

  .state('visitaRio9', {
    url: '/banheiros',
    templateUrl: 'templates/visitaRio9.html',
    controller: 'visitaRio9Ctrl'
  })

  .state('visitaRio10', {
    url: '/restaurantes',
    templateUrl: 'templates/visitaRio10.html',
    controller: 'visitaRio10Ctrl'
  })

$urlRouterProvider.otherwise('/comecar')

  

});