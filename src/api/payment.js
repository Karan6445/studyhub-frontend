import api from "./axios";

export const createOrder = async (amount) => {
  const { data } = await api.post("/payment/create-order", {
    amount,
  });

  return data;
};

export const verifyPayment = async (paymentData) => {
  const { data } = await api.post("/payment/verify", paymentData);

  return data;
};