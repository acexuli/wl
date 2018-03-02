// JavaScript Document
/* 下滑列表 */
$(function(){
  $(window).scroll(function(){
  var a=$(window).scrollTop();
/*  var b=$(".list-box").height();*/

  if(a>10){
$("#l1 .list-box").animate({height:225},1000)
 $("#l1 .list-box span").animate({height:225},1200)
/*$("#l1 .list-box").slideDown(1000)
 $("#l1 .list-box span img").slideDown(1200)*/

/*$("#l1 .list-box").hover(function(){
		$("#l1 .list-box img").css({"transition":".5s"})
	$(this).css({"transform":"scale(0.3)","transform":"translateY(-110%)"})
	})*/
	  }
	 
  if(a>350){
$("#l2 .list-box").animate({height:225},1000)
 $("#l2 .list-box span").animate({height:225},1200)
/*$("#l2 .list-box").slideDown(1000)
 $("#l2 .list-box span img").slideDown(1200)	  */
      }
	 
  if(a>550){
$("#l3 .list-box").animate({height:225},1000)
 $("#l3 .list-box span").animate({height:225},1200)
/*$(".list-main li:eq(2) .list-box").slideDown(1000)
 $(".list-main li:eq(2) .list-box span img").slideDown(1200)*/
	  }	
	  
  if(a>750){
$("#l4 .list-box").animate({height:225},1000)
 $("#l4 .list-box span").animate({height:225},1200)
/*$(".list-main li:eq(3) .list-box").slideDown(1000)
 $(".list-main li:eq(3) .list-box span img").slideDown(1200)*/
	  }	
	  
  if(a>800){
$("#l5 .list-box").animate({height:225},1000)
 $("#l5 .list-box span").animate({height:225},1200)
/*$(".list-main li:eq(4) .list-box").slideDown(1000)
 $(".list-main li:eq(4) .list-box span img").slideDown(1200)*/
	  }		  	   
	  })	
	  
	  

})


































