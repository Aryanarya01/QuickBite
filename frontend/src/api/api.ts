export const API_URL = "http://localhost:5000/api";

export const apiFetch = async (url: string, options: RequestInit = {}) => {
  const res = await fetch(`${API_URL}${url}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message || "Something went wrong!");
  }
  return data;
};
