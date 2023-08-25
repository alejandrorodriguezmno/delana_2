/*!
Name: jQuery grouploop plugin - Lean Labs version
Version: 1.0.3
Based on: https://github.com/scottalguire/grouploop by Scott Alguire
Forked and modified by: Adrian Sandu
Email: adrian@lean-labs.com
*/
!function($){$.fn.extend({grouploop:function(options){var myReq,curXPos,children,settings=$.extend({velocity:2,forward:!0,childNode:".item",childWrapper:".item-wrap",pauseOnHover:!0},options),el=this,animationFlag=!1,v=settings.velocity,numChildren=$(el).find(settings.childWrapper+" "+settings.childNode).length,wrapperWidth=($(window).width(),$(el).width()),itemWidth=parseInt($(settings.childNode).css("margin-left"))+parseInt($(settings.childNode).css("margin-right"))+parseInt($(settings.childNode).css("width")),sliderWidth=numChildren*itemWidth,resetPoint=sliderWidth;function activateScroll(){if(wrapperWidth=$(el).width(),myReq&&(cancelAnimationFrame(myReq),myReq=void 0),2*sliderWidth<wrapperWidth)animationFlag=!1,numChildren=$(children).length,sliderWidth=numChildren*itemWidth,$(el).find(settings.childWrapper).append(children);else{var twins=$(children).clone();animationFlag=!0,numChildren=$(children).length,sliderWidth=2*numChildren*itemWidth,resetPoint=numChildren*itemWidth,$(el).find(settings.childWrapper).append(children).append(twins)}animationFlag&&(myReq=window.requestAnimationFrame(step))}function step(){settings.forward?curXPos<=0?(curXPos+=1*v,$(el).find(settings.childWrapper).css("transform","translateX("+curXPos+"px)")):($(el).find(settings.childWrapper).css("transform","translateX("+-sliderWidth+")"),curXPos=-resetPoint):curXPos>=-resetPoint?(curXPos-=1*v,$(el).find(settings.childWrapper).css("transform","translateX("+curXPos+"px)")):($(el).find(settings.childWrapper).css("transform","translateX(0)"),curXPos=0),myReq=window.requestAnimationFrame(step)}children=$(el).find(settings.childNode).detach(),activateScroll(),window.addEventListener("resize",(function(){activateScroll()})),settings.pauseOnHover&&animationFlag&&$(el).hover((function(){cancelAnimationFrame(myReq)}),(function(){myReq=window.requestAnimationFrame(step)}))}})}(jQuery);
//# sourceURL=https://cdn2.hubspot.net/hub/39559523/hub_generated/template_assets/112660897544/1682393833771/marketplace/Sprocket_Rocket/sr-theme-free/js/grouploop-ll-1.0.3.js