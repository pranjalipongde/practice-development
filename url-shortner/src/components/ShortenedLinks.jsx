import { useState } from "react";

const ShortenedLinks = ({ links }) => {
  const [copiedUrl, setCopiedUrl] = useState("");

  if (links.length === 0) {
    return null;
  }

  const handleCopy = async (shortUrl) => {
    try {
      await navigator.clipboard.writeText(shortUrl);

      setCopiedUrl(shortUrl);

      // Reset button after 2 seconds
      setTimeout(() => {
        setCopiedUrl("");
      }, 2000);
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  return (
    <section className="bg-[#f0f1f6] pb-28 pt-32 md:pb-32 md:pt-28">
      <div className="mx-auto flex max-w-277.5 flex-col gap-4 px-6 lg:px-0">
        {links.map((link) => {
          const isCopied = copiedUrl === link.shortUrl;

          return (
            <div
              key={`${link.originalUrl}-${link.shortUrl}`}
              className="flex flex-col overflow-hidden rounded-[5px] bg-white md:flex-row md:items-center md:justify-between"
            >
              {/* Original URL */}
              <p className="truncate border-b border-brand-gray-400/30 px-5 py-4 font-poppins text-[16px] font-medium text-brand-gray-900 md:max-w-[55%] md:border-0 md:px-6 md:py-5">
                {link.originalUrl}
              </p>

              {/* Short URL + Copy */}
              <div className="flex flex-col md:flex-row md:items-center">
                <p className="px-5 py-3 font-poppins text-[16px] font-medium text-brand-blue md:px-6 md:py-5">
                  {link.shortUrl}
                </p>

                <button
                  type="button"
                  onClick={() => handleCopy(link.shortUrl)}
                  className={`mx-5 mb-4 rounded-[5px] py-3 font-poppins text-[16px] font-bold text-white transition-colors md:mx-0 md:my-0 md:mr-6 md:min-w-25.75 ${
                    isCopied
                      ? "bg-brand-purple"
                      : "bg-brand-blue hover:opacity-80"
                  }`}
                >
                  {isCopied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ShortenedLinks;
