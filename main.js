const loadCountry = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all");
    
    const data = await res.json();
    showAllData(data.slice(0,9));

}
loadCountry();

const showAllData = (countries) => {
    const countryCotainer = document.getElementById('countries-info');
    countryCotainer.innerHTML = "";

    countries.forEach(country => {
        console.log(country)
        const div = document.createElement('div');
        div.innerHTML = `
        <div class="card w-96 h-96 bg-base-100 shadow-2xl">

        <figure class="px-10 pt-10">
        <img src="${country.flags.png}" alt="Shoes" class="rounded-xl" />
      </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${country.name.common}</h2>
    <h4>Capital : ${country.capital}</h4>
    <h5 class="">Continent : ${country.continents[0]}
    <div class="card-actions">
    <label onclick="showSingleCountry('${country.cca2}')" class="btn btn-primary items-center" for="my-modal-3" class="btn">Show Details</label>
      </div>
      </div>
      </div>
      `
      
      countryCotainer.appendChild(div);
    });
  }
  
  
  const showSingleCountry = (id) => {
      const URL = `https://restcountries.com/v3.1/alpha/${id}`;
      console.log(URL);
      fetch(URL)
        .then((res) => res.json())
        .then((data) => showSingleCountryDataModal(data[0]));
    };

    
  // get all data and pass all data using slice to show in the UI when click See All button
const showAllDataTogether = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        showAllData(data);
      });
  };




const showSingleCountryDataModal=(country)=>{
    const container =document.getElementById('modal-info');
    const div=document.createElement('div');
    div.classList.add('modal');
    div.innerHTML=`
    <div class="modal-box relative">
    <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
    <figure class="px-10 pt-10">
    <img src="${country.flags.png}" alt="Shoes" class="rounded-xl" />
  </figure>
<div class="card-body items-center text-center">
<h2 class="card-title">${country.name.common}</h2>
<h4>Capital : ${country.capital}</h4>
<h5 class="">Continent : ${country.continents[0]}</h5>
<h5 class="">Currency :${Object.keys(country.currencies)[0]}</h5>
<p class="py-4">
Population : ${country.population}
</p>
    </div>  
  </div>
    `;
    container.appendChild(div);
};


// Searching
const searchMeal=()=>{
  
}