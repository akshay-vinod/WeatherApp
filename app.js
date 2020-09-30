let lat;
let long;
window.addEventListener('load', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            lat = position.coords.latitude;
            long = position.coords.longitude;
            const api = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=ab1e7b7976769371fa0b9f9127c68dc1`;
            fetch("https://covid-19-india-data-by-zt.p.rapidapi.com/GetIndiaDistrictWiseDataForState?statecode=KL", {
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "covid-19-india-data-by-zt.p.rapidapi.com",
                    "x-rapidapi-key": "78786eb8eemsh8505011d2a7d12bp194656jsn3fe415df9aed"
                }
            })
                .then(response => {
                    console.log(response);
                })
                .catch(err => {
                    console.log(err);
                });
        });
    }
});