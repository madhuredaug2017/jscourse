angular.module('connect')
       .factory('leadsService',leadsService);


function leadsService($http,$q){
   var service = {
   	 getLeads: getLeads
   };

   return service;


   function getLeads(pageNo,count){

   	return $http({
   		     method: 'GET',
   		     url : '/api/leads?pageNo='+pageNo +'&count=' + count
   	       });

   }



}