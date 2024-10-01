import { getAPIUrl } from "@/services/config";
import { RequestBody, errorHandling } from "@/services/requests";

export async function getTotalSales() {
  const result = await fetch(
    `${getAPIUrl()}sales`,
    RequestBody("GET", null, null)
  );
  const res = await errorHandling(result);
  return res;
}
