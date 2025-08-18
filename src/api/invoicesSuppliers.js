import axiosInstance from "./axiosInstance";

export const getInvoicesSuppliers = (params) => axiosInstance.get('/invoicesSuppliers', { params });
export const getInvoicesSupplierById = (id) => axiosInstance.get(`/invoicesSuppliers/${id}`);
export const createInvoicesSupplier = (body) => axiosInstance.post('/invoicesSuppliers', body);
export const updateInvoicesSupplier = (id, body) => axiosInstance.put(`/invoicesSuppliers/${id}`, body);
export const deleteInvoicesSupplier = (id) => axiosInstance.delete(`/invoicesSuppliers/${id}`);