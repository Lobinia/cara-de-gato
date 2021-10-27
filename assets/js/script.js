document.querySelector(".menu_mobile").addEventListener("click", function(){

    if(document.querySelector(".headermenu nav ul").style.display == 'flex') {

        document.querySelector(".headermenu nav ul").style.display = 'none';

    } else {

        document.querySelector(".headermenu nav ul").style.display = 'flex';

    }

})