export default async function analyzer(url: string) {
  let data;
  try {
    const apiResponse = await fetch(
      `https://humble-headers-analyzer-production.up.railway.app/?url=${url}`,
    );
    data = await apiResponse.json();
  } catch (error) {
    console.error(error);
    return null;
  }
  return data;
}
