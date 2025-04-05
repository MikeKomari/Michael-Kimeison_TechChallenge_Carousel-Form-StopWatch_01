const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const form = document.getElementById("formDesu");

const successMsg = document.querySelector(".success-message");

// Show error message dengan membuat warnanya merah
function ShowErrorMsg(msgElement, message, state) {
  const errormsgdiv = document.getElementById(msgElement);
  if (state === "isError") {
    errormsgdiv.textContent = message;
    errormsgdiv.style.opacity = "1";
    errormsgdiv.style.color = "red";
  } else {
    errormsgdiv.style.opacity = "0";
  }
}

function validateName() {
  const name = nameInput.value.trim();
  if (name.length < 3) {
    ShowErrorMsg("nameMsg", "Nama harus minimal 3 karakter.", "isError");
    return false;
  } else {
    ShowErrorMsg("nameMsg", "Nama harus minimal 3 karakter.", "isValid");
    return true;
  }
}

function validateEmail() {
  const email = emailInput.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) {
    ShowErrorMsg("emailMsg", "Email tidak valid.", "isError");
    return false;
  } else {
    ShowErrorMsg("emailMsg", "Email tidak valid.", "isValid");
    return true;
  }
}

function validateGender() {
  const genderSelected = document.querySelector('input[name="gender"]:checked');
  if (!genderSelected) {
    ShowErrorMsg("genderMsg", "Silakan pilih jenis kelamin.", "isError");
    return false;
  } else {
    ShowErrorMsg("genderMsg", "Silakan pilih jenis kelamin.", "isValid");
    return true;
  }
}

nameInput.addEventListener("keyup", validateName);
emailInput.addEventListener("keyup", validateEmail);

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const isNameValid = validateName();
  const isEmailValid = validateEmail();
  const isGenderValid = validateGender();

  // kalau lulus validasi, ambil value dari inputan, lalu tampilkan di console
  // dan reset form
  // dan tampilkan success message
  if (isNameValid && isEmailValid && isGenderValid) {
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const genderValue = document.querySelector(
      'input[name="gender"]:checked'
    ).value;

    console.log("Submitted Values:");
    console.log("Name:", nameValue);
    console.log("Email:", emailValue);
    console.log("Gender:", genderValue);

    successMsg.textContent = "Form berhasil dikirim!";
    form.reset();
  }
});
