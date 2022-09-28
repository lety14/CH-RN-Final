import { URL_API } from "@env";
import IItem from "../../types/IItem.type";

export const confirmCart = async (userId: string, items: IItem[], total: number) => {
  const response = await fetch(`${URL_API}/orders.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      date: Date.now(),
      userId,
      items,
      total,
    }),
  });

  const result = await response.json();
  return result;
};

const CartService = {
  confirmCart,
};
export default CartService;
