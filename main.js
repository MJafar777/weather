"use strict";

// sellecting elements
const StateBtn = document.querySelector(".StateBtn");
const input__State = document.querySelector(".input__State");
const card__weather = document.querySelector(".card__weather");
const container = document.querySelector(".container");
const box = document.querySelector(".box");
let malumot;
let search = "";
StateBtn.addEventListener("click", (e) => {
  e.preventDefault;
  search = input__State.value;
  input__State.value = "";
  getUrl();
});
let errorOlish = function (response, msg) {
  if (!response.ok) {
    console.log(response);
    throw new Error(`${msg} ${response.status} ${response.statusText}`);
  }
};
let getJson = function (url, msg) {
  return fetch(url).then((response) => {
    errorOlish(response, msg);
    return response.json();
  });
};

function getUrl() {
  getJson(
    `https://api.weatherapi.com/v1/current.json?key=44d37f22c06d4dbba27165419220204&q=${search}&aqi=no`,
    "davlatni Topa olmadim"
  )
    .then((data) => {
      malumot = data;
      console.log(malumot);
      getWeather();
    })
    .catch((error) => {
      alert(error);
    });
}
const getWeather = function () {
  let html = `
        <div class="card__weather">
          <p class="dataCard">Data: ${malumot.current.last_updated}</p>
          <p class="gradusCard">Temperature: ${malumot.current.temp_c}℃</p>
          <p class="stateCard">State: ${malumot.location.country}
          <img src=" ${malumot.current.condition.icon}" alt="" />
          </p>
          <video
            class="videoCard"
            width="250"
            height="240"
            autoplay
            loop
            controls
          >
            <source src="WEATHER BACKGROUND.mp4" type="video/mp4" />
            <source src="WEATHER BACKGROUND.mp4" type="video/ogg" />
          </video>
        </div>
  `;
  box.insertAdjacentHTML("beforebegin", html);
};
 