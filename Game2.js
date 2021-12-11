var toggle = false;

document.body.querySelector(".GameDetailsButton2").addEventListener("click", function ()
{
    toggle=!toggle;
    if(toggle){
        document.body.querySelector(".GameDetails2").style.right="480px";
    }else {
        document.body.querySelector(".GameDetails2").style.right = "-500px";
    }
})