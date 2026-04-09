const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

const update = () => {

const target = +counter.getAttribute("data-target");

const count = +counter.innerText;

const inc = target / 200;

if(count < target){

counter.innerText = Math.ceil(count + inc);

setTimeout(update,10);

}else{

counter.innerText = target;

}

};

update();

});

/* COUNTER ANIMATION */

document.addEventListener("DOMContentLoaded", function () {

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

const target = parseInt(counter.getAttribute("data-target"));
const symbol = counter.getAttribute("data-symbol") || "";

let count = 0;

const speed = target / 100;

function updateCounter() {

count += speed;

if (count < target) {

counter.innerText = Math.floor(count) + symbol;

requestAnimationFrame(updateCounter);

} else {

counter.innerText = target + symbol;

}

}

updateCounter();

});

});

function searchUniversity() {

let country = document.getElementById("country").value;

let results = document.getElementById("results");

results.innerHTML = "";

if(country === "Germany"){

add("TU Berlin","Germany");
add("TU Munich","Germany");
add("RWTH Aachen","Germany");

}

if(country === "UK"){

add("Warwick","UK");
add("Manchester","UK");

}

if(country === "Canada"){

add("Toronto","Canada");
add("UBC","Canada");

}

if(country === "USA"){

add("Indiana University","USA");
add("NYU","USA");

}

if(country === "Australia"){

add("Melbourne","Australia");
add("Monash","Australia");

}

if(country === "Ireland"){

add("Trinity College","Ireland");

}

if(country === "Italy"){

add("Politecnico di Milano","Italy");

}

if(country === "France"){

add("Sorbonne","France");

}

if(country === "New Zealand"){

add("University of Auckland","NZ");

}

if(country === "Spain"){

add("University of Barcelona","Spain");

}

}

function add(name,country){

document.getElementById("results").innerHTML +=

`<div class="uni-card">

<h3>${name}</h3>
<p>${country}</p>

</div>`;

}

function goFinder(){

let country =
document.getElementById("country").value;

let course =
document.getElementById("course").value;

let level =
document.getElementById("level").value;

let intake =
document.getElementById("intake").value;

let url =
"results.html?country=" + country +
"&course=" + course +
"&level=" + level +
"&intake=" + intake;

window.location.href = url;

}