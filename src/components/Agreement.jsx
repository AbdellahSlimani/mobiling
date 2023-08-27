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
    <div className="px-[140px] py-[72px]">
      <h1 className="mb-[32px] text-[40px] font-medium text-[#344054]">
        Mobiling Social
      </h1>

      <div className="agreement_bg h-[399px] rounded-[30px] p-[30px]">
        <div className="flex h-full w-full flex-col justify-end gap-[20px] border-2 border-dashed pb-[40px] pl-[20px] text-white">
          <h1 className="text-[32px] font-medium text-[#FCFCFD]">
            Information on data processing
          </h1>
          <p className="text-[16px] text-[#FCFCFD] ">
            On our website we provide content from Storystream. To view this
            content, you must agree to the data processing by Storystream.
          </p>
          <div className="flex gap-[30px]">
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
