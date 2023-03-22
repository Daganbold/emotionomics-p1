//variable
var selectEl = document.getElementById("coinsDropDown");
var coinEl = document.getElementById("coinChange");

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
  });
}


