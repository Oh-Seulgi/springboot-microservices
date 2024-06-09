import axios from "axios";

const API = {
  boardService: `${process.env.REACT_APP_BASE_URL}/boards`,
};
export default API;

export const fetchTestData = async () => {
  const response = await axios.get(`${API.boardService}/list`);
  return response;
};
