const submitButton = document.querySelector(".submit");
const inputs = document.querySelectorAll("input");
const fullName = document.querySelector(".full-name");
const idCard = document.querySelector(".id-card");
const faculty = document.querySelector(".faculty");
const birthday = document.querySelector(".birthday");
const address = document.querySelector(".address");

inputs.forEach((input) => {
  input.addEventListener("click", () => {
    input.style.color = "black";
  });
});

submitButton.addEventListener("click", () => {
  checkInputs();
});

function checkInputs() {
  const patterns = {
    fullName: /^.+ [A-Za-zА-Яа-яЁҐЄІЇ]\.[A-Za-zА-Яа-я]\.$/,
    idCard: /^[A-Za-zА-Яа-яЁҐЄІЇ]{2} №\d{6}$/,
    faculty: /^[A-Za-zА-Яа-яЁҐЄІЇ]+$/,
    birthday: /^\d{2}\.\d{2}\.\d{4}$/,
    address: /^м\.\s[A-ZА-ЯЁҐЄІЇ][a-zа-яёєії]*$/,
  };

  const classesNames = {
    fullName: ".correct-name",
    idCard: ".correct-idCard",
    faculty: ".correct-faculty",
    birthday: ".correct-birthday",
    address: ".correct-address",
  };

  checkInput(patterns.fullName, fullName, classesNames.fullName);
  checkInput(patterns.idCard, idCard, classesNames).idCard;
  checkInput(patterns.faculty, faculty, classesNames.faculty);
  checkInput(patterns.birthday, birthday, classesNames.birthday);
  checkInput(patterns.address, address, classesNames.address);
}

function checkInput(pattern, enteredData, className) {
  const resultLineValue = document.querySelector(className).textContent;

  if (pattern.test(enteredData.value)) {
    if (resultLineValue.includes(enteredData.value)) {
    } else {
      resultLineValue += enteredData.value;
    }
    enteredData.style.color = "#00FF00";
  } else {
    enteredData.style.color = "red";
  }
}
