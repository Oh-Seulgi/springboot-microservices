import { useState } from "react";
import { fetchTestData } from "../APIconfig";

interface ApiResponse {
  [x: string]: any;
  name?: string;
  description?: string;
}

export default function ApiTest() {
  const [apiResponse, setApiResponse] = useState<ApiResponse | null>(null);

  const handleApiTest = async () => {
    // FIXME: mockdata

    try {
      const response = await fetchTestData();
      setApiResponse(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <h1>api test page</h1>
      <button onClick={handleApiTest}>API 빵야빵야!!</button>
      {apiResponse && (
        <ul>
          {apiResponse.map((item: { name: string; description: string }) => (
            <li key={item.name}>
              <p>{item.name}</p>
              <p>{item.description}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
