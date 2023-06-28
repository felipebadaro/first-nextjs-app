export default async function useRequest(baseURL, suffix) {
  const res = await fetch(baseURL + suffix);
  const data = await res.json();
  return data;
}
