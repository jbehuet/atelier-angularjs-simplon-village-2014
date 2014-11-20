function mainController($scope, $location, Messages){
	$scope.messages = Messages.get();

	$scope.add = function(){
		Messages.add({user: $scope.user, content: $scope.content});
		$scope.user = "";
		$scope.content = "";
		$location.path("/");
	};

	$scope.delete = function(id){
		Messages.delete(id);
	};
}