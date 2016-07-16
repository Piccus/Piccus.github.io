$(function() {
    $('pre').addClass('prettyprint linenums'); //添加Google code Hight需要的class

    
    $.getScript('/js/prettify/prettify.js',function(){
        prettyPrint();
    });
})
