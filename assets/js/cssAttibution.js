

$(document).ready(function(){
    var bgImg = $("section >img");
    bgImg.hide();
    var count=$("section").length;
    var temp;
    for(var i=0;i<count-1;i++)
    {
        console.log(i); 
        tempTag=$("section >img").eq(i);
        temp=$(window).width()*tempTag.height()/(tempTag.width());
        console.log(temp)
        $("section").eq(i).css({"height":temp+"px"});
    }
    $(".pic-section1").css({"background":"url(assets/img/Pic_Seo1/GiaDinh/Anh-gia-dinh-1.jpg)","background-size":"cover","background-repeat": "no-repeat"})
    $(".pic-section2").css({"background":"url(assets/img/Pic_Seo1/AnhCuoi/anh-cuoi-1.jpg)","background-size":"cover","background-repeat": "no-repeat"})
    $(".pic-section3").css({"background":"url(assets/img/Pic_Seo1/KyYeu/anh-ky-yeu-5.jpg)","background-size":"cover","background-repeat": "no-repeat"})
    $(".pic-section4").css({"background":"url(assets/img/Pic_Seo1/AnhNgoaiCanh/anh-ngoai-canh-5.jpg)","background-size":"cover","background-repeat": "no-repeat"})

    $("#btn-contact-form").click(function(){
        alert("Cảm ơn bạn!");
        location.replace("/")
      });
})
