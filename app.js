(function app() {

    "use strict";

    var divEnfant = document.getElementById("enfant");
    var divParent = document.getElementById("parent");
    var btn = document.getElementById("bouton");




    var changeColor = function changeColor(clic) {



        clic.addEventListener("click", function () {


            divParent.classList.toggle("add");
            divEnfant.classList.toggle("ajout");
            console.log(divParent);
        });

    };





    var start = function start() {
        changeColor(btn);
        console.log("dom ready");



    }

    window.addEventListener("DOMContentLoaded", start);


}())
