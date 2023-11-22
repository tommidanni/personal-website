$(document).ready(function($){


    $(window).on('scroll',  _.debounce(function(){
        $(".icon").removeClass('in-section');
        $('#face').removeClass('in-section');
        
        $('.section').each(function(index, element){
            var sectionId = $(element).attr('id');
            var sectionName = sectionId.split('-')[1]; // Extract the second part of the section's ID
            var correspondingIconId = '#' + sectionName; // Corresponding icon ID
    
            // Remove the class from all icons initially
            const scrollTop = window.pageYOffset+window.outerHeight/2;
            if ($(element).offset().top < scrollTop && $(element).offset().top + $(element).outerHeight() > scrollTop) {
                $(correspondingIconId).addClass('in-section');
            }
        });
    }, 10));

   
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
      

});