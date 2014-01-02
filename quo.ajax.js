/* QuoJS v3.0.0 - 2014/1/2
   http://quojs.tapquo.com
   Copyright (c) 2014 Javi Jimenez Villar (@soyjavi) - Licensed MIT */
(function(){"use strict";!function(a){var b,c,d,e,f,g,h,i,j,k,l;return b={TYPE:"GET",MIME:"json"},d={script:"text/javascript, application/javascript",json:"application/json",xml:"application/xml, text/xml",html:"text/html",text:"text/plain"},c=0,a.ajaxSettings={type:b.TYPE,async:!0,success:{},error:{},context:null,dataType:b.MIME,headers:{},xhr:function(){return new window.XMLHttpRequest},crossDomain:!1,timeout:0},a.ajax=function(c){var d,h,k,m;if(k=a.mix(a.ajaxSettings,c),k.type===b.TYPE?k.url+=a.serialize(k.data,"?"):k.data=a.serialize(k.data),e(k.url))return f(k);m=k.xhr(),m.onreadystatechange=function(){return 4===m.readyState?(clearTimeout(d),j(m,k)):void 0},m.open(k.type,k.url,k.async),i(m,k),k.timeout>0&&(d=setTimeout(function(){return l(m,k)},k.timeout));try{m.send(k.data)}catch(n){h=n,m=h,g("Resource not found",m,k)}return m},a.get=function(b,c,d,e){return a.ajax({url:b,data:c,success:d,dataType:e})},a.post=function(a,b,c,d){return h("POST",a,b,c,d)},a.put=function(a,b,c,d){return h("PUT",a,b,c,d)},a["delete"]=function(a,b,c,d){return h("DELETE",a,b,c,d)},a.json=function(b,c,d){return a.ajax({url:b,data:c,success:d})},a.serialize=function(a,b){var c,d;null==b&&(b=""),d=b;for(c in a)a.hasOwnProperty(c)&&(d!==b&&(d+="&"),d+=""+encodeURIComponent(c)+"="+encodeURIComponent(a[c]));return d===b?"":d},f=function(b){var d,e,f,g;return b.async?(e="jsonp"+ ++c,f=document.createElement("script"),g={abort:function(){return a(f).remove(),e in window?window[e]={}:void 0}},d=void 0,window[e]=function(c){return clearTimeout(d),a(f).remove(),delete window[e],k(c,b)},f.src=b.url.replace(RegExp("=\\?"),"="+e),a("head").append(f),b.timeout>0&&(d=setTimeout(function(){return l(g,b)},b.timeout)),g):console.error("QuoJS.ajax: Unable to make jsonp synchronous call.")},j=function(a,b){a.status>=200&&a.status<300||0===a.status?b.async&&k(a,b):g("QuoJS.ajax: Unsuccesful request",a,b)},k=function(a,b){b.success.call(b.context,a)},g=function(a,b,c){c.error.call(c.context,a,b,c)},i=function(a,b){var c;b.contentType&&(b.headers["Content-Type"]=b.contentType),b.dataType&&(b.headers.Accept=d[b.dataType]);for(c in b.headers)a.setRequestHeader(c,b.headers[c])},l=function(a,b){a.onreadystatechange={},a.abort(),g("QuoJS.ajax: Timeout exceeded",a,b)},h=function(b,c,d,e,f){return a.ajax({type:b,url:c,data:d,success:e,dataType:f,contentType:"application/x-www-form-urlencoded"})},e=function(a){return RegExp("=\\?").test(a)}}(Quo)}).call(this);