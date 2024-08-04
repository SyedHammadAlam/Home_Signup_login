document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const forgetPasswordForm = document.getElementById("forgetPasswordForm");
    const forgetPasswordLink = document.getElementById("forgetPasswordLink");
    const backToLoginLink = document.getElementById("backToLoginLink");
    forgetPasswordLink.addEventListener("click", (event) => {
        event.preventDefault();
        loginForm.style.display = "none";
        forgetPasswordForm.style.display = "block";
    });

    backToLoginLink.addEventListener("click", (event) => {
        event.preventDefault();
        forgetPasswordForm.style.display = "none";
        loginForm.style.display = "block";
    });
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault(); 
        const email = loginForm.querySelector('#Email input[type="email"]').value;
        const password = loginForm.querySelector('#password input[type="password"]').value;

        if (email === "" || password === "") {
            alert("Please fill in all fields.");
            return;
        }
        console.log("Email:", email);
        console.log("Password:", password);
        fetch("your-login-endpoint-url", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        })
        .then(response => response.json())
        .then(data => {
            console.log("Success:", data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    });
    forgetPasswordForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const email = forgetPasswordForm.querySelector('#forgetEmail input[type="email"]').value;
        
        if (email === "") {
            alert("Please enter your email.");
            return;
        }
        console.log("Forget Password Email:", email);

        fetch("your-forget-password-endpoint-url", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email }),
        })
        .then(response => response.json())
        .then(data => {
            console.log("Success:", data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    });
});
