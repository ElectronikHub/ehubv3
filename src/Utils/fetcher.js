// Example fetcher utility
export const fetcher = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Network error");
  return response.json();
};
