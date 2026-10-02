import { useState } from "react";

const ShortenForm = ({ onShorten }) => {
  const [url, setUrl] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const trimmedUrl = url.trim();

    if (!trimmedUrl) {
      setError("Please add a link");
      return;
    }

    setError("");
    setIsLoading(true);

    try {
      const response = await fetch("/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: trimmedUrl,
        }),
      });

      const data = await response.json();

      if (!response.ok || data.error) {
        throw new Error(data.error || "Unable to shorten this URL");
      }

      onShorten({
        originalUrl: trimmedUrl,
        shortUrl: data.result_url,
      });

      setUrl("");
    } catch (error) {
      console.error("URL shortening error:", error);

      setError(error.message || "Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="shortener"
      className="relative z-10 mx-auto -mb-20 max-w-277.5 px-6 md:-mb-16 lg:px-0"
    >
      <div className="rounded-[10px] bg-brand-purple px-6 py-6 md:px-12 md:py-12">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 md:flex-row md:gap-6"
        >
          <div className="flex-1">
            <input
              type="url"
              value={url}
              onChange={(event) => {
                setUrl(event.target.value);

                if (error) {
                  setError("");
                }
              }}
              placeholder="Shorten a link here..."
              aria-label="Enter URL to shorten"
              aria-invalid={Boolean(error)}
              className={`h-16 w-full rounded-[10px] border-2 bg-white px-6 font-poppins text-[16px] font-medium text-brand-gray-900 outline-none placeholder:text-brand-gray-500 ${
                error
                  ? "border-brand-red"
                  : "border-transparent focus:border-brand-blue"
              }`}
            />

            {error && (
              <p className="mt-1 text-[12px] italic text-brand-red">{error}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="h-16 rounded-[10px] bg-brand-blue px-8 font-poppins text-[16px] font-bold text-white transition-opacity hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-60 md:min-w-37.5"
          >
            {isLoading ? "Shortening..." : "Shorten It!"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ShortenForm;
