var pup1 = "pup1.jpg";
var pup2 = "pup2.jpg";
var pup3 = "pup3.jpg"; 
var pup4 = "pup4.jpg"; 
var pup5 = "pup5.jpg";
var ele = document.getElementById("pic") 
var picAr = [pup1,pup2,pup3,pup4,pup5];
var picker = Math.floor(Math.random() * 5);
ele.setAttribute("src",picAr[picker]);
