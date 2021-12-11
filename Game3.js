var toggle = false;

document.body.querySelector(".GameDetailsButton3").addEventListener("click", function ()
{
    toggle=!toggle;
    if(toggle){
        document.body.querySelector(".GameDetails3").style.right="600px";
    }else {
        document.body.querySelector(".GameDetails3").style.right = "-500px";
    }
})