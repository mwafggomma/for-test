const apiKey = "a33d2005caace0cb1fc6fac4aebad3d7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");

async function click(city) {
    try {
        let response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        if (!response.ok) {
            throw new Error("City not found");
        }
        let data = await response.json();
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    } catch (error) {
        console.error(error);
        alert("City not found. Please try again.");
    }
}

searchButton.addEventListener("click", () => {
    click(search.value);
});

