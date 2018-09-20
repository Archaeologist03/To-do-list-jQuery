//check of specific to dos by clicking
$("li").on("click", function() {

    $(this).toggleClass("completed");
   
})

//click on X to delete to do
$("span").on("click", function(e) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    
    e.stopPropagation();

})