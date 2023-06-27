import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const content = req.body.messages[1].content;
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            {
              role: "system",
              content:
                "You are an assistant that specializes in providing information about house cleaning services.",
            },
            {
              role: "user",
              content: content,
            },
          ],
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer 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",
          },
        }
      );

      const generatedText = response.data.choices[0].message.content.trim();
      res.status(200).json({ generatedText: generatedText });
    } catch (error) {
      console.error("OpenAI API Error:", error);
      res.status(500).json({ message: "Error generating text" });
    }
  } else {
    res.status(405).json({ message: "Invalid request method" });
  }
}
