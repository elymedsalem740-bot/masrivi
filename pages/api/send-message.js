export default async function handler(req, res) {
  const BOT_TOKEN = process.env.BOT_TOKEN;
  const CHAT_ID = process.env.CHAT_ID;

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ message: "Text is required" });
  }

  try {
    const telegram = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text: text
        })
      }
    );

    const result = await telegram.json();

    if (!result.ok) {
      return res.status(400).json({ success: false, telegram: result });
    }

    res.status(200).json({
      success: true,
      telegram: result,
      message: "تم إرسال الرسالة بنجاح"
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}