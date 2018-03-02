$(function(){
	/* 热门产品排行 */
  $(".rmtjcon-tit").hover(function(){
	  $(".rmtjcon-con").hide()
	  var a=$(".rmtjcon-tit").index(this);
	  $(".rmtjcon-con").eq(a).show()
	  })
	/* 无缝滚动 */	
function wf(){
  $(".pctj ul").animate({marginLeft:-300},1000,function(){
	  $(".pctj ul li:eq(0)").appendTo($(".pctj ul:last"))
	  $(".pctj ul").css("margin-left",0)
	  })	
}
setInterval(wf,2000)
function wf2(){
	$(".bfsj li:eq(0)").animate({marginLeft:-300},1000,function(){
		$(".bfsj ul li:eq(0) a:first").appendTo($(".bfsj ul li:eq(0)"))
		$(".bfsj ul li:eq(0)").css("margin-left",0)
		})
	}
setInterval(wf2,2500)
function wf3(){
	$(".bfsj li:eq(1)").animate({marginLeft:-300},1000,function(){
		$(".bfsj ul li:eq(1) a:first").appendTo($(".bfsj ul li:eq(1)"))
		$(".bfsj ul li:eq(1)").css("margin-left",0)
		})
	}
setInterval(wf3,2500)
/* banner */
var ban1=0;
$(".banpic2").click(function(){
	clearInterval(t)
	var bp=$(".banpic2").index(this);
	$(".bpicdw1").eq(bp).animate({height:450},1000).siblings(".bpicdw1").animate({height:0})
	$(".bpicdw2").eq(bp).animate({height:450},1000).siblings(".bpicdw2").animate({height:0})
	$(".bpicdw3").eq(bp).animate({height:450},1000).siblings(".bpicdw3").animate({height:0})
	$(".bpicdw4").eq(bp).animate({height:450},1000).siblings(".bpicdw4").animate({height:0})
	t=setInterval(ban,2500)
  })
  function ban(){
	  if(ban1<4){
	$(".bpicdw1").eq(ban1).animate({height:450},1000).siblings(".bpicdw1").animate({height:0})
	$(".bpicdw2").eq(ban1).animate({height:450},1000).siblings(".bpicdw2").animate({height:0})
	$(".bpicdw3").eq(ban1).animate({height:450},1000).siblings(".bpicdw3").animate({height:0})
	$(".bpicdw4").eq(ban1).animate({height:450},1000).siblings(".bpicdw4").animate({height:0})  
	ban1++
		  }else{
			  ban1=0
			  }
	  }	
	  var t=setInterval(ban,2500)
})

$(function(){
  $(".jnzq-con dd").hover(function(){
/*	  var a=$(".jnzq-con dd").index(this);*/
	  $(this).css({"box-shadow":"5px 0  5px #CCC"}).siblings().css("box-shadow","none")
	  },function(){
	  $(this).css("box-shadow","none")
		  })	
})

/* login */
$(function(){
  $(".login li a").click(function(){
	  $(".dl").fadeIn()/*.css({"background":"rgba(0,0,0,0.5)"})*/
	  })	
  $(".close").click(function(){
	  $(".dl").fadeOut()
	  })
})

/* 热门排行选项卡 */
$(function(){
  $(".rmtj dl dt").click(function(){
	  	var a=$(this).index()
	$(".rmtjcon ul").eq(a).show().siblings(".rmtjcon ul").hide()  
	})	
})
































































