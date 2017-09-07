//document.ready
$(function(){

	var images = ['image1','image2','image3','image4','image5'];
	var currentIndex = 0;
    var currentImage;

    setInterval(function(){
    	if(currentIndex < images.length - 1){
			currentIndex++;
			setImage();
	    }else{
	    	currentIndex = 0;
	    }

    	},2000);

	$('.btnNext').click(function(){
		//removeDisabled();
		if(currentIndex < images.length - 1){
			currentIndex++;
			setImage();
	    }else{
	    	currentIndex = 0;
	    	//$('.btnNext').attr('disabled','disabled');
	    }
    });

    $('.btnPrevious').click(function(){
    	//removeDisabled();
    	if(currentIndex > 0){
    		currentIndex--;
    		setImage();
    	}else{
    		currentIndex = images.length - 1;
    		//$('.btnPrevious').attr('disabled','disabled');
    	}
    })



	//how to set the src attribute programmatically
    setImage();
   // $('.btnPrevious').attr('disabled','disabled');

function setImage(){
	 currentImage = images[currentIndex];
     $('img').attr('src',getFullUrl(currentImage));
}

function removeDisabled(){
	$('.btnPrevious').removeAttr('disabled');
	$('.btnNext').removeAttr('disabled','disabled');
}

});



function getFullUrl(imageName){
	return 'images/' + imageName + '.jpg';
}