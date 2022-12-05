
let btnsearch=document.getElementById('search-btn')
let searchinput=document.getElementById('input-search')
let result=document.getElementById('result')
btnsearch.addEventListener("click",()=>{
let countryname=searchinput.value
finalurl=`https://restcountries.com/v3.1/name/${countryname}?fullText=true`
console.log(finalurl)
fetch(finalurl).then((respose)=>
    respose.json()).then((data)=>{
    console.log(data[0]);
    console.log(data[0].capital[0]);
    console.log(data[0].continents[0]);
    console.log(data[0].flags.svg)
    console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
    console.log(data[0].population);
    console.log(Object.values(data[0].languages).toString().split(',').join(','))
result.innerHTML=`
<img src="${data[0].flags.svg}" class="flag-img" alt="">

<h2>${data[0].name.common}</h2>
 <div class="wrapper">
    <div class="data-wrapper">
        <h4>Capital:</h4>
        <span>${data[0].capital[0]}</span>
    </div>

    <div class="data-wrapper">
        <h4>Continent:</h4>
        <span>${data[0].continents[0]}</span>
    </div>
   
    <div class="data-wrapper">
        <h4>Currencie:</h4>
        <span>${data[0].currencies[Object.keys(data[0].currencies)].name}</span>
    </div>
   
    <div class="data-wrapper">
        <h4>Population:</h4>
        <span>${data[0].population}</span>
    </div>
    <div class="data-wrapper">
        <h4>Language:</h4>
        <span>${Object.values(data[0].languages).toString().split(',').join(',')}</span>
    </div>
   </div>
`


})
});

 