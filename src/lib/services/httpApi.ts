const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const baseFetch = {
  get: async <T>(endpoint: string): Promise<T> => {
    try {
      const response = await fetch(endpoint);

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
