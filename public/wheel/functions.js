var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
var width = canvas.width;
var dWidth = window.outerWidth;
var layout = dWidth > 1025? "desktop" : ( dWidth < 768? "mobile" : "tablet");
var webpDetect = document.getElementsByClassName("webp").length;
var center = width/2;
var deg = 12;
var sliceDeg = 360/15;
var radius= center - 25;
var button = document.getElementById("button");
var colorIdx = 0;
var colors = ["#D89731", "#F93424", "#CA0C6C", "#5FCA6C"];

var slices = [
    {text: "1 IPHONE 11 PRO", image: "./img/iPhone.png"},
    {text: "Fitbit Wireless Charge ", image: "./img/fitbit.png"},
    {text: "$350 EGIFTER", image: "./img/Egifter.png"},
    {text: "4 LOTTERY TICKETS", image: "./img/Lottery.png"},
    {text: "2 FREE SPINS", image: "./img/free-spins.png"},
    {text: "1 IPHONE 11 PRO", image: "./img/iPhone.png"},
    {text: "1 Samsung Galaxy 510", image: "./img/Samsung.png"},
    {text: "$100 AMAZON GIFTCARD", image: "./img/Amazon-$100.png"},
    {text: "1 KINDLE PAPERWHITE", image: "./img/Kindle.png"},
    {text: "1 Beats Solo2 Wireless", image: "./img/Beat.png"},
    {text: "1 SAMSUNG GEAR VR", image: "./img/Samsung-VR.png"},
    {text: "$250 AMAZON GIFT CARD", image: "./img/iPhone.png"},
    {text: "1 KEEP KEY", image: "./img/keepkey.png"},
    {text: "1 GOPRO Hero Session", image: "./img/GoPro.png"},
    {text: "$2000 AMAZON GIFT CARD", image: "./img/Amazon-$2000.png"}
];
function deg2rad(deg) {
    return deg * Math.PI/180;
}

//set images and colors for slices:

//create container
ctx.beginPath();
ctx.arc(center, center, center - 5, 0, Math.PI * 2 , true);
ctx.fillStyle = "#1d1d1d";
ctx.fill();

//inner wheel
ctx.beginPath();
ctx.arc(center, center, radius, 0, Math.PI * 2 , true);
ctx.fillStyle = "white";
ctx.fill();

function drawText(deg, text, color) {
    var t = text.split(" ");

    ctx.save();
    ctx.translate(center, center);
    ctx.rotate(deg2rad(deg + 10));
    ctx.textAlign = "center";

    if (layout === "mobile") {
        ctx.font = "bolder 3vw Arial";
    } else if (layout === "desktop"){
        ctx.font = "bolder 0.8vw Arial";
    } else {
        ctx.font = "bolder 1.7vw Arial";
    }

    if (color === colors[2]) { // if bg is pinl set text to be white
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 1;
        ctx.shadowColor = "rgba(0,0,0,0.7)";
        ctx.fillStyle = "#fff";
    } else {
        ctx.fillStyle = "#000";  
    }
    if ( t.length > 2 ) {
        var word4 = t[3] ? t[3] : "";
        var line1 = [t[0], t[1]].join(' ');
        var line2 = [t[2], word4].join(' ');

        if (line1.length < 8) {
            line1 = [t[0], t[1], t[2]].join(' ');
           line2 = [word4].join(' ');
        }   
        ctx.fillText(line1, 130, 2);
        ctx.fillText(line2, 130, 16);
    } else {
        ctx.fillText(text, 130, 11);
    }

    ctx.restore();
}
function drawSlice(deg, color){
    ctx.beginPath();
    ctx.fillStyle = color;
    ctx.moveTo(center, center);
    ctx.arc(center, center, radius, deg2rad(deg), deg2rad(deg+sliceDeg));
    ctx.lineTo(center, center);
    ctx.stroke();
    
    ctx.closePath();
    ctx.fill();
  }

function loadImg(src, idx) {
    var icon = new Image();

    /*webp optimization*/
    if (document.getElementsByClassName("webp").length > 0) {
        src= src.replace("./img/", "./dist/webp/").replace("png", "webp");
    }
    icon.src = src;

    if (idx === slices.length - 1) {
        icon.onload = setSlices;
    }
    return icon;
}

var v = (width/100) * 7;
function addImg (deg, icon) {
        ctx.save();
        ctx.translate(center, center);
        ctx.rotate(deg2rad(deg + 10));
        ctx.drawImage(icon, 180, -15, v, v);
        ctx.restore();
}
function setSlices () {
    for(var i=0; i<slices.length; i++){
        ctx.lineWidth = 3;
        drawSlice(deg, slices[i].bg);
        drawText(deg, slices[i].text, slices[i].bg);
        addImg(deg, slices[i].imgObj);
        deg += sliceDeg;
    }
}
button.addEventListener("click", start_animation);
var count = document.getElementById('count');
var countVal = 3;
// Storage for the previous angle
var lastAngle = "";
var clicks = 0;
var getRandom = () => {
    var rawvalue = Math.floor((Math.random() * 360) + 1);
    rm = rawvalue % 24;
    cleanvalue = rawvalue - rm + 360;
    return cleanvalue;
};
var stopvalue = getRandom();
function start_animation(){ 
    clicks ++;

    if ( clicks > 3) {
        alert("No more attempts. (Refresh the window)");
    } else {
    countVal--;

    count.innerText = countVal;
  // Update the total angle needed
  lastAngle = +lastAngle + stopvalue;
  
  // For testing:
  console.clear();
//   console.log("Current total angle: " + lastAngle);
  c.style.transform = "rotate(" + lastAngle + "deg)";
  c.style.webkitTransform = "rotate(" + lastAngle + "deg)";
  stopvalue = getRandom();
    }

}

window.onload = () => {
    for(var i=0; i<slices.length; i++){ 

        var imgObj = loadImg(slices[i].image, i);
        slices[i].imgObj = imgObj;
    
        if (colorIdx > 3) colorIdx = 0;
        slices[i].bg = colors[colorIdx];
        colorIdx++;

    }
};

