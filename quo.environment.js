/* QuoJS v3.0.0 - 2014/1/2
   http://quojs.tapquo.com
   Copyright (c) 2014 Javi Jimenez Villar (@soyjavi) - Licensed MIT */
(function(){"use strict";!function(a){var b,c,d,e,f,g;return d=null,b=/WebKit\/([\d.]+)/,c={Android:/(Android)\s+([\d.]+)/,ipad:/(iPad).*OS\s([\d_]+)/,iphone:/(iPhone\sOS)\s([\d_]+)/,Blackberry:/(BlackBerry|BB10|Playbook).*Version\/([\d.]+)/,FirefoxOS:/(Mozilla).*Mobile[^\/]*\/([\d\.]*)/,webOS:/(webOS|hpwOS)[\s\/]([\d.]+)/},a.isMobile=function(){return this.environment(),d.isMobile},a.environment=function(){var a,b;return d||(b=navigator.userAgent,a=f(b),d={browser:e(b),isMobile:!!a,screen:g(),os:a}),d},e=function(a){var c;return c=a.match(b),c?c[0]:a},f=function(a){var b,d,e;for(d in c)if(e=a.match(c[d])){b={name:"iphone"===d||"ipad"===d||"ipod"===d?"ios":d,version:e[2].replace("_",".")};break}return b},g=function(){return{width:window.innerWidth,height:window.innerHeight}}}(Quo)}).call(this);