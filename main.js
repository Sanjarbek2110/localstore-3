const userForm = document.querySelector("#form");
const userEmail = document.querySelector("#email");
const userPassword = document.querySelector("#password");

async function filterUser(e) {
    e.preventDefault();

    const emailValue = userEmail.value.trim();
    const passwordValue = userPassword.value.trim();

    try {
        const res = await fetch("http://localhost:3000/users"); // ✅ to'g'ri endpoint
        const data = await res.json();

        const foundUser = data.find(user => 
            emailValue === user.email && passwordValue === user.password
        );

        if (foundUser) {
            localStorage.setItem("currentUser", JSON.stringify(foundUser));
            window.location.href = "./profile.html"; // ✅ to'g'ri fayl nomi
        } else {
            alert("Email yoki parol noto‘g‘ri!");
            // window.location.href = "./index.html"
        }

    } catch (error) {
        console.log("Xatolik:", error);
    }
}

document.querySelector("#form").addEventListener("submit", filterUser);
