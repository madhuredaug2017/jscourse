
var img_array = ['images/image1.jpg','images/image2.jpg','images/image3.jpg','images/image4.jpg','images/image5.jpg'];
i = 0;

function myFunction() {
    i++;
    document.getElementById("myImg").src = img_array[i];
    if (i == img_array.length - 1) {
        i = -1;

    }
}

