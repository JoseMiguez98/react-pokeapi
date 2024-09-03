export async function fetchAll(urls: string[]) {
  const fetchPromises = urls.map((url) => fetch(url).then((res) => res.json()));
  const results = await Promise.all(fetchPromises);

  return results;
}
