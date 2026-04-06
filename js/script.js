const greeting = document.getElementById("greeting");
const hour = new Date().getHours();

switch (true) {
    case (hour < 12):
        greeting.textContent = "Good Morning";
        break;
    case (hour < 18 && hour >= 12):
        greeting.innerText = "Good Afternoon";
        break;
    case (hour >= 18):
        greeting.innerText = "Good Evening";
        break;
    default:
        greeting.textContent = "Welcome!";
        break;
}