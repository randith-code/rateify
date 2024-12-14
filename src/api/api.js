import axios from "axios";

const API_URL = "https://dummyjson.com/products";

export const fetchProducts = async (limit = 12, skip = 0) => {
  try {
    const response = await axios.get(API_URL, {
      params: { limit, skip }, //parameters
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// select: "title,price";
