
const stage = Array.from(document.querySelectorAll("form .stage"));
const nextBtn = Array.from(document.querySelectorAll("form .btn-next"));
const prevBtn = Array.from(document.querySelectorAll("form .btn-prev"));
const submitBtn = document.querySelector("form .btn-submit");
const form = document.querySelector("form");

let index = 0;


const mail = document.getElementById("mail");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const pass = document.getElementById("pass");
const tel = document.getElementById("tel");

const mailError = document.getElementById("error3");
const passError = document.getElementById("error4");
const fnameError = document.getElementById("error");
const lnameError = document.getElementById("error2");
const telError = document.getElementById("error5");




const isValidEmail = (mail) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(mail).toLowerCase());
};

mail.addEventListener("keypress", () => {
  if (isValidEmail(mail.value)) {
    mailError.innerText = "";
  }
});

pass.addEventListener("keypress", () => {
  if (pass.value.length >= 5) {
    passError.innerText = "";
  }
});

fname.addEventListener("keypress", () => {
  if (fname.value.length >= 3) {
    fnameError.innerText = "";
  }
});

lname.addEventListener("keypress", () => {
  if (fname.value.length >= 4) {
    lnameError.innerText = "";
  }
});

tel.addEventListener("keypress", () => {
  if (tel.value.length >= 4) {
    telError.innerText = "";
  }
});



nextBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (mail.value === "") {
      mailError.innerText = "Email Cannot be Empty";
    } else if (!isValidEmail(mail.value)) {
      mailError.innerText = "Provide an valid email";
    } else if (pass.value === "") {
      passError.innerText = "Password Required With email";
    } else if (fname.value === "" && index === 1) {
      fnameError.innerText = "First Name is required";
    } else if (lname.value === "" && index === 1) {
      lnameError.innerText = "Last Name is required";
    } 
 
    else {
      changeStep("next");
    }
  });
});


prevBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    changeStep("prev");
  });
});

function changeStep(btn) {

  const active = document.querySelector("form .stage.active");
  index = stage.indexOf(active);
  stage[index].classList.remove("active");
  if (btn === "next") {
    index++;
  } else if (btn === "prev") {
    index--;
  }
  stage[index].classList.add("active");
}

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    return false;
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputs = [];
  form.querySelectorAll("input").forEach((input) => {
    const { value } = input;
    inputs.push({ value });
  });
  for (let arrVal of inputs) {
    let text = "";
    for (let objKey in arrVal) {
      text += arrVal[objKey] + "   ";
    }
    console.log(text);
  }
  form.reset();
  alert("Form Submitted!");
});
