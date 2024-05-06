async function apiFetch(params: string) {
  try {
    const fullUrl = `https://pen-test-production.up.railway.app${params}`;
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
      return await apiFetch(`/nmap/scan?url=${target}`);
    case "whois":
      return await apiFetch(`/whois/lookup?url=${target}`);
    case "dirserch":
      return await apiFetch(`/dirsearch/start?url=${target}`);
    default:
      throw new Error(`Invalid scan type: ${scanType}`);
  }
}
