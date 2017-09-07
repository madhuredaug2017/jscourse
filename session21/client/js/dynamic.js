$(function(){
    loadNav();

   var people = [
      { name : 'John', age : 20, city: 'Topeka' },
      { name : 'Ramesh', age : 25, city: 'Hyderabad' }
   ];

   displayRecords(people);

});

function loadNav(){
	$('.header').load('templates/nav.html',function(){
		console.log('navigation html is loaded');
	});
}

function displayRecords(records){

	              /* <tr>
       		  		  <td> John </td>
       		  		  <td> 20  </td>
       		  		  <td> Topeka </td>
       		  		</tr> */
     //var output = '';
     //backslash --escape line (ignore end of line and continue)
     //# tokens or place holders to fill the dynamic data 
    // var row = '<tr><td>#name</td><td>#age</td><td>#city</td>';

     var row = '<tr>\
     				<td>#name</td>\
     				<td>#age</td>\
     				<td>#city</td>\
     			</tr>\
               ';  		
      // for(var i = 0 ;i < records.length;i++){
      // 	 var record = records[i];
      // 	 output += row.replace('#name',record.name)
      // 	              .replace('#age',record.age)
      // 	              .replace('#city',record.city);
      // }  	

      //push pop shift unshift
      //tranform an array -- map
      //[1,2,3] -- [2,4,6]
      //consolde -- reduce 

      var htmlRecords = records.map(function(record){
      	return row.replace('#name',record.name)
       	          .replace('#age',record.age)
                  .replace('#city',record.city);
      });

      var output = htmlRecords.join('');
      $('#peopleRecords tbody').append(output);	

}