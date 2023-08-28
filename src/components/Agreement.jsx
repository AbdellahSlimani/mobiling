import chevronRight from "../assets/chevron-right.svg";
function Agreement() {
  const btns = [
    {
      text: "Agree",
    },
    {
      text: "Information on data privacy",
    },
  ];

  return (
    <div className="px-[20px] py-[72px] md:px-[140px]">
      <h1 className="mb-[32px] text-center text-[30px] font-medium text-[#344054] md:text-left md:text-[40px]">
        Mobiling Social
      </h1>

      <div className="agreement_bg rounded-[15px] md:rounded-[30px]  p-[10px] md:h-[399px] md:p-[30px]">
        <div className="flex h-full w-full flex-col justify-end gap-[20px] rounded-[15px] border-2 border-dashed p-[10px] text-white md:rounded-none md:pb-[40px] md:pl-[20px]">
          <h1 className="text-[25px] font-medium text-[#FCFCFD] md:text-[32px]">
            Information on data processing
          </h1>
          <p className="text-[12px] text-[#FCFCFD] md:text-[16px] ">
            On our website we provide content from Storystream. To view this
            content, you must agree to the data processing by Storystream.
          </p>
          <div className="flex gap-[5px] md:gap-[30px]">
            {btns.map((btn) => {
              return (
                <button className="agreement_btn">
                  <img src={chevronRight} alt="chevron right" />
                  {btn.text}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Agreement;
