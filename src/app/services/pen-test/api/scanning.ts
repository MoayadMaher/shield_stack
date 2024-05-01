async function apiFetch(params: string) {
  try {
    const fullUrl = `https://pen-test-production.up.railway.app${params}`;
    console.log("API request:", fullUrl);
    const response = await fetch(fullUrl);
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Unknown error occurred");
    }
    return await response.json();
  } catch (error: any) {
    console.error("API error:", error.message);
    return { error: error.message };
  }
}

export default async function scan(target: string, scanType: string) {
  switch (scanType) {
    case "nmap":
      return await apiFetch(`/nmap/scan?target=${target}`);
    case "whois":
      return await apiFetch(`/whois/scan?url=${target}`);
    case "dirserch":
      await fetch(
        `https://pen-test-production.up.railway.app/dirsearch/setTarget?url=${target}`,
      );
      return await apiFetch(`/dirsearch/getRawResults`);
    default:
      throw new Error(`Invalid scan type: ${scanType}`);
  }
}
