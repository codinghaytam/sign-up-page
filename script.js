const PasswordInputs = document.querySelector("#password");
const PasswordConfirm = document.querySelector("#confirm-password");
const submitbutton = document.querySelector("#sign");
function checkPasswords() {
    const passwordMatch = PasswordConfirm.value === PasswordInputs.value;
    submitbutton.disabled = !passwordMatch;
    PasswordConfirm.setAttribute("style","border-color:red;");
}
PasswordConfirm.addEventListener('input', checkPasswords);
PasswordInputs.addEventListener('input', checkPasswords);