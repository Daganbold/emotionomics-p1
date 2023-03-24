//variable
let APIKEY = "2llCfwgKW4oQEdJcS9y7VtaoHJFYb8pG";
var selectEl = document.getElementById("coinsDropDown");
var coinEl = document.getElementById("coinChange");

// true = happy, false = sad
let happyGif;

// Giffy function
function getGif() {
  let urlPrefix = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=1&q=`;
  let url;

  if (happyGif) {
    url = urlPrefix + "happy";
  } else {
    url = urlPrefix + "sad";
  }
  console.log(url);

  fetch(url)
    .then((response) => response.json())
    .then((content) => {
      console.log(content.data);
      console.log("META", content.meta);
      let fig = document.createElement("figure");
      let img = document.createElement("img");
      let fc = document.createElement("figcaption");
      img.src = content.data[0].images.downsized.url;
      img.alt = content.data[0].title;
      fc.textContent = content.data[0].title;
      fig.appendChild(img);
      fig.appendChild(fc);
      let out = document.querySelector(".out");
      out.insertAdjacentElement("afterbegin", fig);
    })
    .catch((err) => {
      console.error(err);
    });
}

// Display the list of coins as an option within select element
function getData(arrayList) {
  for (let i = 0; i < arrayList.length; i++) {  
    let option = document.createElement("option");
    option.setAttribute("value", arrayList[i].change);
    option.setAttribute("name", arrayList[i].name);

    let optionText = document.createTextNode(arrayList[i].name);
    option.appendChild(optionText);
    selectEl.appendChild(option);
  }
}

function selectCoin(event) {
  console.log("option selected");
  event.preventDefault();
  let coinChange = event.target.value;

  localStorage.setItem("my-coins", JSON.stringify([coinChange]));

  console.log(coinChange);

  if (coinChange > 1) {
    happyGif = true;
    coinEl.textContent = ` Your coin change is ${coinChange} now. Get Your Giphy :-)`;
    console.log(" Drink Beer....");
  } else {
    happyGif = false;
    coinEl.textContent = `Your coin change is ${coinChange} now. Drink Water :,(`;
    console.log("drink water");
  }

  console.log("EERJALJKDSKLAWSD");

  getGif();
}

function init() {
  console.log("Mounted");
}

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
    // console.log(objectData.data.coins);
    getData(objectData.data.coins);
  });

selectEl.addEventListener("change", selectCoin);
document.addEventListener("DOMContentLoaded", init);
