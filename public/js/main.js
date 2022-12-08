const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name')
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');
const temp_real_val = document.getElementById('temp_real_val');
const temp_feels_like = document.getElementById('temp_feels_like');
const temp_temp_min = document.getElementById('temp_temp_min');
const temp_temp_max = document.getElementById('temp_temp_max');
const pressure = document.getElementById('pressure');
const humidity = document.getElementById('humidity');

const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal === "") {
        city_name.innerText = `Please write city name before search`;
        datahide.classList.add('data_hide');
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=218e0af13968de702922aa542f9bb10a`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_real_val.innerText = arrData[0].main.temp;
            temp_feels_like.innerText = arrData[0].main.feels_like;
            temp_temp_min.innerText = arrData[0].main.temp_min;
            temp_temp_max.innerText = arrData[0].main.temp_max;
            pressure.innerText = arrData[0].main.pressure;
            humidity.innerText = arrData[0].main.humidity;
            const tempMood = arrData[0].weather[0].main;
            if (tempMood == "Clear") {
                temp_status.innerHTML = "<i class='fa-solid fa-sun'></i>";
            } else if (tempMood == "Clouds") {
                temp_status.innerHTML = "<i class='fa-solid fa-cloud'></i>";
            } else if (tempMood == "Rain") {
                temp_status.innerHTML = "<i class='fa-solid fa-rain'></i>";
            }
            datahide.classList.remove('data_hide');
        } catch {
            city_name.innerText = `Please write city name properly`;
            datahide.classList.add('data_hide');
        }
    }
}

submitBtn.addEventListener('click', getInfo);
