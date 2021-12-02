import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import Locations from "../Locations/Locations";
import Volcano from "../Locations/Volcano";
import LocationBoxInfo from "../LocationBoxInfo/LocationBoxInfo";
import classes from "./Map.module.css";
import Storm from "../Locations/Storm";
import Iceberg from "../Locations/Iceberg";

const maps_API_KEY = process.env.REACT_APP_API_KEY_MAPS;

const Map = ({ data, center, zoom }) => {
  const [showBox, setShowBox] = useState(false);

  const markers = data.map((event) => {
    // Wildfires
    if (event.categories[0].id === 8) {
      return (
        <Locations
          lat={event.geometries[0].coordinates[1]}
          lng={event.geometries[0].coordinates[0]}
          onClick={() => setShowBox({ title: event.title, id: event.id })}
        />
      );
    }
    // Volcanoes
    if (event.categories[0].id === 12) {
      return (
        <Volcano
          lat={event.geometries[0].coordinates[1]}
          lng={event.geometries[0].coordinates[0]}
          onClick={() => setShowBox({ title: event.title, id: event.id })}
        />
      );
    }
    // "Severe Storms"
    if (event.categories[0].id === 10) {
      return (
        <Storm
          lat={event.geometries[0].coordinates[1]}
          lng={event.geometries[0].coordinates[0]}
          onClick={() => setShowBox({ title: event.title, id: event.id })}
        />
      );
    }
    // Sea and Lake Ice
    if (event.categories[0].id === 15) {
      return (
        <Iceberg
          lat={event.geometries[0].coordinates[1]}
          lng={event.geometries[0].coordinates[0]}
          onClick={() => setShowBox({ title: event.title, id: event.id })}
        />
      );
    }
    return null;
  });

  return (
    <div className={classes.Map}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${maps_API_KEY}` }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {showBox && <LocationBoxInfo info={showBox} />}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 26.95235,
    lng: -169.38414,
  },
  zoom: 1,
};

export default Map;
