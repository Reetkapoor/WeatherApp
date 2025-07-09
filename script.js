
    const apiKey="7b7ef5e6adc2bcba3da00b2f6954e75c";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");
const weatherIcon= document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl +city+ `&appid=${apiKey}`);
    if(!response.ok){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
    var data= await response.json();
    console.log(data);
//   document.getElementById("demo").innerHTML=JSON.stringify(data);
   
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/hr";


    let weather=data.weather[0].main;
    // document.getElementById("demo1").innerHTML=weather;

    
    weatherIcon.src=`images/${weather}.png`;
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
    

}}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);

})
