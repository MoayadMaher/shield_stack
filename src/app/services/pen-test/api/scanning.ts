async function apiFetch(params: string) {
  try {
    const fullUrl = `https://moayad-pen-test-api-production.up.railway.app${params}`;
    const response = await fetch(fullUrl);
    if (!response.ok) {
      const errorData = await response.json();
      return { error: `API request failed with status ${response.status}` };
    }
    return await response.json();
  } catch (error: any) {
    console.error("API error:", error.message);
    return { error: "API request failed" };
  }
}

export default async function scan(target: string, scanType: string) {
  switch (scanType) {
    case "nmap":
      return await apiFetch(`/nmap/scan?url=${target}`);
    case "whois":
      return await apiFetch(`/whois/lookup?url=${target}`);
    default:
      throw new Error(`Invalid scan type: ${scanType}`);
  }
}
