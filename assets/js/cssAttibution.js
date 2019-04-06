

$(document).ready(function(){
    var bgImg = $("section >img");
    bgImg.hide();
    var count=$("section").length;
    var temp;
    for(var i=0;i<count-1;i++)
    {
        tempTag=$("section >img").eq(i);
        temp=$(window).width()*tempTag.height()/(tempTag.width());
        $("section").eq(i).css({"height":temp+"px"});
    }
})
