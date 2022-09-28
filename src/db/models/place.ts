import { ILocation } from "../../types/ICoords.type";

class Place {
  id: number;
  title: string;
  description: string;
  image: string;
  address: string;
  coords: ILocation;

  constructor(
    id: number,
    title: string,
    description: string,
    image: string,
    address: string,
    coords: ILocation
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.image = image;
    this.address = address;
    this.coords = coords;
  }
}

export default Place;
