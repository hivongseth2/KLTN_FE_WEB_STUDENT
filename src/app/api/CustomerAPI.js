import axios from 'axios';
import Cookies from 'js-cookie';

export async function customApi(endpoint, method = 'GET', data = null) {
  const token = JSON.parse(Cookies.get('user'))?.token;
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const apiUrl = `http://interniuh.online/api/${endpoint}`;
  try {
    const response = await axios({
      method,
      url: apiUrl,
      headers,
      data,
    });

    return response;
  } catch (error) {
    if (error.response) {
      console.error(`Error: ${error.response.data.message}`);
    } else if (error.request) {
      console.error('No response received:', error.request);
    } else {
      console.error('Error setting up the request:', error.message);
    }

    throw error;
  }
}
