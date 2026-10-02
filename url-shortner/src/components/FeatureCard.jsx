const FeatureCard = ({ icon, title, description, className = "" }) => {
  return (
    <article
      className={`relative rounded-[5px] bg-white px-7 pb-10 pt-14 text-center md:text-left ${className}`}
    >
      {/* Icon */}
      <div className="absolute left-1/2 top-0 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-purple md:left-7 md:translate-x-0">
        <img src={icon} alt="" className="h-10 w-10 object-contain" />
      </div>

      <h3 className="font-poppins text-[22px] font-bold text-brand-gray-900">
        {title}
      </h3>

      <p className="mt-4 font-poppins text-[15px] font-medium leading-[1.7] text-brand-gray-500">
        {description}
      </p>
    </article>
  );
};

export default FeatureCard;
