function mainController($scope, Messages){
	$scope.messages = Messages.get();

	$scope.add = function(){
		Messages.add({user: $scope.user, content: $scope.content});
		$scope.user = "";
		$scope.content = "";
	};

	$scope.delete = function(id){
		Messages.delete(id);
	};
}