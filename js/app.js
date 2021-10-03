var atarod = document.getElementById("stars_1");
var atarod_1 = document.querySelector(".atarod img");

var nahid = document.getElementById("stars_2");
var nahid_1 = document.querySelector(".nahid img");

var zamin = document.getElementById("stars_3");
var zamin_1 = document.querySelector(".zamin img");

var merikh = document.getElementById("stars_4");
var merikh_1 = document.querySelector(".merikh img");

var moshtari = document.getElementById("stars_5");
var moshtari_1 = document.querySelector(".moshtari img");

var zohal = document.getElementById("stars_6");
var zohal_1 = document.querySelector(".zohal img");
function show_1(){
    atarod.classList.add("show");
    atarod_1.onclick = function(){hide_1()};
}
function hide_1(){
    atarod.classList.remove("show");
    atarod_1.onclick = function(){show_1()};
}

function show_2(){
    nahid.classList.add("show");
    nahid_1.onclick = function(){hide_2()};
}
function hide_2(){
    nahid.classList.remove("show");
    nahid_1.onclick = function(){show_2()};
}

function show_3(){
    zamin.classList.add("show");
    zamin_1.onclick = function(){hide_3()};
}
function hide_3(){
    zamin.classList.remove("show");
    zamin_1.onclick = function(){show_3()};
}

function show_4(){
    merikh.classList.add("show");
    merikh_1.onclick = function(){hide_4()};
}
function hide_4(){
    merikh.classList.remove("show");
    merikh_1.onclick = function(){show_4()};
}

function show_5(){
    moshtari.classList.add("show");
    moshtari_1.onclick = function(){hide_5()};
}
function hide_5(){
    moshtari.classList.remove("show");
    moshtari_1.onclick = function(){show_5()};
}
function show_6(){
    zohal.classList.add("show");
    zohal_1.onclick = function(){hide_6()};
}
function hide_6(){
    zohal.classList.remove("show");
    zohal_1.onclick = function(){show_6()};
}