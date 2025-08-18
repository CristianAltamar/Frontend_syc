import axiosInstance from "./axiosInstance";

export const getOrdersClients = (params) => axiosInstance.get('/ordersClients', { params });
export const getOrdersClientById = (id) => axiosInstance.get(`/ordersClients/${id}`);
export const createOrdersClient = (body) => axiosInstance.post('/ordersClients', body);
export const updateOrdersClient = (id, body) => axiosInstance.put(`/ordersClients/${id}`, body);
export const deleteOrdersClient = (id) => axiosInstance.delete(`/ordersClients/${id}`);