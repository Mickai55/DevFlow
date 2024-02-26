import { NextResponse } from "next/server";

export const POST = async (request: Request) => {
  const { question } = await request.json();

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a helpful assistant that will provide a short, correct response to this question.",
          },
          {
            role: "user",
            content: `What is the solution to the following: ${question}`,
          },
        ],
      }),
    });

    const data = await response.json();
    console.log(data);
    const reply = data.choices[0].message.content;

    return NextResponse.json({ reply });
  } catch (error: any) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
};
