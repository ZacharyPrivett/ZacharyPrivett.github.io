$(document).ready(function() {
    // preload the image for each link
    $("#image_list a").each( (index, link) => {
        const image = new Image();
        image.src = link.href;

    });
    // set up the event handlers for each link

    $("#image_list a").click( evt => {

        const link = evt.currentTarget;
        // get the image URL and caption for each image and animate the caption
        //$("#image");
        $("#image").fadeOut(1000, e => {
            $("#image").attr("src", link.href).fadeIn(1000)
        });
            
        $("#caption").fadeOut(1000, e => {
            $("#caption").text(link.title).fadeIn(1000)
        });
        // cancel the default action of each link
        evt.preventDefault();
    });
           
    // move the focus to the first link
    $("li:first-child a").focus();


}); // end ready