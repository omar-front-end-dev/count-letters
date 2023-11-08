const area = document.getElementById("area");
const showResult = document.getElementById("show-result");
const textAlert = document.querySelector(".text-alert");
const alertError = document.querySelector(".alert");
area.addEventListener("input", () =>{
    const count = area.value.length;
    showResult.textContent = count
    if (count > 50) {
        textAlert.style.display = "block";
        showResult.style.color = "red";
        area.style.borderColor = "red";
        alertError.style.display = "block"
    }else{
        textAlert.style.display = "none";
        showResult.style.color = "green";
        area.style.borderColor = "green";
        alertError.style.display = "none"
    }
})