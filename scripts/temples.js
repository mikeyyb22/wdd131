const year = document.querySelector("#currentyear");
const today = new Date();
year.innerHTML = today.getFullYear();
document.getElementById("lastModified").textContent = `Last modification: ${document.lastModified}`;

const hamButton = document.querySelector("#menu");
const navigation = document.querySelector("#header-nav");

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});