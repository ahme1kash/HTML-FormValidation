const username = document.querySelector(".username")
const email = document.querySelector(".email")
const password1 = document.querySelector(".password")
const password2 = document.querySelector(".password2")
const submitBtn = document.querySelector(".submit")

// Messages

const usernameMessage = document.querySelector(".user-msg");
const emailMessage = document.querySelector(".email-msg");
const passwordMessage1 = document.querySelector(".password-msg");
const passwordMessage2 = document.querySelector(".password2-msg");


submitBtn.addEventListener("click", (e) => {
    // console.log("e is ", e, typeof e)
    e.preventDefault();

    if (username.value === "" && email.value === "" && password1.value === "" && password2.value === "") {
        // alert("Please fill all input fields");
        alertify.alert("Please fill all input fields", function () { }, 'popup1');
        console.log(username.value, email.value, password1.value, password2.value)

    }
    if (username.value === "") {
        showMessage(usernameMessage, "Please Provide Your Name", "#FF0000");
    } else {
        showMessage(usernameMessage, "Great Name", '#05009E');
    }
    if (email.value === "") {
        showMessage(emailMessage, "Please Provide Your Email", "#FF0000");
    } else {
        showMessage(emailMessage, "Email Added", '#05009E');
    }
    if (password1.value === "") {
        showMessage(passwordMessage1, "Please Provide Your Password", "#FF0000");
        // return
    } else {
        showMessage(passwordMessage1, "Password filled", '#05009E');
        // return
    }

    if (password2.value === "") {
        showMessage(passwordMessage2, "Please provide Confirm Password", "#FF0000");
    }
    else if (password1.value !== password2.value) {
        showMessage(passwordMessage2, "Passwords do not match!! Write same password as above.", "#660000");
    }
    else {
        showMessage(passwordMessage2, "Both passwords match", '#05009E');
    }
})

function showMessage(element, msg, color) {

    element.style.visibility = "visible";
    element.textContent = msg;
    element.style.color = color;
    // element.previousElementSibling.style.border = `2px solid ${color}`;
}
