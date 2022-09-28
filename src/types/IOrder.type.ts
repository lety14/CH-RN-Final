import IItem from "./IItem.type";

export interface IOrder {
  date: number;
  id: string;
  items: IItem[];
  total: number;
}
