import { URL_API } from "@env";

export const getOrders = async () => {
  const response = await fetch(`${URL_API}/orders.json`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  const orders = Object.keys(data)?.map((key) => {
    return {
      ...data[key],
      id: key,
    };
  });
  return orders;
};

export const deleteOrder = async (orderId: string) => {
  await fetch(`${URL_API}/orders/${orderId}.json`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

const OrdersService = {
  getOrders,
  deleteOrder,
};
export default OrdersService;
