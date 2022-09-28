import { MAPS_API_KEY } from "@env";

export const URL_MAPS = (
  lat: number,
  lng: number,
  zoom = 14
) => `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=${zoom}&size=600x300&maptype=roadmap
&markers=color:blue%7Clabel:S%7C${lat},${lng}&key=${MAPS_API_KEY}`;

export const URL_GEOCODING = (lat: number, lng: number) =>
  `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${MAPS_API_KEY}`;
