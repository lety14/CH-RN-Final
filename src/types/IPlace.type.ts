import { ILocation } from "./ICoords.type";

export default interface IPlace {
  id: number;
  title: string;
  description: string;
  image: string;
  address: string;
  coords: ILocation;
}
