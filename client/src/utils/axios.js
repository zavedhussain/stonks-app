import axios from "axios";

const url = "http://localhost:5000/api/fetchStockData";

export const fetchData = async (data) => {
  try {
    const resp = await axios.post(url, data);
    return resp.data;
  } catch (error) {
    return error.response.data;
  }
};
