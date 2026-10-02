import FeatureCard from "./FeatureCard";

import brandRecognition from "../assets/images/icon-brand-recognition.svg";
import detailedRecords from "../assets/images/icon-detailed-records.svg";
import fullyCustomizable from "../assets/images/icon-fully-customizable.svg";

const Statistics = () => {
  return (
    <section className="bg-brand-gray-400/20 px-6 pb-24 pt-16 md:pb-28 md:pt-20">
      <div className="mx-auto max-w-277.5">
        {/* Section Heading */}
        <div className="mx-auto max-w-135 text-center">
          <h2 className="font-poppins text-[28px] font-bold text-brand-gray-900 md:text-[36px]">
            Advanced Statistics
          </h2>

          <p className="mt-4 font-poppins text-[16px] font-medium leading-[1.7] text-brand-gray-500 md:text-[18px]">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="relative mt-24 grid gap-24 md:grid-cols-3 md:gap-7">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 hidden h-2 w-[75%] -translate-x-1/2 translate-y-25 bg-brand-blue md:block" />

          {/* Mobile Connecting Line */}
          <div className="absolute left-1/2 top-0 h-full w-2 -translate-x-1/2 bg-brand-blue md:hidden" />

          <FeatureCard
            icon={brandRecognition}
            title="Brand Recognition"
            description="Boost your brand recognition with every click. Generic links don't mean a thing. Branded links help instil confidence in your content."
            className="z-10 md:mt-0"
          />

          <FeatureCard
            icon={detailedRecords}
            title="Detailed Records"
            description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps you make better decisions."
            className="z-10 md:mt-8"
          />

          <FeatureCard
            icon={fullyCustomizable}
            title="Fully Customizable"
            description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
            className="z-10 md:mt-16"
          />
        </div>
      </div>
    </section>
  );
};

export default Statistics;
