/* QuoJS v3.0.0 - 2014/1/2
   http://quojs.tapquo.com
   Copyright (c) 2014 Javi Jimenez Villar (@soyjavi) - Licensed MIT */
(function(){"use strict";!function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y;return h=null,c=void 0,e={},d=[],b=[],i=void 0,g=650,f=["touch","tap","singleTap","doubleTap","hold","swipe","swiping","swipeLeft","swipeRight","swipeUp","swipeDown","rotate","rotating","rotateLeft","rotateRight","pinch","pinching","pinchIn","pinchOut","drag","dragLeft","dragRight","dragUp","dragDown"],f.forEach(function(b){return a.fn[b]=function(c){var d;return d="touch"===b?"touchend":b,a(document.body).delegate(this.selector,d,c)},this}),a(document).ready(function(){return s()}),s=function(){var b;return b=a(document.body),b.bind("touchstart",v),b.bind("touchmove",u),b.bind("touchend",t),b.bind("touchcancel",m)},v=function(b){var f,h,k,l;return c=b,k=Date.now(),f=k-(e.last||k),i&&clearTimeout(i),l=p(b),h=l.length,d=o(l,h),e.el=a(w(l[0].target)),e.fingers=h,e.last=k,e.taps||(e.taps=0),e.taps++,1===h?(h>=1&&(e.gap=f>0&&250>=f),setTimeout(q,g)):2===h?(e.initial_angle=parseInt(j(d),10),e.initial_distance=parseInt(n(d),10),e.angle_difference=0,e.distance_difference=0):void 0},u=function(a){var d,f;return c=a,e.el&&(f=p(a),d=f.length,d===e.fingers?(b=o(f,d),r(a)&&y("swiping"),2===d&&(l(),k(),a.preventDefault())):m()),!0},r=function(){var a,c,f;return a=!1,b[0]&&(c=Math.abs(d[0].x-b[0].x)>30,f=Math.abs(d[0].y-b[0].y)>30,a=e.el&&(c||f),e.prevSwipe=a),a},t=function(a){var f,g,h,j,k;return c=a,y("touch"),1===e.fingers?2===e.taps&&e.gap?(y("doubleTap"),m()):r()||e.prevSwipe?(y("swipe"),k=x(d[0].x,b[0].x,d[0].y,b[0].y),y("swipe"+k),m()):(y("tap"),1===e.taps&&(i=setTimeout(function(){return y("singleTap"),m()},100))):(f=!1,e.angle_difference&&(y("rotate",{angle:e.angle_difference}),j=e.angle_difference>0?"rotateRight":"rotateLeft",y(j,{angle:e.angle_difference}),f=!0),e.distance_difference&&(y("pinch",{angle:e.distance_difference}),h=e.distance_difference>0?"pinchOut":"pinchIn",y(h,{distance:e.distance_difference}),f=!0),!f&&b[0]&&(Math.abs(d[0].x-b[0].x)>10||Math.abs(d[0].y-b[0].y)>10)&&(y("drag"),g=x(d[0].x,b[0].x,d[0].y,b[0].y),y("drag"+g),f=!0),m()),c=void 0},o=function(a,b){var c,d;for(d=[],c=0,a=a[0].targetTouches?a[0].targetTouches:a;b>c;)d.push({x:a[c].pageX,y:a[c].pageY}),c++;return d},l=function(){var a,c,d,f;if(a=parseInt(j(b),10),c=parseInt(e.initial_angle-a,10),Math.abs(c)>20||0!==e.angle_difference){for(d=0,f=e.angle_difference<0?-1:1;Math.abs(c-e.angle_difference)>90&&d++<10;)c+=180*f;return e.angle_difference=parseInt(c,10),y("rotating",{angle:e.angle_difference})}},k=function(){var a,c;return c=parseInt(n(b),10),a=e.initial_distance-c,Math.abs(a)>10?(e.distance_difference=a,y("pinching",{distance:a})):void 0},y=function(a,f){return e.el?(f=f||{},b[0]&&(f.iniTouch=e.fingers>1?d:d[0],f.currentTouch=e.fingers>1?b:b[0]),e.el.trigger(a,f,c)):void 0},m=function(){return d=[],b=[],e={},clearTimeout(i)},j=function(a){var b,c,d;return b=a[0],c=a[1],d=Math.atan(-1*(c.y-b.y)/(c.x-b.x))*(180/Math.PI),0>d?d+180:d},n=function(a){var b,c;return b=a[0],c=a[1],-1*Math.sqrt((c.x-b.x)*(c.x-b.x)+(c.y-b.y)*(c.y-b.y))},p=function(b){return a.isMobile()?b.touches:[b]},w=function(a){return"tagName"in a?a:a.parentNode},x=function(a,b,c,d){var e,f;return e=Math.abs(a-b),f=Math.abs(c-d),e>=f?a-b>0?"Left":"Right":c-d>0?"Up":"Down"},q=function(){return e.last&&Date.now()-e.last>=g?(r()||y("hold"),e.taps=0):void 0}}(Quo)}).call(this);