'use strict';

const countriesContainer = document.querySelector('.countries');
const btn_send = document.querySelector('.btn-send');
const input_send = document.querySelector('.input-send');
const getCountryData = function (country)
{
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v2/name/${country}`);
  request.send();
  request.addEventListener('load', function ()
  {
    const [data] = JSON.parse(this.responseText);
    const html = `
<div class="card" data-aos="flip-left" style="width: 18rem;">
  <img src="${data.flag}" class="card-img-top" alt="">
  <div class="card-body">
    <h4 class="card-title">${data.name}</h4>
        <div class="country__row"> <i class="fa-solid fa-earth-europe"></i> ${data.region}</div>
        <div class="country__row"> <i class="fa-solid fa-users"></i> ${(+data.population / 1000000).toFixed(1)}m  people</div>
        <div class="country__row"><i class="fa-solid fa-language"></i> ${data.languages[0].name} LANG</div>
        <div class="country__row"><i class="fa-solid fa-coins"></i> ${data.currencies[0].name}</div>
  </div>
</div>

    `;

    countriesContainer.insertAdjacentHTML('afterbegin', html);
    countriesContainer.style.opacity = 1;
  });

};
btn_send.addEventListener('click', function (e, country)
{
  e.preventDefault();
  country = `${input_send.value}`;
  getCountryData(`${country}`);
  input_send.value = '';
});

// getCountryData('portugal');
// getCountryData('usa');
// getCountryData('France');
// getCountryData('Egypt');
// getCountryData('germany');
// getCountryData('span');
// getCountryData('China');




