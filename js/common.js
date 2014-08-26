head.ready(function() {
     function paySelectIcon (){
         var valSel = $('.pay-select select').val();
         console.log(valSel);
         $('.pay-select select').parents('.pay-select').removeClass().addClass('pay-select ' + valSel);
     } paySelectIcon();


     $(document).change(function(){
         paySelectIcon();
     });

    $('.lightbox').fancybox({
        padding: 0
    });


});