$(document).ready(function($){
    $(".icon").mouseenter(function(){
        $(this).closest(".row").find(".side-desc").addClass("hovered");
    });
    $(".icon").mouseleave(function(){
        $(this).closest(".row").find(".side-desc").removeClass("hovered");
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

    $('.slide-cv').click(function() {
        var $curriculum = $(this).closest('.row').next('.cv');

        // Slide up all descriptions except the one associated with this row
        if ($curriculum.is(":visible")){
            $curriculum.slideUp();
            $(this).text('See my curriculum');
        }
        else{
            $curriculum.slideDown();
            $(this).text('Hide');
        }
    });

    $(".navbar-toggle").on("click", function(){
        var $navBar=$(".icon-section");
        $navBar.addClass("visible");
    });

    $(document).on('click', function(event) {
        var $navBar=$(".icon-section");
        if (!$(event.target).closest('.stretched-link').length && !$(event.target).closest('.navbar-toggle').length){
            console.log("coucou");
            $navBar.removeClass("visible");
        }
      });

});