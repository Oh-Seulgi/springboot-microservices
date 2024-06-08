import axios from "axios";

// FIXME: BASE_URL 정해지면 추후에 지정
const BASE_URL = "http://localhost:9191/api";

const API = {
  TestService: `${BASE_URL}/test`,
};
export default API;

export const fetchTestData = async (testId: number) => {
  const response = await axios.get(`${API.TestService}/${testId}`);
  return response;
};
