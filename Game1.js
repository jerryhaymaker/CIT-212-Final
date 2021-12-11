var toggle = false;

document.body.querySelector(".GameDetailsButton1").addEventListener("click", function ()
{
    toggle=!toggle;
    if(toggle){
        document.body.querySelector(".GameDetails1").style.right="600px";
    }else {
        document.body.querySelector(".GameDetails1").style.right = "-500px";
    }
})