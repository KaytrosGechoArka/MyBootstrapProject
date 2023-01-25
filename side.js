function sideSlider(e){


    var element=document.getElementById("container"),
    style=window.getComputedStyle(element),
    right=style.getPropertyValue("right");

    var element2=document.getElementById("A");
    style2=window.getComputedStyle(element2);
    right2=style2.getPropertyValue("right");

    if(right=="0px"){
        element2.style.right="-3px";
        element.style.right="-300px";
    }else{
        element2.style.right="300px";
        element.style.right="0px";
    }
}
function colorPicker(){
    
}