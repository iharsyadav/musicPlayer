const BASE_URL = import.meta.env.VITE_BASE_URL;

export const apiClient = async (
  endpoint,
  options = {}
) => {
  try {
    const response = await fetch(
      `${BASE_URL}${endpoint}`,
      options
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(
        data.message || "Error"
      );
    }

    return data;
  } catch (error) {
    throw error;
  }
};