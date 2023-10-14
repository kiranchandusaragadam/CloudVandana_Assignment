let fname = document.querySelector("#fname");
let lname = document.querySelector("#lname");
let email = document.querySelector("#email");
let mobile = document.querySelector("#mobile");
let dob = document.querySelector("#DOB");
let country = document.querySelector("#country");
let male = document.querySelector("#male");
let female = document.querySelector("#female");

let form = document.querySelector("form");
let popup = document.querySelector(".popup-container");
let okBtn = document.querySelector(".okBtn");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // now display the filled deatils on popup container
  document.querySelector(".firstName").innerHTML += fname.value;
  document.querySelector(".lastName").innerHTML += lname.value;
  document.querySelector(".email").innerHTML += email.value;
  document.querySelector(".mobile").innerHTML += mobile.value;
  document.querySelector(".dob").innerHTML += dob.value;
  document.querySelector(".country").innerHTML += country.value;
  let gen = male.checked ? "Male" : "Female";
  document.querySelector(".gender").innerHTML += gen;

  popup.style.display = "block";
});

okBtn.addEventListener("click", (e) => {
  popup.style.display = "none";
  form.reset();
});
