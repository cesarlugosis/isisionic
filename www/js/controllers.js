angular.module('app.controllers', [])
angular.module('app.controllers', ['app.services'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope, $stateParams, BusinessSubscriptions, BusinessSubscription) {
	  $scope.businessSubscriptions = BusinessSubscriptions.get(
				 
			    function(data) { 
			    	var resultType = data.resulttype;
			    	var businessSubscriptionHeadersList = data.result.value;
			    	
			    	$scope.businessSubscriptionsList=[];
			    	
			    	
			    	if(resultType ==  "list"){
			    		for(i=0; i < businessSubscriptionHeadersList.length; i++){
			    			console.log("$scope.businessSubscriptionHeadersList contains:",businessSubscriptionHeadersList);
			    			$scope.businesssubscription = BusinessSubscription.get({businessSubscriptionInstanceId: businessSubscriptionHeadersList[i].href.split('/')[6]},
			    					function(aBusinessSubscription) {
			    						
			    						$scope.businessSubscriptionsList.push(aBusinessSubscription);
			    						console.log("$scope.businessSubscriptionsList",$scope.businessSubscriptionsList);
			    						
			    					}
			    					);
			    		}
			    	   	
			    	}
				    	
			    	},
			    	
			    function(error) { console.log(error);}
			    );


			})


.controller('PlaylistCtrl', function($scope, $stateParams, BusinessSubscription) {
	console.log("$stateParams.businessSubscriptionInstanceId",$stateParams.businessSubscriptionInstanceId);
	$scope.businessSubscription = BusinessSubscription.get({businessSubscriptionInstanceId: $stateParams.businessSubscriptionInstanceId},
	function(data) {
		
		console.log("$scope.businessSubscription",data);
		
	})
	
});
