head.ready(function() {
     function paySelectIcon (){
         var valSel = $('.pay-select select').val();
         $('.pay-select select').parents('.pay-select').removeClass().addClass('pay-select ' + valSel);
     } paySelectIcon();


     $(document).change(function(){
         paySelectIcon();
     });

    $('.lightbox').fancybox({
        padding: 0
    });

    $('.inline-small-select a').click(function(){
        event.preventDefault();
    });

    $('.inline-small-select .is-active').click(function(){

    });


});