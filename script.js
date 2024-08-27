const inputBox  = document.querySelector('.input-box');
const searchBtn =document.getElementById('searchBtn');
const wheather_img =document.querySelector('.wheather-img');
const description=document.querySelector('.description');
const humidity=document.getElementById('humidity');
const wind=document.getElementById('wind');
const temperature =document.querySelector('.temperature');

const location_not_found = document.querySelector('.location-not-found');

const wheather_body = document.querySelector('.wheather-body');

async function checkWheather(city){
    const api_key = "0a8a096325bc84eb1fcd9ba620baf9b5";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;


    const wheather_data= await fetch(`${url}`).then( response => response.json()); 



    if(wheather_data.cod === `404`){
        location_not_found.style.display ="flex";
        wheather_body.style.display = "none";
        console.log("error");
        return; 
    }

    console.log("run");
    location_not_found.style.display ="none";
    wheather_body.style.display ="flex";
    temperature.innerHTML = `${Math.round(wheather_data.main.temp - 273.15)}°C`; 
    humidity.innerHTML=`${wheather_data.main.humidity}` 
    wind.innerHTML =`${wheather_data.wind.speed}`;  
    description.innerHTML=`${wheather_data.weather[0].description}`;

    switch(wheather_data.weather[0].main){
        case 'Clouds':
            wheather_img.src = "cloud.png";
            break;
        case 'Clear':
            wheather_img.src = "clear.png";
            break;
        case 'Rain':
            wheather_img.src = "rain.png";
            break;
        case 'Mist':
            whather_img.src = "mist.png";
            break;
        case 'Snow':
            wheather_img.src = "snow.png";
            break;

    }
   
    console.log (wheather_data);
}
searchBtn.addEventListener('click', ()=>{
    checkWheather(inputBox.value);
});
