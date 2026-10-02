const ShortenedLinks = () => {
  return (
    <section className="bg-brand-gray-400/20 pb-28 pt-28 md:pb-32 md:pt-28">
      <div className="mx-auto max-w-277.5 px-6 lg:px-0">
        {/* First shortened link */}
        <div className="flex flex-col overflow-hidden rounded-[5px] bg-white md:flex-row md:items-center md:justify-between">
          {/* Original URL */}
          <p className="truncate px-5 py-4 font-poppins text-[16px] font-medium text-brand-gray-900 md:px-6 md:py-5">
            https://frontendmentor.io
          </p>

          {/* Short URL + Button */}
          <div className="flex flex-col border-t border-brand-gray-400/30 md:flex-row md:items-center md:border-0">
            <p className="px-5 py-3 font-poppins text-[16px] font-medium text-brand-blue md:px-6 md:py-5">
              https://rel.ink/k4IKyk
            </p>

            <button
              type="button"
              className="mx-5 mb-4 rounded-[5px] bg-brand-blue py-3 font-poppins text-[16px] font-bold text-white transition-opacity hover:opacity-80 md:mx-0 md:my-0 md:mr-6 md:min-w-25.75"
            >
              Copy
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShortenedLinks;
