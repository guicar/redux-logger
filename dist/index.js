!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.reduxLogger=t():e.reduxLogger=t()}(this,function(){return function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={exports:{},id:n,loaded:!1};return e[n].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){o(1),e.exports=o(1)},function(e,t){"use strict";function o(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];return function(t){var o=t.getState;return function(t){return function(c){var i=e.level,u=e.logger,f=e.collapsed,d=e.predicate,a=e.duration,l=void 0===a?!1:a,p=e.timestamp,s=void 0===p?!0:p,g=e.transformer,v=void 0===g?function(e){return e}:g,x=e.actionTransformer,m=void 0===x?function(e){return e}:x,y=u||window.console;if("undefined"==typeof y)return t(c);if("function"==typeof d&&!d(o,c))return t(c);var w=r.now(),b=v(o()),h=t(c),E=r.now()-w,F=v(o()),j=new Date,A="function"==typeof f?f(o,c):f,C=s?" @ "+j.getHours()+":"+n(j.getMinutes())+":"+n(j.getSeconds()):"",D=l?" in "+E.toFixed(2)+" ms":"",L=m(c),M="action "+L.type+C+D;try{A?y.groupCollapsed(M):y.group(M)}catch(S){y.log(M)}i?(y[i]("%c prev state","color: #9E9E9E; font-weight: bold",b),y[i]("%c action","color: #03A9F4; font-weight: bold",c),y[i]("%c next state","color: #4CAF50; font-weight: bold",F)):(y.log("%c prev state","color: #9E9E9E; font-weight: bold",b),y.log("%c action","color: #03A9F4; font-weight: bold",c),y.log("%c next state","color: #4CAF50; font-weight: bold",F));try{y.groupEnd()}catch(S){y.log("—— log end ——")}return h}}}}Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return("0"+e).slice(-2)},r="undefined"!=typeof performance&&"function"==typeof performance.now?performance:Date;t["default"]=o,e.exports=t["default"]}])});