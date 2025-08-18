import axiosInstance from "./axiosInstance.js";

export const getPaymentsSuppliers = (params) => axiosInstance.get('/paymentsSuppliers', { params });
export const createPaymentsSupplier = (body) => axiosInstance.post('/paymentsSuppliers', body);
export const deletePaymentsSupplier = (id) => axiosInstance.delete(`/paymentsSuppliers/${id}`);