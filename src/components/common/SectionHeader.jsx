const SectionHeader = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[90px]">
      <div className="flex items-center justify-center gap-[10px]">
        <span className="flex items-center justify-center ">
          <img src="./icons/bloom-l.svg" alt="bloom" />
        </span>
        <h2 className="text-[18px] leading-p-lg lg:text-h1 text-text-color2 lg:leading-h1 font-[700] uppercase">
          {children}
        </h2>
        <span className="flex items-center justify-center ">
          <img src="./icons/bloom-r.svg" alt="bloom" />
        </span>
      </div>
      <button className=" text-p-md leading-p-md  2xl:text-p-lg 2xl:leading-p-md text-text-color1 font-[400px] hover:text-[#f98da1] transition-all ease-in-out duration-300">
        see all
      </button>
    </div>
  );
};

export default SectionHeader;
