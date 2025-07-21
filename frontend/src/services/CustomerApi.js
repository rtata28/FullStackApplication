// services/customerApi.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/customers';

export const createCustomer = (data) => axios.post(API_URL, data);
export const getCustomerById = (id) => axios.get(`${API_URL}/${id}`);
export const getCustomer = (params) => axios.get(API_URL, { params });
export const updateCustomer = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteCustomer = (id) => axios.delete(`${API_URL}/${id}`);