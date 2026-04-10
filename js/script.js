const container = document.querySelector(".container"),
    pwShowHide = document.querySelectorAll(".showHidePw"),
    pwFields = document.querySelectorAll(".password"),
    signUp = document.querySelector(".signup-link"),
    loginLinks = document.querySelectorAll(".login-link"),
    forgotLink = document.querySelector(".forgot-link");

// js code to show/hide password and change icon
pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        pwFields.forEach(pwField => {
            if (pwField.type === "password") {
                pwField.type = "text";

                pwShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye-slash", "uil-eye");
                })
            } else {
                pwField.type = "password";

                pwShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye", "uil-eye-slash");
                })
            }
        })
    })
})

// js code to appear signup and login form
signUp.addEventListener("click", () => {
    container.classList.add("show-signup");
    container.classList.remove("show-forgot");
});

loginLinks.forEach(link => {
    link.addEventListener("click", () => {
        container.classList.remove("show-signup");
        container.classList.remove("show-forgot");
    });
});

forgotLink.addEventListener("click", () => {
    container.classList.add("show-forgot");
    container.classList.remove("show-signup");
});
