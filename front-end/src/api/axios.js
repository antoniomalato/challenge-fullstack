import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const postRegisterClient = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/register`, data);
    return response;
  } catch (error) {
    return error.response;
  }
}

export const getAllClients = async () => {
  try {
    const response = await axios.get(`${API_URL}/client`);
    return response;
  } catch (error) {
    return console.error(error)
  }
}

export const postRegisterMoviment = async (data) => {
  try {
    const response = await axios.post(`${API_URL}/register`, data);
    return response;
  } catch (error) {
    return error.response;
  }
};
