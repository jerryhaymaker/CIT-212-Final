var toggle = false;

document.body.querySelector(".GameDetailsButton4").addEventListener("click", function ()
{
    toggle=!toggle;
    if(toggle){
        document.body.querySelector(".GameDetails4").style.right="480px";
    }else {
        document.body.querySelector(".GameDetails4").style.right = "-500px";
    }
})