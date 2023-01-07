const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const temp_min = document.getElementById('temp_min');
const temp_max = document.getElementById('temp_max');
const feels_like = document.getElementById('feels_like');
const speed = document.getElementById('speed');
const deg = document.getElementById('deg');
const gust = document.getElementById('gust');
const description = document.getElementById('description');
const pressure = document.getElementById('pressure');
const humidity = document.getElementById('humidity');
const country = document.getElementById('country');


const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = `Please write city name before search`;
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=12dbf2d699361c286a404aad012baf20`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = arrData[0].name;
            temp.innerText = arrData[0].main.temp;
            temp_status.innerText = arrData[0].weather[0].main;
            temp_min.innerText = arrData[0].main.temp_min;
            temp_max.innerText = arrData[0].main.temp_max;
            feels_like.innerText = arrData[0].main.feels_like;
            speed.innerText = arrData[0].wind.speed;
            deg.innerText = arrData[0].wind.deg;
            gust.innerText = arrData[0].wind.gust;
            description.innerText = arrData[0].weather[0].description;
            pressure.innerText = arrData[0].main.pressure;
            humidity.innerText = arrData[0].main.humidity;
            country.innerText = arrData[0].sys.country;
        } catch {
            city_name.innerText = `Please write city name properly`;
        }
    }
}

submitBtn.addEventListener('click', getInfo);