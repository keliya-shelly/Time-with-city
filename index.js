const btn = document.getElementById("search-btn");
const input = document.getElementById('city');

async function getData(cityName){
    const promise  = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=04bfe28631294e428b471521250508&q=${cityName}&aqi=yes
`
    );
    return await promise.json(); // Converts the response to JSON format and returns the result.
}

btn.addEventListener('click', async () => {
   const value = input.value;
   const result = await getData(value); //Calls the API with the city name and waits for the result
  cityName.innerText = `${result.location.name}, ${result.location.region} - ${result.location.country}`
  time.innerText = result.location.localtime;
  temp.innerText = result.current.temp_c;
});

const cityName = document.getElementById("cityName");
const time = document.getElementById("time");
const temp = document.getElementById("temp");