//check of specific to dos by clicking
$("ul").on("click", function(e) {
    $(e.target).toggleClass("completed");
})

//click on X to delete to do
$("ul").on("click", "span", function(e) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    
    e.stopPropagation();
})

//add new item on enter keypress
$("input[type='text']").on("keypress", function(e) {
    if(e.which === 13) {
        let toDoText = $(this).val();
        $(this).val(""); 
        $("ul").append(`<li><span><i class="fa fa-trash"></i></span> ${toDoText}</li>`)
    }
})

//toggle input on plus icon click
$(".fa-plus").on("click", function() {
    $("input[type='text']").fadeToggle();
})