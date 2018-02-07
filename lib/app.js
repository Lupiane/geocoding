// put your JS code here
import GMaps from 'gmaps';


document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault("");
  const userInput = document.getElementById("user-input").value;
  fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${userInput}&key=XXXXXXXXX`)
    .then(response => response.json())
    .then((data) => {
      const coordinates = data.results[0].geometry.location;
      document.getElementById("coordinates").innerHTML = `<p> Lat: ${coordinates.lat}, Long: ${coordinates.lng} </p>`;
      const map = new GMaps({ el: '#map', lat: coordinates.lat, lng: coordinates.lng, zoom: 14 });
      console.log(map);
      const marker = { lat: coordinates.lat, lng: coordinates.lng };
      map.addMarkers([ marker ]);
    });
});
