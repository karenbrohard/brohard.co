$(function(){
	setTimeout(function(){
		// alert("Oh hey. I know how to do alert boxes! ")
		},180000)
	
	
})

$(function() {
    
     var width=($(".jcarousel").width() /3) -5
     $(".jcarousel li").css({
     	width: width
     })
      $('.jcarousel').jcarousel({
     wrap:"circular"
    });
     var carousel=$(".jcarousel").data("jcarousel")
    setInterval(function(){
    	carousel.scroll("+=1")
    },3000)
});

$(function() {
    $(window).scroll(function(){
        console.log("scrolled")
        var top = $(window).scrollTop()
        $(".jcarousel").css({
            "top":top*0.6
        });
    })

}

    )

$(function(){
    $(".nav").on("click","li",function(e){
        var offset=0;
        var el=$(e.currentTarget)
        if (el.is(".about")) {
            offset=$(".facepic").offset().top
        }else if (el.is(".whatido")) {
            offset=$("#whatido").offset().top
        };
        ;
        $('html, body').animate({
            scrollTop: offset-100
        },600)
    })
})



