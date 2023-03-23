import axios from 'axios'

const API_URL = '/api/deliveries/'

// Create new delivery
const createDeliveries = async (deliveryData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, deliveryData, config)

  return response.data
}

// Get user deliveries
const getDeliveries = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL, config)

  return response.data
}

// Delete user delivery
const deleteDeliveries = async (deliveryId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + deliveryId, config)

  return response.data
}

const deliveryService = {
  createDeliveries,
  getDeliveries,
  deleteDeliveries,
}

export default deliveryService
