const pwdInput = document.querySelector("input[id='pwd']");
const pwdConfirmInput = document.querySelector("input[id='pwd-confirm']");
const pwdInputWrapper = document.querySelector(".input-wrapper.password");
const pwdConfirmInputWrapper = document.querySelector(".input-wrapper.confirm-pwd");

const errorText = document.createElement('p');
errorText.classList.add('error-text');
errorText.textContent = "*Password do not match!";

const passwordCompare = () => {
    if(pwdConfirmInput.value === pwdInput.value) {
        if(document.querySelector(".input-wrapper.password p")) {
            pwdInputWrapper.removeChild(errorText);
            pwdInput.classList.remove('error');
            pwdConfirmInput.classList.remove('error');
        }
    }
    else {        
        pwdInputWrapper.appendChild(errorText);
        pwdInput.classList.add('error');
        pwdConfirmInput.classList.add('error');
    }
}
