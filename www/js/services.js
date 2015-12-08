angular.module('app.services', ['ngResource'])


.factory('BusinessSubscriptions', function ($resource) {
	
    return $resource('http://sisinfomanagement.com/isisbusinesstest2/restful-services-BusinessSubscriptions-actions-listAllBusinessSubscriptions-invoke.json', {}, {
               get: {
                                 method: 'GET',
                                 headers: { 'Accept': 'application/json' }
                             }
           });
})



.factory('BusinessSubscription', function ($resource) {
    return $resource('http://sisinfomanagement.com/isisbusinesstest2/restful-objects-simple-BusinessSubscription-0.json', {}, {
               get: {
                                 method: 'GET',
                                 headers: { 'Accept': 'application/json' }
                             }
           });
})


;

