import { ILocation } from "./ICoords.type";

export default interface IProduct {
  id: number;
  categoryId: number,
  title: string;
  price: number,
  date: string,
  image: any;
  pack: string,
  country: string,
  region: string,
  coords: ILocation,
  description: string
}
