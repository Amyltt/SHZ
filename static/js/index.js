function AutoScroll(obj) {
    $(obj).find("ul:first").animate({
        marginTop: "-80px"
    },
    500,
    function() {
        $(this).css({
            marginTop: "0px"
        }).find("li:first").appendTo(this);
    });
}
$(document).ready(function() {
    setInterval('AutoScroll("#news")', 2000)
});
 $(document).ready(function(){
        $('#pic').hover(function() {
            $("#box").css('display', 'block');
        }, function() {
           $("#box").css('display', 'none');
        });
            $("#box").hover(function() {
                $(this).css('display', 'block');
            }, function() {
                $(this).css('display', 'none');
            });
 })
