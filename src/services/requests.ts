/* eslint-disable @typescript-eslint/no-explicit-any */

import { getAPISecrete } from "@/services/config";

export const RequestBody = (method: string, data: any, next: any) => {
  const HeadersConfig = new Headers({
    "Content-Type": "application/json",
    "X-Jsio-Token": getAPISecrete(),
  });
  const options: any = {
    method: method,
    headers: HeadersConfig,
    redirect: "follow",
    credentials: "include",
    // Next.js
    next: next,
  };
  if (data) {
    options.body = JSON.stringify(data);
  }
  return options;
};

export const fetcher = async (url: string, token?: string) => {
  // Create the request options
  const HeadersConfig = new Headers(
    token
      ? { "Content-Type": "application/json", Authorization: `Bearer ${token}` }
      : { "Content-Type": "application/json" }
  );
  const options: any = {
    method: "GET",
    headers: HeadersConfig,
    redirect: "follow",
    credentials: "include",
  };

  try {
    // Fetch the data
    const request = await fetch(url, options);
    const res = errorHandling(request);

    // Return the data
    return res;
  } catch (error: any) {
    throw error;
  }
};

export const errorHandling = (res: any) => {
  if (!res.ok) {
    const error: any = new Error(`${res.statusText}`);
    error.status = res.status;
    throw error;
  }
  return res.json();
};

type CustomResponseTyping = {
  success: boolean;
  data: any;
  status: number;
  HTTPmessage: string;
};

export const getResponseMetadata = async (
  fetch_result: any
): Promise<CustomResponseTyping> => {
  const json = await fetch_result.json();
  if (fetch_result.status === 200) {
    return {
      success: true,
      data: json,
      status: fetch_result.status,
      HTTPmessage: fetch_result.statusText,
    };
  } else {
    return {
      success: false,
      data: json,
      status: fetch_result.status,
      HTTPmessage: fetch_result.statusText,
    };
  }
};
