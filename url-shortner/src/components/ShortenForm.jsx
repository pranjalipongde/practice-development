const ShortenForm = () => {
  return (
    <section
      id="shortener"
      className="relative z-10 mx-auto -mb-20 max-w-277.5 px-6 md:-mb-16 lg:px-0"
    >
      <div className="rounded-[10px] bg-brand-purple px-6 py-6 md:px-12 md:py-10">
        <form className="flex flex-col gap-4 md:flex-row">
          {/* URL Input */}
          <div className="flex-1">
            <input
              type="url"
              placeholder="Shorten a link here..."
              aria-label="Enter URL to shorten"
              className="h-16 w-full rounded-[10px] border-2 border-transparent bg-white px-6 font-poppins text-[16px] font-medium text-brand-gray-900 outline-none placeholder:text-brand-gray-500 focus:border-brand-blue"
            />

            {/* We'll use this later for the error state */}
            {/* <p className="mt-1 text-sm italic text-brand-red">
              Please add a link
            </p> */}
          </div>

          {/* Button */}
          <button
            type="submit"
            className="h-16 rounded-[10px] bg-brand-blue px-8 font-poppins text-[16px] font-bold text-white transition-opacity hover:opacity-80 focus-visible:outline-brand-blue md:min-w-37.5"
          >
            Shorten It!
          </button>
        </form>
      </div>
    </section>
  );
};

export default ShortenForm;
