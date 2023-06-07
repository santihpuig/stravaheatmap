// Rutas

function style(feature) {
  return {
    color: "#ffb703",
    opacity: 0.5,
    weight: 1,
  };
}

function highlightFeature(e) {
  let layer = e.target;
  layer.setStyle({
    weight: 4,
    color: "white",
    dashArray: "",
    Opacity: 1,
  });

  if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
    layer.bringToFront();
  }

  info.update(layer.feature);
}

var fundido;

function resetHighlight(e) {
  fundido.resetStyle(e.target);
  info.update();
}

function zoomToFeature(e) {
  map.fitBounds(e.target.getBounds());
}

function onEachFeature(feature, layer) {
  layer.on({
    mouseover: highlightFeature,
    mouseout: resetHighlight,
    click: zoomToFeature,
  });
}

var fundido = L.geoJson(fundido, {
  style: style,
  onEachFeature: onEachFeature,
}).addTo(map);
