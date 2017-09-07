
var images=['images/image1.jpg','images/image2.jpg','images/image3.jpg','images/image4.jpg'];
 i=0;
 
function slideshow(){
i++;
 
document.getElementById("img").src=images[i];
if(i== images.length-1) {
	i=-1;
}


 }
