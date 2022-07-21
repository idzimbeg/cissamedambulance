import { useCallback, useRef, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

import { offices, symbol } from 'consts/consts';

import './style.css';

type OfficeNode = {
  id: string;
  field_address: {
    locality: string;
    postal_code: string;
    address_line1: string;
    address_line2: string;
    latitude: number;
    longitude: number;
  };
};

export default function Map() {
  const mapRef = useRef<unknown>(null);
  const [selectedOffice, setSelectedOffice] = useState<OfficeNode | undefined | null>(null);
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as never,
  });
  const onLoad = useCallback(
    (mapInstance) => {
      const bounds = new google.maps.LatLngBounds();
      offices.forEach((office) => {
        bounds.extend(new google.maps.LatLng(office.field_address.latitude, office.field_address.longitude));
      });
      mapRef.current = mapInstance;
      mapInstance.fitBounds(bounds);
    },
    [offices],
  );

  const onClickMarker = (officeId: string) => {
    setSelectedOffice(offices.find((office) => office.id === officeId));
  };
  return (
    <div className="Map">
      {isLoaded && (
        <>
          <GoogleMap
            mapContainerClassName="c-office-overview__map"
            onLoad={onLoad}
            zoom={16}
            center={new google.maps.LatLng(offices[0].field_address.latitude, offices[0].field_address.longitude)}
          >
            {offices.map((office) => (
              <Marker
                icon={{
                  url: symbol,
                  anchor: new google.maps.Point(8, 45),
                  scaledSize: new google.maps.Size(45, 45),
                }}
                key={office.id}
                onClick={() => onClickMarker(office.id)}
                position={{
                  lat: office.field_address.latitude,
                  lng: office.field_address.longitude,
                }}
              />
            ))}
            {selectedOffice && (
              <InfoWindow
                position={{
                  lat: selectedOffice.field_address.latitude,
                  lng: selectedOffice.field_address.longitude,
                }}
                onCloseClick={() => setSelectedOffice(null)}
              >
                <p>
                  {selectedOffice.field_address.address_line1} {selectedOffice.field_address.address_line2} -{' '}
                  {selectedOffice.field_address.postal_code} {selectedOffice.field_address.locality}
                </p>
              </InfoWindow>
            )}
          </GoogleMap>
        </>
      )}
    </div>
  );
}
