
$(document).ready(function(){
    $("h2").hide();
   // Get the modal
    var modal = $('#myModal');
    // Get the image and insert it inside the modal 
    var img = $(".image");
    var modalImg = $("#img01");   
    var captionText = $("#caption"); 
    img.click(function(){
        console.log("click me!");
        modal.css("display","block");
    modalImg.attr('src',this.src);
    captionText.text(this.alt);
   
    })

    // Get the <span> element that closes the modal
    var span = $(".close").eq(0);

    // When the user clicks on <span> (x), close the modal
    span.click(function() { 
    modal.css("display","none");
    })
})