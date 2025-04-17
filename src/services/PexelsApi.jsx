import axios from 'axios';

// Function to fetch multiple images from Pexels
export const fetchImagesFromPexels = async (query, perPage = 5) => {
  try {
    const response = await axios.get('https://api.pexels.com/v1/search', {
      params: {
        query,
        per_page: perPage,
      },
      headers: {
        Authorization: import.meta.env.VITE_PEXELS_API_KEY,
      },
    });

    return response.data.photos; // Array of photo objects
  } catch (error) {
    console.error('Error fetching images from Pexels:', error);
    return [];
  }
};

// Optional: Function to fetch only a single image
export const fetchSingleImageFromPexels = async (query) => {
  try {
    const response = await axios.get('https://api.pexels.com/v1/search', {
      params: {
        query,
        per_page: 1,
      },
      headers: {
        Authorization: import.meta.env.VITE_PEXELS_API_KEY,
      },
    });

    return response.data.photos[0] || null;
  } catch (error) {
    console.error('Error fetching single image from Pexels:', error);
    return null;
  }
};
