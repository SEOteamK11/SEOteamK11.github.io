

$(document).ready(function(){
    var bgImg = $("section >img");
    bgImg.hide();
    var count=$("section").length;
    var temp;
    for(var i=0;i<count-1;i++)
    {
        console.log(i); 
        tempTag=$("section >img").eq(i);

        console.log(tempTag.width());
        console.log(tempTag.height());
        console.log($(document).width());
        console.log($(window).width());

        temp=$(window).width()*tempTag.height()/(tempTag.width());
        console.log(temp)
        $("section").eq(i).css({"height":temp+"px"});
    }
})