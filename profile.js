const box = document.querySelector("#wrapper");
const user = JSON.parse(localStorage.getItem("currentUser"));

const logOutBtn = document.getElementById("log_out_btn");

logOutBtn.addEventListener("click", () => {
    localStorage.clear(); // Barcha foydalanuvchi ma'lumotlarini tozalaydi
    window.location.href = "./index.html"; // Login sahifasiga qaytaradi
    alert("Siz profildan chiqayapsiz")
});

if (user) {
  box.innerHTML = `
    <li class="p-5 border rounded-[12px] bg-white shadow-md">
      <img src="./user.png" class="w-[100px] mx-auto mb-5">
      <div class="flex gap-2 justify-center">
        <h1 class="text-[30px] mb-5 font-bold text-center">${user.first_name}</h1>
        <h1 class="text-[30px] mb-5 font-bold text-center">${user.last_name}</h1>
      </div>
      <p class="text-gray-900 text-center text-[20px]">${user.phone}</p>

      <p class="text-gray-600 text-center text-[20px]">${user.email}</p>
      
      <p class="text-gray-600 text-center text-[20px]">${user.password}</p>

      <p class="text-slate-950 text-center text-[20px]">Lorem ipsum dolor sit amet, consectetur dipiscing elit, sed do eiusmod tempor incididunt</p>

    </li>
  `;
} else {
  box.innerHTML = `
  <li class="flex flex-col items-center">
    <p class="text-red-500  text-[45px]">Foydalanuvchi topilmadi</p>
    <a href="./index.html" class="w-[100px] mx-auto btn btn-success">Login</a>
  </li> 
  `;

logOutBtn.remove()
}


