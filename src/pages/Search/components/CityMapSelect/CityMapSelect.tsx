import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { Container, MapButton } from "./CityMapaSelect.styles";
import { CityData } from "../../../../@types/CityData";
interface Props {
  cities: CityData[];
}

const center = {
  lat: -3.745,
  lng: -38.523,
};
const CityMapSelect = ({ cities }: Props) => {
  const [map, setMap] = React.useState(null);
  const [zoom, setZoom] = React.useState(2);
  const handleZoomIn = () => {
    setZoom(zoom + 1);
  };
  const handleZoomOut = () => {
    setZoom(zoom - 1);
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBXJUyhWG4f1oLd3xA7av6ajffYRbZhuk8",
  });
  const onLoad = React.useCallback(function callback(map: any) {
    const bounds = new window.google.maps.LatLngBounds(center);
    // map.fitBounds(bounds);

    setMap(map);
  }, []);
  return isLoaded ? (
    <Container>
      <MapButton zoomDirection="increase" onClick={handleZoomIn}>
        +
      </MapButton>
      <MapButton zoomDirection="decrease" onClick={handleZoomOut}>
        -
      </MapButton>
      <GoogleMap
        center={center}
        zoom={zoom}
        onLoad={onLoad}
        mapContainerStyle={{
          width: "100%",
          height: "300px",
          borderRadius: "30px",
          padding: "100px",
        }}
        options={{
          styles: [
            {
              stylers: [
                {
                  hue: "#ff1a00",
                },
                {
                  invert_lightness: true,
                },
                {
                  saturation: -100,
                },
                {
                  lightness: 33,
                },
                {
                  gamma: 0.5,
                },
              ],
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [
                {
                  color: "#2D333C",
                },
              ],
            },
          ],
          fullscreenControl: false,
          streetViewControl: false,
          mapTypeControl: false,
          zoomControl: false,
        }}
      >
        {cities.map((city, i) => {
          const position = {
            lat: city.GeoPosition.Latitude,
            lng: city.GeoPosition.Longitude,
          };
          return <Marker position={position}></Marker>;
        })}
      </GoogleMap>
    </Container>
  ) : (
    <></>
  );
};

export default CityMapSelect;