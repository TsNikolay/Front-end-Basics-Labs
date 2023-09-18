const button = document.querySelector(".submit");
const inputs = document.querySelectorAll("input");

button.addEventListener("click", () => {
  checkInputs();
});

inputs.forEach((input) => {
  input.addEventListener("click", () => {
    input.style.color = "black";
  });
});

function checkInputs() {
  const name = document.querySelector(".full-name");
  const idCard = document.querySelector(".id-card");
  const faculty = document.querySelector(".faculty");
  const birthday = document.querySelector(".birthday");
  const address = document.querySelector(".address");

  const patterns = {
    name: /^.+ [A-Za-zА-Яа-яЁҐЄІЇ]\.[A-Za-zА-Яа-я]\.$/,
    idCard: /^[A-Za-zА-Яа-яЁҐЄІЇ]{2} №\d{6}$/,
    faculty: /^[A-Za-zА-Яа-яЁҐЄІЇ]+$/,
    birthday: /^\d{2}\.\d{2}\.\d{4}$/,
    address: /^м\.\s[A-ZА-ЯЁҐЄІЇ][a-zа-яёєії]*$/,
  };

  checkInput(patterns.name, name, ".correct-name");
  checkInput(patterns.idCard, idCard, ".correct-idCard");
  checkInput(patterns.faculty, faculty, ".correct-faculty");
  checkInput(patterns.birthday, birthday, ".correct-birthday");
  checkInput(patterns.address, address, ".correct-address");
}

function checkInput(pattern, enteredData, className) {
  const field = document.querySelector(className);

  if (pattern.test(enteredData.value)) {
    if (field.textContent.includes(enteredData.value)) {
    } else {
      field.textContent += enteredData.value;
    }
    enteredData.style.color = "#00FF00";
  } else {
    enteredData.style.color = "red";
  }
}
