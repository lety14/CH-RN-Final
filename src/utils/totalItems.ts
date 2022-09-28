import IItem from "../types/IItem.type";

export const totalPrice = (list: IItem[]) =>
  list.map((item) => item.quantity * item.price).reduce((a, b) => a + b, 0);
