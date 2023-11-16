$(document).ready(function($){
    $(".icon").mouseenter(function(){
        $(this).parent().find(".side-desc").css("width", "200%");
    });
    $(".icon").mouseleave(function(){
        $(this).parent().find(".side-desc").css("width", "0");
    });
   
    $('.slide-btn').click(function() {
        var $row = $(this).closest('.row');
        var $siteDesc = $row.next('.row').find('.site-desc');

        // Slide up all descriptions except the one associated with this row
        if ($siteDesc.is(":visible")){
            $siteDesc.slideUp();
            $(this).text('+');
        }
        else{
            $siteDesc.slideDown();
            $(this).text('-');
        }

    });

});