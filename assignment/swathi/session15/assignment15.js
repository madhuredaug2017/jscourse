//Write a function 'endsWith()' to test whether a string ends with a specified string,
//with Regular expression
var sen = "I am learning how to write code";
if (typeof("sen")!=="string"){
  console.log("Enter valid sentence");
}
function endswith(sen,str){
  console.log(sen.endsWith(str));
}
endswith(sen,"write code");





//Write a function mergeRanges() that takes an array of meeting time ranges and returns an array of condensed ranges.
var meetingtimes = [
{startTime: 0, endTime: 1},
{startTime: 3, endTime: 5},
{startTime: 4, endTime: 8},
{startTime: 10, endTime: 12},
{startTime: 9, endTime: 10},
];
var temp = 0;
var condensedranges = meetingtimes.reduce(function(newrange, currentarray, currentindex) {
  if (temp < currentarray.startTime || currentindex == 0) {
    newrange.push(currentarray);
  } else {
    if (currentarray.endTime > temp) newrange[newrange.length - 1].endTime = currentarray.endTime;
  }
temp = currentarray.endTime;
return newrange;
}, []);
console.log(condensedranges);