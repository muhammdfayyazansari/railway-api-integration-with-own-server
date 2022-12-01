// console.log("fayyaz")



let getWeather=()=>{
  let cityName = document.querySelector("#cityName")
  let temperature = document.querySelector("#temperature")
  let humidity = document.querySelector("#humidity")
  let minMaxTemperature = document.querySelector("#minMaxTemperature")
  axios.get("https://busy-pink-bullfrog-shoe.cyclic.app/weather")
  .then((response)=>{
    console.log("response:??>>>>", response.data)
    cityName.innerHTML = response.data.cityName;
    temperature.innerHTML = ` Temperature: ${response.data.temperature} <sup>o</sup>C`;
    humidity.innerHTML = ` Humidity: ${response.data.humidity}%`;
    minMaxTemperature.innerHTML = ` Min-Max Temperature : ${response.data.min}<sup>o</sup>C-${response.data.max} <sup>o</sup>C`;


  })
  .catch((error)=>{
    console.log("error :>>", error)
  })

}