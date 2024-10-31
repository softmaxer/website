import { contentType } from "@/app/api/detect/route";

const API_ENDPOINT = "/api/contact";

export default async function handleSendEmail(data: {
  username: string;
  email: string;
  message: string;
}): Promise<{ data?: unknown; message?: string; error?: string }> {
  const detectMarketing = await fetch("/api/detect", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: data.message }),
  });
  const isMarketing: contentType = await detectMarketing.json();
  if (isMarketing.marketing_content === true) {
    return {
      data,
      message: isMarketing.errorMessage,
      error: isMarketing.errorMessage,
    };
  }
  const response = await fetch(API_ENDPOINT, {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return response.json();
}
