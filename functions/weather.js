navigator.geolocation.getCurrentPosition((position, error) => {
    //we are getting current position
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    //using api to fetch weather details using our latitude and longitude
    fetch(`https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`)
        .then(weather => weather.json())
        .then(result => {
            console.log(result);
            const ele = document.querySelector("#weather p")
            ele.textContent = result.main.temp + "°C";
        })

})