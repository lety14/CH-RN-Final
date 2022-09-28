import { createSlice } from "@reduxjs/toolkit";
import IPlace from "../../types/IPlace.type";
 import { getPlaces, insertPlace } from "../../db";
 import { URL_GEOCODING } from "../../utils/maps";
import { AppDispatch } from "../store";
import { ILocation } from "../../types/ICoords.type";
import Place from "../../db/models/place";

interface IPlaces {
  places: IPlace[];
}

const initialState: IPlaces = {
  places: [],
};

const placeSlice = createSlice({
  name: "place",
  initialState,
  reducers: {
    addPlace: (state, action) => {
      const newPlace = new Place(
        action.payload.id,
        action.payload.title,
        action.payload.image,
        action.payload.address,
        action.payload.coords
      );
      state.places.push(newPlace);
    },
    getAllPlaces: (state, action) => {
      state.places = action.payload;
    },
  },
});

export const savePlace = (title: string, image: string, coords: ILocation) => {
  return async (dispatch: AppDispatch) => {
    const response = await fetch(URL_GEOCODING(coords.lat, coords.lng));
    let address = "-";

    if (!response.ok) throw new Error("No se ha podido conectar con el servidor");
    const data = await response.json();

    if (!data.results) throw new Error("No se ha podido encontrar la dirección");
    address = data.results[0].formatted_address ? data.results[0].formatted_address : "-";
    try {
      const result: IPlace = await insertPlace(title, image, address, coords);
      dispatch(addPlace({ id: result.id, title, image, address, coords }));
    } catch (error) {
      console.error("error", error);
      throw error;
    }
  };
};

export const { addPlace, getAllPlaces } = placeSlice.actions;

export const loadPlaces = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const result = await getPlaces();
      dispatch(getAllPlaces(result));
    } catch (error) {
      console.error("error", error);
      throw error;
    }
  };
};

export default placeSlice.reducer;
