var featureService =
  "https://services9.arcgis.com/rXp7iTn7z7rQwnaE/ArcGIS/rest/services/GPS_Point/FeatureServer/0/updateFeatures";

var newFeature =
  '{"geometry":{"x":106.924067,"y":-6.2446807},"attributes":{"OBJECTID":"2","PCODE":"Ari-002","Accuracy":1595.22766557888,"Latitude":-6.2446807,"Longitude":106.924067,"Altitude":null,"Heading":null,"Speed":null,"Counter":1}}';

const options = {
    "method": "POST",
    "headers": {
        "Content-Type": "application/x-www-form-urlencoded",
    },
    "payload": {
        "f": "pjson",
        "features": newFeature
    },
}

fetch(featureService, options)
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.text(); // Retrieve the raw response text
  })
  .then((data) => {
    console.log(data); // Log the raw response text
  })
  .catch((error) => {
    console.error('Fetch error:', error);
  });