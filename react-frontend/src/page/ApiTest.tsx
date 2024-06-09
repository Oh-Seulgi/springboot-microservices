import { useState } from "react";
import { fetchTestData } from "../APIconfig";

interface ApiResponse {
  id?: string;
  name?: string;
}

export default function ApiTest() {
  const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);

  const handleApiTest = async () => {
    // FIXME: mockdata

    try {
      const response = await fetchTestData(Number(1000));
      setApiResponse(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <h1>api test page</h1>
      <button onClick={handleApiTest}>API 빵야빵야!!</button>
      {apiResponse && <>{apiResponse}</>}
    </>
  );
}
