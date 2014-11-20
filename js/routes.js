function routes ($routeProvider) {
  $routeProvider
  .when('/', {
    templateUrl: 'views/messages.html',
    controller: 'mainController'
  })
  .when('/new', {
    templateUrl: 'views/new.html',
    controller: 'mainController'
  });
}