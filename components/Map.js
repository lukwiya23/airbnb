import { getCenter } from "geolib";
import { useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

function Map({ searchResults }) {
  //click on selected mark to go to location
  const [selectedLocation, setSelectedLocation] = useState({});

  //transform the lat and long data from the json file to get a center location on the map
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);

  //setup mapbox style with reactmapgl
  const [viewport, setViewport] = useState({
    width: 500,
    height: 750,
    latitude: center.latitude,
    longitude: center.longitude,

    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/bonnie987/cksyqf9s02b1t17p54tgcbpyx"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetLeft={-10}
          >
            <p
              aria-label="push-pin"
              onClick={() => {
                setSelectedLocation(result);
              }}
              className="cursor-pointer text-3xl animate-bounce"
            >
              📌
            </p>
          </Marker>
              {/* pop up to show if marker has been clicked. */}
              {selectedLocation.long === result.long ?(
                  <Popup closeOnClick={true} latitude={result.lat} longitude={result.long}>
                      {result.title}
                  </Popup>

              ):(false) }

        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
