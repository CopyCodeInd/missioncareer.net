let params =
new URLSearchParams(
window.location.search
);

let country = params.get("country");
let course = params.get("course");
let level = params.get("level");
let intake = params.get("intake");
let ielts = params.get("ielts");
let gre = params.get("gre");
let gmat = params.get("gmat");
let budget = params.get("budget");


let div =
document.getElementById("results");


universities.forEach(u => {

if(
(!country || u.country==country) &&
(!course || u.course==course) &&
(!level || u.level==level) &&
(!intake || u.intake==intake) &&
(!ielts || u.ielts==ielts) &&
(!gre || u.gre==gre) &&
(!gmat || u.gmat==gmat) &&
(!budget || u.budget==budget)
){

div.innerHTML +=

`
<div class="uni-card">

<h3>${u.name}</h3>

<p>Country: ${u.country}</p>
<p>Course: ${u.course}</p>
<p>Level: ${u.level}</p>
<p>Intake: ${u.intake}</p>
<p>IELTS: ${u.ielts}</p>
<p>GRE: ${u.gre}</p>
<p>GMAT: ${u.gmat}</p>
<p>Budget: ${u.budget}</p>

</div>
`;

}

});