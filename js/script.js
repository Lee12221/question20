$(".gnb li").hover(
    function(){
        $(".sub", this).stop().fadeIn();
    },
    function(){
        $(".sub", this).stop().fadeOut();

    }

);

$(".open").click(
    function(){
        $("#popup").fadeIn();
    },
);
$(".close").click(
    function(){
        $("#popup").fadeOut();
    },
);