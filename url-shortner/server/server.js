import express from "express";
import cors from "cors";

const app = express();

const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Shorten URL
app.post("/api/shorten", async (req, res) => {
  try {
    const { url } = req.body;

    // Validate URL
    if (!url) {
      return res.status(400).json({
        error: "Please add a link",
      });
    }

    // Send URL to Clean URI
    const formData = new URLSearchParams();

    formData.append("url", url);

    const response = await fetch("https://cleanuri.com/api/v1/shorten", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
    });

    const data = await response.json();

    // Clean URI error
    if (!response.ok || data.error) {
      return res.status(400).json({
        error: data.error || "Unable to shorten this URL",
      });
    }

    // Send shortened URL back to React
    return res.status(200).json({
      result_url: data.result_url,
    });
  } catch (error) {
    console.error("Clean URI error:", error);

    return res.status(500).json({
      error: "Something went wrong. Please try again.",
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
