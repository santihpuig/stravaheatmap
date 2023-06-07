// Mapa

var map = L.map("map", {
  attributionControl: true,
  zoomControl: false,
}).setView([39.47292, -0.3799], 11);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/santihpuig/ckhxj04u10vso19r98s8byzl3/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2FudGlocHVpZyIsImEiOiJrYkhOMDVnIn0.ak6qwXtkOps01I5G-LCS_A",
  {
    attribution:
      'Map data &copy; <a href="http://openstreetmap.org"> OpenStreetMap</a> contributors, ' +
      '<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</			a>, ' +
      'Imagery © <a href="http://mapbox.com">Mapbox</a> ' +
      '|<a href="http://santihpuig.com">		santihpuig</a>',
    maxZoom: 16,
    minZoom: 7,
  }
).addTo(map);

// Hover info

var info = L.control({ position: "topright" });

info.onAdd = function (map) {
  this._div = L.DomUtil.create("div", "info");
  this.update();
  return this._div;
};

info.update = function (feature) {
  this._div.innerHTML = feature
    ? '<b style="color: #ffb703"> &nbsp ' +
      feature.properties.date +
      "&nbsp" +
      feature.properties.name +
      "&nbsp" +
      feature.properties.dist +
      " km.</b>"
    : '<b style="color: #ffb703">Strava activities</b>';
};

info.addTo(map);
