!function(e,t,n){var a=[],i=[],o={_version:"3.6.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){i.push({name:e,fn:t,options:n})},addAsyncTest:function(e){i.push({name:null,fn:e})}},l=function(){};function s(e,t){return typeof e===t}l.prototype=o,l=new l;var r,c,A=t.documentElement,g="svg"===A.nodeName.toLowerCase();function d(e){var t=A.className,n=l._config.classPrefix||"";if(g&&(t=t.baseVal),l._config.enableJSClass){var a=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(a,"$1"+n+"js$2")}l._config.enableClasses&&(t+=" "+n+e.join(" "+n),g?A.className.baseVal=t:A.className=t)}function m(e,t){if("object"==typeof e)for(var n in e)r(e,n)&&m(n,e[n]);else{var a=(e=e.toLowerCase()).split("."),i=l[a[0]];if(2==a.length&&(i=i[a[1]]),void 0!==i)return l;t="function"==typeof t?t():t,1==a.length?l[a[0]]=t:(!l[a[0]]||l[a[0]]instanceof Boolean||(l[a[0]]=new Boolean(l[a[0]])),l[a[0]][a[1]]=t),d([(t&&0!=t?"":"no-")+a.join("-")]),l._trigger(e,t)}return l}r=s(c={}.hasOwnProperty,"undefined")||s(c.call,"undefined")?function(e,t){return t in e&&s(e.constructor.prototype[t],"undefined")}:function(e,t){return c.call(e,t)},o._l={},o.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),l.hasOwnProperty(e)&&setTimeout(function(){l._trigger(e,l[e])},0)},o._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout(function(){var e;for(e=0;e<n.length;e++)(0,n[e])(t)},0),delete this._l[e]}},l._q.push(function(){o.addTest=m}),l.addAsyncTest(function(){var e=[{uri:"data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",name:"webp"},{uri:"data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",name:"webp.alpha"},{uri:"data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",name:"webp.animation"},{uri:"data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",name:"webp.lossless"}],t=e.shift();function n(e,t,n){var a=new Image;function i(t){var i=!(!t||"load"!==t.type)&&1==a.width;m(e,"webp"===e&&i?new Boolean(i):i),n&&n(t)}a.onerror=i,a.onload=i,a.src=t}n(t.name,t.uri,function(t){if(t&&"load"===t.type)for(var a=0;a<e.length;a++)n(e[a].name,e[a].uri)})}),function(){var e,t,n,o,r,c;for(var A in i)if(i.hasOwnProperty(A)){if(e=[],(t=i[A]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(o=s(t.fn,"function")?t.fn():t.fn,r=0;r<e.length;r++)1===(c=e[r].split(".")).length?l[c[0]]=o:(!l[c[0]]||l[c[0]]instanceof Boolean||(l[c[0]]=new Boolean(l[c[0]])),l[c[0]][c[1]]=o),a.push((o?"":"no-")+c.join("-"))}}(),d(a),delete o.addTest,delete o.addAsyncTest;for(var f=0;f<l._q.length;f++)l._q[f]();e.Modernizr=l}(window,document);var c=document.getElementById("canvas"),ctx=c.getContext("2d"),width=canvas.width,dWidth=window.outerWidth,layout=dWidth>1025?"desktop":dWidth<768?"mobile":"tablet",webpDetect=document.getElementsByClassName("webp").length,center=width/2,deg=12,sliceDeg=24,radius=center-25,button=document.getElementById("button"),colorIdx=0,colors=["#D89731","#F93424","#CA0C6C","#5FCA6C"],slices=[{text:"1 IPHONE 11 PRO",image:"./img/iPhone.png"},{text:"Fitbit Wireless Charge ",image:"./img/fitbit.png"},{text:"$350 EGIFTER",image:"./img/Egifter.png"},{text:"4 LOTTERY TICKETS",image:"./img/Lottery.png"},{text:"2 FREE SPINS",image:"./img/free-spins.png"},{text:"1 IPHONE 11 PRO",image:"./img/iPhone.png"},{text:"1 Samsung Galaxy 510",image:"./img/Samsung.png"},{text:"$100 AMAZON GIFTCARD",image:"./img/Amazon-$100.png"},{text:"1 KINDLE PAPERWHITE",image:"./img/Kindle.png"},{text:"1 Beats Solo2 Wireless",image:"./img/Beat.png"},{text:"1 SAMSUNG GEAR VR",image:"./img/Samsung-VR.png"},{text:"$250 AMAZON GIFT CARD",image:"./img/iPhone.png"},{text:"1 KEEP KEY",image:"./img/keepkey.png"},{text:"1 GOPRO Hero Session",image:"./img/GoPro.png"},{text:"$2000 AMAZON GIFT CARD",image:"./img/Amazon-$2000.png"}];function deg2rad(e){return e*Math.PI/180}function drawText(e,t,n){var a=t.split(" ");if(ctx.save(),ctx.translate(center,center),ctx.rotate(deg2rad(e+10)),ctx.textAlign="center",ctx.font="mobile"===layout?"bolder 3vw Arial":"desktop"===layout?"bolder 0.8vw Arial":"bolder 1.7vw Arial",n===colors[2]?(ctx.shadowOffsetX=2,ctx.shadowOffsetY=1,ctx.shadowColor="rgba(0,0,0,0.7)",ctx.fillStyle="#fff"):ctx.fillStyle="#000",a.length>2){var i=a[3]?a[3]:"",o=[a[0],a[1]].join(" "),l=[a[2],i].join(" ");o.length<8&&(o=[a[0],a[1],a[2]].join(" "),l=[i].join(" ")),ctx.fillText(o,130,2),ctx.fillText(l,130,16)}else ctx.fillText(t,130,11);ctx.restore()}function drawSlice(e,t){ctx.beginPath(),ctx.fillStyle=t,ctx.moveTo(center,center),ctx.arc(center,center,radius,deg2rad(e),deg2rad(e+sliceDeg)),ctx.lineTo(center,center),ctx.stroke(),ctx.closePath(),ctx.fill()}function loadImg(e,t){var n=new Image;return document.getElementsByClassName("webp").length>0&&(e=e.replace("./img/","./dist/webp/").replace("png","webp")),n.src=e,t===slices.length-1&&(n.onload=setSlices),n}ctx.beginPath(),ctx.arc(center,center,center-5,0,2*Math.PI,!0),ctx.fillStyle="#1d1d1d",ctx.fill(),ctx.beginPath(),ctx.arc(center,center,radius,0,2*Math.PI,!0),ctx.fillStyle="white",ctx.fill();var v=width/100*7;function addImg(e,t){ctx.save(),ctx.translate(center,center),ctx.rotate(deg2rad(e+10)),ctx.drawImage(t,180,-15,v,v),ctx.restore()}function setSlices(){for(var e=0;e<slices.length;e++)ctx.lineWidth=3,drawSlice(deg,slices[e].bg),drawText(deg,slices[e].text,slices[e].bg),addImg(deg,slices[e].imgObj),deg+=sliceDeg}button.addEventListener("click",start_animation);var count=document.getElementById("count"),countVal=3,lastAngle="",clicks=0,getRandom=()=>{var e=Math.floor(360*Math.random()+1);return rm=e%24,cleanvalue=e-rm+360,cleanvalue},stopvalue=getRandom();function start_animation(){++clicks>3?alert("No more attempts. (Refresh the window)"):(countVal--,count.innerText=countVal,lastAngle=+lastAngle+stopvalue,console.clear(),c.style.transform="rotate("+lastAngle+"deg)",c.style.webkitTransform="rotate("+lastAngle+"deg)",stopvalue=getRandom())}window.onload=(()=>{for(var e=0;e<slices.length;e++){var t=loadImg(slices[e].image,e);slices[e].imgObj=t,colorIdx>3&&(colorIdx=0),slices[e].bg=colors[colorIdx],colorIdx++}});