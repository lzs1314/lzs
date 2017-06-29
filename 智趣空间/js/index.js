window.onload=function(){	
	$(document).ready(function(e){
            var index = 0;

            /*导航*/
            $(".nav_ul>li").hover(function(){
                /*$(".nav_ul>li>a").css("color","#666")
                $(this).children("a").css("color","#f28d01")*/
                $(".nav_uls").css("display","none")
                $(this).children(".nav_uls").stop().slideDown(500)
                },function(){
                $(".nav_uls").stop().slideUp()
                /*$(".nav_ul>li>a").css("color","#666")*/
            })

            $(".nav_ul>li>a").click(function(){
                    $('.nav_ul>li>a').removeClass('header_navs')
                    $(this).addClass('header_navs');
                    
                    /*$(".nav_ul>li>a").css("color","#666")*/
            })
                
            
            /*点击切换*/
            $('.banner_nav ul li').hover(function(){
                var index =$(this).index();
                $(this).addClass('on').siblings().removeClass('on');
                $('.banner_s a').eq(index).stop(true).fadeIn(200).siblings().stop(true).fadeOut(200);
            });
            function lunbo(){
                index++;
                index%=4 ;
                $('.banner_nav ul li').eq(index).addClass('on').siblings().removeClass('on');
                $('.banner_s a').eq(index).stop(true).fadeIn(200).siblings().stop(true).fadeOut(200);
            }
            var gundong=setInterval(lunbo,5000);
                $('#banner').hover(function(){
                        clearInterval(gundong);
                    },function(){
                        clearTimeout(gundong);
                    });
                    
            $('.cj_nav ul li').hover(function(){
                var index =$(this).index();
                $(this).addClass('on1').siblings().removeClass('on1');
                $('.cj_inner>div').eq(index).show().siblings().hide();
            });

            /*侧边导航*/

            $('#celan .m_web').hover(function(){
                $('#m_web img').stop(true).fadeIn(200); 
            },function(){
                $('#m_web img').stop(true).fadeOut(200);    
            })
            
            $('#celan .tle').hover(function(){
                $('#tle').stop(true).fadeIn(200);   
            },function(){
                $('#tle').stop(true).fadeOut(200);  
            })
        });
        


	

	 (function(){
            var bp = document.createElement('script');
            var curProtocol = window.location.protocol.split(':')[0];
            if (curProtocol === 'https') {
                bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';        
            }
            else {
                bp.src = 'http://push.zhanzhang.baidu.com/push.js';
            }
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(bp, s);
        })();


	var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?725c4764e511d878dd0785be52bc8e2b";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();



}