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

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
	templeName: "San Diego California",
	location: "San Diego, California, United States",
	dedicated: "1993, April, 25",
	area: 72000,
	imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-9060-main.jpg"
  },
  {
	templeName: "São Paulo Brazil",
	location: "São Paulo, Brazil",
	dedicated: "1978, October, 30",
	area: 59246,
	imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/017-S%C3%A3o-Paulo-Brazil-Temple.jpg"
  },
  {
	templeName: "Tokyo Japan",
	location: "Tokyo, Japan",
	dedicated: "1980, October, 27",
	area: 53997,
	imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-8154-thumb.jpg"
  }
];

const grid = document.querySelector(".grid")

function displayTemples(templeArray) {
	grid.innerHTML = "";
	templeArray.forEach(temple => {
		const name = temple.templeName;
		const location = temple.location;
		const dedication = temple.dedicated;
		const templeArea = temple.area;
		const image = temple.imageUrl;

		const header = document.createElement("h2");
		const loc = document.createElement("p");
		const ded = document.createElement("p");
		const area = document.createElement("p");
		const gridFig = document.createElement("figure");
		const gridPicture = document.createElement("img");

		header.textContent = name;
		loc.textContent = `Location: ${location}`;
		ded.textContent = `Dedicated: ${dedication}`;
		area.textContent = `Size: ${templeArea} sq ft`;
		gridPicture.src = image;
		gridPicture.alt = name;
		gridPicture.loading = "lazy";
		gridPicture.width = "200"

		grid.appendChild(gridFig);
		gridFig.appendChild(header);
		gridFig.appendChild(loc);
		gridFig.appendChild(ded);
		gridFig.appendChild(area);
		gridFig.appendChild(gridPicture);
	})
}


const homeButton = document.querySelector("#home");
const oldButton = document.querySelector("#old");
const newButton = document.querySelector("#new");
const largeButton = document.querySelector("#large");
const smallButton = document.querySelector("#small");

homeButton.addEventListener('click', () => {
	displayTemples(temples);
});

oldButton.addEventListener('click', () => {
	const oldTemples = temples.filter((temple) => {
		const dedYear = Number(temple.dedicated.slice(0, 4));
		return dedYear < 1900;
	});
	displayTemples(oldTemples);
});

newButton.addEventListener('click', () => {
	const newTemples = temples.filter((temple) => {
		const dedYear = Number(temple.dedicated.slice(0, 4));
		return dedYear > 2000;
	});
	displayTemples(newTemples);
});

largeButton.addEventListener('click', () => {
	const largeTemples = temples.filter((temple) => {
		const templeSize = temple.area;
		return templeSize > 90000;
	});
	displayTemples(largeTemples);
});

smallButton.addEventListener('click', () => {
	const smallTemples = temples.filter((temple) => {
		const templeSize = temple.area;
		return templeSize < 10000;
	});
	displayTemples(smallTemples);
});