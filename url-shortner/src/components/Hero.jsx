import illustrationWorking from "../assets/images/illustration-working.svg";

const Hero = () => {
  return (
    <section className="overflow-hidden bg-white">
      <div className="mx-auto flex max-w-277.5 flex-col-reverse items-center px-6 pb-28 pt-8 md:flex-row md:items-center md:gap-8 md:pb-36 md:pt-14 lg:gap-12 lg:px-0">
        {/* Hero Content */}
        <div className="mt-10 flex w-full shrink-0 flex-col items-center text-center md:mt-0 md:w-[48%] md:items-start md:text-left lg:w-[50%]">
          <h1 className="font-poppins text-[40px] font-bold leading-[1.15] tracking-[-1.5px] text-brand-gray-900 sm:text-[48px] md:text-[52px] lg:text-[64px] lg:leading-[1.1]">
            More than just
            <br />
            shorter links
          </h1>

          <p className="mt-5 max-w-125 font-poppins text-[18px] font-medium leading-[1.7] text-brand-gray-500 md:mt-4">
            Build your brand&apos;s recognition and get detailed insights on how
            your links are performing.
          </p>

          <a
            href="#shortener"
            className="mt-7 rounded-full bg-brand-blue px-8 py-3 font-poppins text-[18px] font-bold text-white transition-opacity hover:opacity-80 focus-visible:outline-brand-blue md:mt-8"
          >
            Get Started
          </a>
        </div>

        {/* Hero Illustration */}
        <div className="flex w-full shrink-0 justify-center md:w-[52%] md:justify-end lg:w-[50%]">
          <img
            src={illustrationWorking}
            alt="Illustration of a person working with shortened links"
            className="w-75 max-w-none sm:w-95 md:w-125 lg:w-162.5"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
