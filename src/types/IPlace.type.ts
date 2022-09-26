import { ILocation } from "./ICoords.type";

export default interface IPlace {
  id: number;
  title: string;
  image: string;
  address: string;
  coords: ILocation;
}
