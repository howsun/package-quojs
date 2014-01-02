/* QuoJS v3.0.0 - 2014/1/2
   http://quojs.tapquo.com
   Copyright (c) 2014 Javi Jimenez Villar (@soyjavi) - Licensed MIT */
(function(){"use strict";var a;a=function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q;return d=[],h=Object.prototype,g=/^\s*<(\w+|!)[^>]*>/,c=[1,9,11],b=/^\.([\w-]+)$/,f=/^#[\w\d-]+$/,k=/^[\w-]+$/,i=document.createElement("table"),j=document.createElement("tr"),e={tr:document.createElement("tbody"),tbody:i,thead:i,tfoot:i,td:j,th:j,"*":document.createElement("div")},a=function(b,c){var d;return b?"function"===a.toType(b)?a(document).ready(b):(d=o(b,c),p(d,b)):p()},a.query=function(a,c){var d;return b.test(c)?d=a.getElementsByClassName(c.replace(".","")):k.test(c)?d=a.getElementsByTagName(c):f.test(c)&&a===document?(d=a.getElementById(c.replace("#","")),d||(d=[])):d=a.querySelectorAll(c),d.nodeType?[d]:Array.prototype.slice.call(d)},a.extend=function(a){return Array.prototype.slice.call(arguments,1).forEach(function(b){var c,d;d=[];for(c in b)d.push(a[c]=b[c]);return d}),a},a.toType=function(a){return h.toString.call(a).match(/\s([a-z|A-Z]+)/)[1].toLowerCase()},a.each=function(b,c){var d,e,f,g,h;if(e=void 0,f=void 0,"array"===a.toType(b))for(e=g=0,h=b.length;h>g;e=++g)d=b[e],c.call(d,e,d)===!1;else for(f in b)c.call(b[f],f,b[f])===!1;return b},a.map=function(b,c){var d,e,f,g;if(g=[],d=void 0,e=void 0,"array"===a.toType(b))for(d=0;d<b.length;)f=c(b[d],d),null!=f&&g.push(f),d++;else for(e in b)f=c(b[e],e),null!=f&&g.push(f);return m(g)},a.mix=function(){var a,b,c,d,e;for(c={},a=0,d=arguments.length;d>a;){b=arguments[a];for(e in b)q(b,e)&&void 0!==b[e]&&(c[e]=b[e]);a++}return c},p=function(a,b){return null==b&&(b=""),a=a||d,a.selector=b,a.__proto__=p.prototype,a},o=function(b,d){var e,f;return e=null,f=a.toType(b),"array"===f?e=l(b):"string"===f&&g.test(b)?(e=n(b.trim(),RegExp.$1),b=null):"string"===f?(e=a.query(document,b),d&&(e=1===e.length?a.query(e[0],d):a.map(function(){return a.query(e,d)}))):(c.indexOf(b.nodeType)>=0||b===window)&&(e=[b],b=null),e},n=function(b,c){var d;return null==c&&(c="*"),c in e||(c="*"),d=e[c],d.innerHTML=""+b,a.each(Array.prototype.slice.call(d.childNodes),function(){return d.removeChild(this)})},l=function(a){return a.filter(function(a){return null!=a?a:void 0})},m=function(a){return a.length>0?d.concat.apply(d,a):a},q=function(a,b){return h.hasOwnProperty.call(a,b)},p.prototype=a.fn={},a.fn.each=function(a){return this.forEach(function(b,c){return a.call(b,c,b)}),this},a.fn.filter=function(b){return a(d.filter.call(this,function(c){return c.parentNode&&a.query(c.parentNode,b).indexOf(c)>=0}))},a.fn.forEach=d.forEach,a.fn.indexOf=d.indexOf,a}(),this.Quo=this.$$=a}).call(this);