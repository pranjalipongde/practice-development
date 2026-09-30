import illustrationWorking from "../assets/images/illustration-working.svg";

const Hero = () => {
  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto flex max-w-277.5 gap-4 flex-col-reverse items-center px-6 pb-28 pt-8 md:flex-row md:items-center md:pb-36 md:pt-14 lg:px-0">
        {/* Hero Content */}
        <div className="mt-10 flex w-full flex-col items-center text-center md:mt-0 md:w-[55%] md:items-start md:text-left">
          <h1 className="max-w-175 font-poppins text-[40px] font-bold leading-[1.15] tracking-[-1.5px] text-brand-gray-900 sm:text-[48px] md:text-[52px] lg:text-[64px] lg:leading-[1.1]">
            More than just
            <br />
            shorter links
          </h1>

          <p className="mt-5 max-w-135 font-poppins text-[18px] font-medium leading-[1.7] text-brand-gray-500 md:mt-4">
            Build your brand&apos;s recognition and get detailed insights on how
            your links are performing.
          </p>

          <a
            href="#shortener"
            className="mt-7 rounded-full bg-brand-blue px-8 py-3 font-poppins text-[18px] font-bold text-white transition-all hover:opacity-80 focus-visible:outline-brand-blue md:mt-8"
          >
            Get Started
          </a>
        </div>

        {/* Hero Illustration */}
        <div className="relative flex w-full justify-center md:w-[55%] md:justify-end">
          <img
            src={illustrationWorking}
            alt="Illustration of a person working with shortened links"
            className="w-75 max-w-none sm:w-95 md:w-125 lg:w-175"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
