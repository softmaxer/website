import Groq from "groq-sdk";
import { NextResponse } from "next/server";

export interface contentType {
  marketing_content: boolean;
  errorMessage: string;
}

export interface contentDetectionRequest {
  message: string;
}

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

const jsonExample = JSON.stringify({ marketing_content: true });

async function getGroqChatCompletion(message: string) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content:
          "Please respond in a JSON format according to the user's request",
      },

      {
        role: "user",

        content: `I have a contact me page on my music production website, allowing people to contact me regarding producing their tracks, or talking about music. However, random people on the internet are misusing this feature to send me marketing emails that do not concern anything related to music or production. Can you send me a JSON response resembling the following structure if there is such content detected?: ${jsonExample}.\n Here is the message I received: ${message}. Please remember to respond with false if there is no such marketing content detected.`,
      },
    ],

    model: "llama3-8b-8192",
    response_format: { type: "json_object" },
  });
}

export async function POST(req: Request) {
  const reqBody: contentDetectionRequest = await req.json();
  const chatCompletion = await getGroqChatCompletion(reqBody.message);
  try {
    const jsonChatCompletion: contentType = JSON.parse(
      chatCompletion.choices[0].message.content!,
    );

    if (jsonChatCompletion.marketing_content === true) {
      return NextResponse.json({
        marketing_content: true,
        errorMessage: "Oops! Marketing content detected. Rejecting message.",
      });
    }
  } catch (e) {
    console.error(e);
    console.log("Failed to parse JSON from LLM");
    console.log("couldn't verify content in message");
    return NextResponse.json({
      marketing_content: false,
      errorMessage: "Couldn't verify marketing content",
    });
  }
  return NextResponse.json({
    marketing_content: false,
    errorMessage: "",
  });
}
