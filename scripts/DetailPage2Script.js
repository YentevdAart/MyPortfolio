// JavaScript Document
console.log("hi");

//main subheaddings dropdownlists//
var deEersteButton = document.querySelector(" main > ul li:nth-of-type(2) > ul:first-of-type li:first-of-type div button");
var deTweedeButton = document.querySelector(" main > ul li:nth-of-type(2) > ul:first-of-type li:nth-of-type(2) div button");


var deEerstePee = document.querySelector("main > ul li:nth-of-type(2) > ul:first-of-type li:first-of-type div h4");
var deTweedePee = document.querySelector("main > ul li:nth-of-type(2) > ul:first-of-type li:nth-of-type(2) div h4");


deEersteButton.addEventListener("click", revealFirst);
deTweedeButton.addEventListener("click", revealSecond);



deEerstePee.addEventListener("click", revealFirst);
deTweedePee.addEventListener("click", revealSecond);




function revealFirst(){
    var deLijst = document.querySelector(" main > ul li:nth-of-type(2) > ul:first-of-type li:first-of-type section");
      deLijst.classList.toggle("show");
    }
   
    
    function revealSecond(){
        var deLijst = document.querySelector(" main > ul li:nth-of-type(2) > ul:first-of-type li:nth-of-type(2) section");
          deLijst.classList.toggle("show");
    
        }
    
  