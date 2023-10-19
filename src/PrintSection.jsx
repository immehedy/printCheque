import { ToWords } from "to-words";

const PrintSection = ({ payee, amount, date, isAcPayee }) => {
  const toWords = new ToWords({
    localeCode: "en-BD",
    converterOptions: {
      currency: true,
      ignoreDecimal: false,
      ignoreZeroCurrency: false,
      doNotAddOnly: false,
      currencyOptions: {
        name: "Taka",
        plural: "Taka",
        symbol: "৳",
        fractionalUnit: {
          name: "Paisa",
          plural: "Paisa",
          symbol: "",
        },
      },
    },
  });
  return (
    <div className="relative">
      {isAcPayee && (
        <span className="absolute mt-14 border-t border-b -rotate-45 font-bold">
          A/C PAYEE ONLY
        </span>
      )}

      {/* <p className="absolute mt-[120.94488189px] ml-[85.590551181px] "> */}
        <p className="absolute mt-[120.94488189px] ml-[87.590551181px] ">
        {payee ?? "Mehedy Hassan"}
      </p>
      {/* <p className="absolute mt-[158.74015748px] ml-[910.23622047px]"> */}
        <p className="absolute mt-[162.74015748px] right-8">
        {amount ?? "0"} /-
      </p>
      {/* <p className="absolute w-[359.05511811px] mt-[170.07874016px] ml-[132.28346457px]"> */}
        <p className="absolute w-[359.05511811px] mt-[170.07874016px] ml-[134.28346457px]">
        {amount ? toWords.convert(amount) : toWords.convert(0)}
      </p>

      {/* <div className="absolute mt-[64.251968504px] w-full  px-[26.456692913px] flex justify-end items-center"> */}
        <div className="absolute mt-[64.251968504px] w-full  px-[46.456692913px] flex justify-end items-center">
        <p className="w-[22.677165354px]">
          {date ? date?.split("-")[2][0] : 0}
        </p>
        <p className="w-[22.677165354px]">{date ? date.split("-")[2][1] : 0}</p>
        <p className="w-[22.677165354px]">{date ? date.split("-")[1][0] : 0}</p>
        <p className="w-[22.677165354px]">{date ? date.split("-")[1][1] : 0}</p>
        <p className="w-[22.677165354px]">{date ? date.split("-")[0][0] : 0}</p>
        <p className="w-[22.677165354px]">{date ? date.split("-")[0][1] : 0}</p>
        <p className="w-[22.677165354px]">{date ? date.split("-")[0][2] : 0}</p>
        <p className="w-[22.677165354px]">{date ? date.split("-")[0][3] : 0}</p>
      </div>
    </div>
  );
};

export default PrintSection;
