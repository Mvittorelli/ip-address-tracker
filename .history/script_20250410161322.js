var map = L.map('map').setView([27.505, -27], 13)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const marker = L.marker([51.5, -0.09]).addTo(map);
const marker2 = L.marker([51.51, -0.09]);
const marker3 = L.marker([51.52, -0.09]);
const polygon = L.polygon([[51.51, -0.1], [51.5, -0.08], [51.53, -0.07], [51.50, -0.06]], { color: '#FF0000' }).addTo(map);
const polygon2 = L.polygon([[51.51, -0.1], [51.5, -0.08], [51.53, -0.07], [51.50, -0.06]], { color: '#0122FF' }).addTo(map);

const mylines = [{
    "type": "LineString",
    "coordinates": [[-0.1, 51.51], [-0.07, 51.53]]
}, {
    "type": "LineString",
    "coordinates": [[-0.1, 51.5], [-0.07, 51.50]]
}];
const geojson = L.geoJSON(null).addTo(map);
geojson.addData(mylines);

const states = [{
    "type": "Feature",
    "properties": { "party": "Republican" },
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [-104.05, 48.99],
            [-97.22, 48.98],
            [-96.58, 45.94],
            [-104.03, 45.94],
            [-104.05, 48.99]
        ]]
    }
}, {
    "type": "Feature",
    "properties": { "party": "Democrat" },
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [-109.05, 41.00],
            [-102.06, 40.99],
            [-102.03, 36.99],
            [-109.04, 36.99],
            [-109.05, 41.00]
        ]]
    }
}, {
    "type": "Feature",
    "properties": { "party": "Democrat" },
    "geometry": {
        "type": "Polygon",
        "coordinates": [[
            [-109.05, 41.00],
            [-102.06, 40.99],
            [-102.03, 36.99],
            [-109.04, 36.99],
            [-109.05, 41.00]
        ]]
    }
}];

const geojsonStates = L.geoJSON(states, {
    style: function (state) {
        return (state.properties.party === 'Republican')
            ? { fillColor: 'red', color: 'red', opacity: 1, legendLabel: state.properties.party } : { fillColor: 'blue', color: 'blue', opacity: 1, legendLabel: state.properties.party }
    }
}).addTo(map);
