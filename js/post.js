$(function() {
    $('pre').addClass('prettyprint linenums'); //添加Google code Hight需要的class

    window.disqus_shortname = 'piccus'; // required: replace example with your forum shortname
    $('#disqus_container .comment').on('click',function(){
       var d = document, s = d.createElement('script');
        
        s.src = '//piccus.disqus.com/embed.js';
        
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
    });
    
    $.getScript('/js/prettify/prettify.js',function(){
        prettyPrint();
    });

    if(/\#comment/.test(location.hash)){
        $('#disqus_container .comment').trigger('click');
    }
})
