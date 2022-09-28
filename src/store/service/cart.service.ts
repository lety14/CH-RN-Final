import { URL_API } from "@env";

export const confirmCart = async (items: any, total: number) => {
  const response = await fetch(`${URL_API}/orders.json`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      date: Date.now(),
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
