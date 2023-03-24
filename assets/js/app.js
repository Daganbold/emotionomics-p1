//variable
var selectEl = document.getElementById("coinsDropDown");
var coinEl = document.getElementById("coinChange");
// added variables (Yung)
var barRecommendation = document.getElementById("bar-recommendation");



var options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "34a30b9c25mshcf53a973bb4ac8cp1302c3jsn02d818ce1d62",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
};

fetch(
  "https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=yhjMzLPhuIDl&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=100&offset=0",
  options
)
  .then((response) => {
    return response.json();
  })
  .then((objectData) => {
    console.log(objectData)
    getData(objectData.data.coins);
  });

function getData(arrayList) {
  for (let i = 0; i < arrayList.length; i++) {
    let option = document.createElement("option");
    option.setAttribute("value", arrayList[i].change);

    let optionText = document.createTextNode(arrayList[i].name);
    option.appendChild(optionText);
    selectEl.appendChild(option);
  }
}

// event listener
if (selectEl) {
  selectEl.addEventListener("change", (event) => {
    let coinChange = event.target.value;
    console.log(coinChange);
    if (coinChange > 1) {
      coinEl.textContent = ` Your coin change is ${coinChange} now. Drink Beer`;
      console.log(" Drink Beer....");
    } else {
      coinEl.textContent = `Your coin change is ${coinChange} now. Drink Water`;
      console.log("drink water");
    }
  getRestaurants(coinChange)
  });
}

// added function within event listener to list restaurants based on bitcoin performance (Yung)
function getRestaurants(coinChange) {
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'a90221af49mshd73965f4ab53300p17d3b6jsn28792f7388d3',
      'X-RapidAPI-Host': 'the-fork-the-spoon.p.rapidapi.com'
    }
  };
  let topPrice = 0
  let lowPrice = 0
if (coinChange > 1) {
     topPrice = 100
     lowPrice = 30
} else {
    topPrice = 30
    lowPrice = 0
    }
barRecommendation.innerHTML = ''
  fetch(`https://the-fork-the-spoon.p.rapidapi.com/restaurants/v2/list?queryPlaceValueCityId=348156&filterPriceEnd=${topPrice}&filterPriceStart=${lowPrice}&pageSize=10&pageNumber=1`, options)
    .then(response => response.json())
    .then(response => {
      for(let i=0; i<5; i++) {
        barRecommendation.innerHTML += response.data[i].name + `<img class='pics' src= ${response.data[i].mainPhotoSrc}>` + 'Average Price Range: ' + response.data[i].priceRange + '<br>'
      }
    // Use the following function if we want to list all restaurants
    //   response.data.forEach(restaurant => barRecommendation.innerHTML += restaurant.name + `<img src= ${restaurant.mainPhotoSrc}>` + '<br>')
     
    // })
    })
      .catch(err => console.error(err));

  }

 