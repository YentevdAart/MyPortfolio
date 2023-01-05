// JavaScript Document
console.log("hi");

//main subheaddings dropdownlists//
var deEersteButton = document.querySelector(" main > ul li:nth-of-type(2) > ul:first-of-type li:first-of-type div button");
var deTweedeButton = document.querySelector(" main > ul li:nth-of-type(2) > ul:first-of-type li:nth-of-type(2) div button");
var deDerdeButton = document.querySelector("main > ul li:nth-of-type(2) > ul:first-of-type li:nth-of-type(3) div button");
var deVierdeButton = document.querySelector("main > ul li:nth-of-type(2) > ul:nth-of-type(2) li:first-of-type div button");
var deVijfdeButton = document.querySelector("main > ul li:nth-of-type(2) > ul:nth-of-type(2) li:nth-of-type(2) div button");
var deZesdeButton = document.querySelector("main > ul li:nth-of-type(2) > ul:nth-of-type(2) li:nth-of-type(3) div button");
var deZevendeButton = document.querySelector("main > ul li:nth-of-type(2) > ul:nth-of-type(2) li:nth-of-type(4) div button");
var deAchtsteButton = document.querySelector("main > ul li:nth-of-type(2) > ul:nth-of-type(2) li:nth-of-type(5) div button");
var deNegendeButton = document.querySelector("main > ul li:nth-of-type(2) > ul:nth-of-type(2) li:nth-of-type(6) div button");
var deTiendeButton = document.querySelector("main > ul li:nth-of-type(2) > ul:nth-of-type(2) li:nth-of-type(7) div button");

var deEerstePee = document.querySelector("main > ul li:nth-of-type(2) > ul:first-of-type li:first-of-type div h4");
var deTweedePee = document.querySelector("main > ul li:nth-of-type(2) > ul:first-of-type li:nth-of-type(2) div h4");
var deDerdePee = document.querySelector("main > ul li:nth-of-type(2) > ul:first-of-type li:nth-of-type(3) div h4");

var deVierdePee = document.querySelector("main > ul li:nth-of-type(2) > ul:nth-of-type(2) li:first-of-type div h4");
var deVijfdePee = document.querySelector("main > ul li:nth-of-type(2) > ul:nth-of-type(2) li:nth-of-type(2) div h4");
var deZesdePee = document.querySelector("main > ul li:nth-of-type(2) > ul:nth-of-type(2) li:nth-of-type(3) div h4");
var deZevendePee = document.querySelector("main > ul li:nth-of-type(2) > ul:nth-of-type(2) li:nth-of-type(4) div h4");
var deAchtstePee = document.querySelector("main > ul li:nth-of-type(2) > ul:nth-of-type(2) li:nth-of-type(5) div h4");
var deNegendePee = document.querySelector("main > ul li:nth-of-type(2) > ul:nth-of-type(2) li:nth-of-type(6) div h4");
var deTiendePee = document.querySelector("main > ul li:nth-of-type(2) > ul:nth-of-type(2) li:nth-of-type(7) div h4");




deEersteButton.addEventListener("click", revealFirst);
deTweedeButton.addEventListener("click", revealSecond);
deDerdeButton.addEventListener("click", revealThird);
deVierdeButton.addEventListener("click", revealFourth);
deVijfdeButton.addEventListener("click", revealFifth);
deZesdeButton.addEventListener("click", revealSixth);
deZevendeButton.addEventListener("click", revealSeventh);
deAchtsteButton.addEventListener("click", revealEighth);
deNegendeButton.addEventListener("click", revealNinth);
deTiendeButton.addEventListener("click", revealTenth);

deEerstePee.addEventListener("click", revealFirst);
deTweedePee.addEventListener("click", revealSecond);
deDerdePee.addEventListener("click", revealThird);
deVierdePee.addEventListener("click", revealFourth);
deVijfdePee.addEventListener("click", revealFifth);
deZesdePee.addEventListener("click", revealSixth);
deZevendePee.addEventListener("click", revealSeventh);
deAchtstePee.addEventListener("click", revealEighth);
deNegendePee.addEventListener("click", revealNinth);
deTiendePee.addEventListener("click", revealTenth);




function revealFirst(){
    var deLijst = document.querySelector(" main > ul li:nth-of-type(2) > ul:first-of-type li:first-of-type section");
      deLijst.classList.toggle("show");
    }
   
     
     
    
    function revealSecond(){
        var deLijst = document.querySelector(" main > ul li:nth-of-type(2) > ul:first-of-type li:nth-of-type(2) section");
          deLijst.classList.toggle("show");
    
        }
    
    function revealThird(){
        var deLijst = document.querySelector(" main > ul li:nth-of-type(2) > ul:first-of-type li:nth-of-type(3) section");
            deLijst.classList.toggle("show");
    
        }
    function revealFourth(){
        var deLijst = document.querySelector(" main > ul li:nth-of-type(2) > ul:nth-of-type(2) li:first-of-type section");
            deLijst.classList.toggle("show");
        
        }
    function revealFifth(){
        var deLijst = document.querySelector(" main > ul li:nth-of-type(2) > ul:nth-of-type(2) li:nth-of-type(2) section");
            deLijst.classList.toggle("show");
            
        }
    function revealSixth(){
        var deLijst = document.querySelector(" main > ul li:nth-of-type(2) > ul:nth-of-type(2) li:nth-of-type(3) section");
            deLijst.classList.toggle("show");
                
        }
    function revealSeventh(){
        var deLijst = document.querySelector(" main > ul li:nth-of-type(2) > ul:nth-of-type(2) li:nth-of-type(4) section");
            deLijst.classList.toggle("show");
                    
        }
    function revealEighth(){
        var deLijst = document.querySelector(" main > ul li:nth-of-type(2) > ul:nth-of-type(2) li:nth-of-type(5) section");
            deLijst.classList.toggle("show");
                        
        }
    function revealNinth(){
        var deLijst = document.querySelector(" main > ul li:nth-of-type(2) > ul:nth-of-type(2) li:nth-of-type(6) section");
            deLijst.classList.toggle("show");
                            
        } 
    function revealTenth(){
        var deLijst = document.querySelector(" main > ul li:nth-of-type(2) > ul:nth-of-type(2) li:nth-of-type(7) section");
            deLijst.classList.toggle("show");
                                
        } 
        
        