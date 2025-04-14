
let map = L.map('map');

map.setView([51.505, -0.09], 13)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([51.52, -0.09]).addTo(map);



const search = document.getElementById("search")
const searchBtn = document.getElementById("search-btn")

searchBtn.addEventListener("click", async function (e) {
    const response = await fetch("https://geo.ipify.org/api/v2/country,city?apiKey=at_XB5jhpfXIA26ZvOA81aOd0RjQ3grt&ipAddress=" + search.value)
    const data = await response.json();
    console.log(data)

    map.setView([data.location.lat, data.location.lng], 13)
    let marker = L.marker([data.location.lat, -0.09]).addTo(map);


})




