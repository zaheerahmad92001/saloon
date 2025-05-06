import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';


const BASE_URL = "https://be.anaqa.sa/api";


const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});


export const setToken = async (token) => {
  await AsyncStorage.setItem("authToken", token);
};

export const removeToken = async () => {
  await AsyncStorage.removeItem("authToken");
  await AsyncStorage.removeItem("refreshToken");
};


const getTokens = async () => {
  const accessToken = await AsyncStorage.getItem("authToken");
  const refreshToken = await AsyncStorage.getItem("refreshToken");
  return { accessToken, refreshToken };
};


const refreshAccessToken = async () => {
  try {
    const { refreshToken } = await getTokens();
    if (!refreshToken) throw new Error("No refresh token found");

    const response = await axios.post(`${BASE_URL}/auth/refresh`, { refreshToken });

    if (response.data?.accessToken) {
      await setToken(response.data.accessToken);
      return response.data.accessToken;
    } else {
      throw new Error("Failed to refresh token");
    }
  } catch (error) {
    console.error("Refresh Token Failed:", error);
    await removeToken();
    throw error;
  }
};


api.interceptors.request.use(
  async (config) => {
    const { accessToken } = await getTokens();
    if (accessToken) {
      console.log('accessToken', accessToken)
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);


api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const newAccessToken = await refreshAccessToken();
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        console.warn("Session expired. Please log in again.");
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

// 🔹 API Service Functions
const apiService = {
  get: async (endpoint, params = {}) => {
    try {
      const response = await api.get(endpoint, { params });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  post: async (endpoint, data = {}) => {
    try {
      const response = await api.post(endpoint, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  postMultipart: async (endpoint, formData) => {
    try {
      const response = await api.post(endpoint, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  putMultipart: async (endpoint, formData) => {
    try {
      const response = await api.put(endpoint, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  

  put: async (endpoint, data = {}) => {
    try {
      const response = await api.put(endpoint, data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  delete: async (endpoint) => {
    try {
      const response = await api.delete(endpoint);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default apiService;
