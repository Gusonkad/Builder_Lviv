
<script>
   $(function(){
       // высота "шапки", px
       var h_hght = $('.firstScreen').outerHeight();
       // высота блока с меню, px
       var h_nav = $('#top_nav').outerHeight();
       var top;
       $(window).scroll(function(){
      // отступ сверху
      top = $(this).scrollTop();
           if((h_hght-top) <= h_nav){
      $('#top_nav').css('top', '0');
           }
           else if(top < h_hght && top > 0){
      $('#top_nav').css({ 'bottom': top, 'top': '' });
           }
           else if(top < h_nav){
      $('#top_nav').css({ 'top': '', 'bottom': '0' });
           }
       });
   });
</script>