var height = document.querySelectorAll(".answers");
var max=0;
for(var i=0; i<height.length;i++){
    if(height[i].offsetHeight>max){
        max= height[i].offsetHeight;
    }
}
for (var i=0;i< height.length;i++){
    height[i].style.height=max;
    
}
for(var i=0;i <height.length;i++)
    console.log(height[i].offsetHeight);

