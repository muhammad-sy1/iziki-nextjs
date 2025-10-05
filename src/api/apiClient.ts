// apiClient.ts
export async function apiClient<T>(
  url: string,
  method: string,
  body?: object
): Promise<T> {
  const res = await fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!res.ok) {
    let errorMessage = "Unknown error";
    try {
      const errorData = await res.json();
      errorMessage = errorData.message || JSON.stringify(errorData);
      // console.log(errorData)
    } catch {
      errorMessage = `Error: ${res.status}`;
    }
    throw new Error(errorMessage);
  }
  // console.log(res.json());
  return res.json();
}
