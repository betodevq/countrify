// lib/services/apiService.js
const BASE_URL = "http://localhost:3000";

interface RequestOptions {
  endpoint: string;
}

const baseFetch = {
  get: async <T>(endpoint: string): Promise<T> => {
    try {
      const response = await fetch(`${BASE_URL}${endpoint}`);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error("API request failed:", error);
      throw error;
    }
  },
};

export default baseFetch;
