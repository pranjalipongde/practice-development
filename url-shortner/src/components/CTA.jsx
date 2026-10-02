const CTA = () => {
  return (
    <section className="bg-brand-purple">
      <div className="mx-auto flex min-h-62.5 max-w-277.5 flex-col items-center justify-center px-6 py-16 text-center">
        <h2 className="font-poppins text-[28px] font-bold leading-tight text-white md:text-[36px]">
          Boost your links today
        </h2>

        <a
          href="#shortener"
          className="mt-6 rounded-full bg-brand-blue px-8 py-3 font-poppins text-[18px] font-bold text-white transition-opacity hover:opacity-80 focus-visible:outline-brand-blue"
        >
          Get Started
        </a>
      </div>
    </section>
  );
};

export default CTA;
