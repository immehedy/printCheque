import "./App.css";
import { useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import PrintSection from "./PrintSection";
function App() {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const [payee, setPayee] = useState("");
  const [amount, setAmount] = useState(0);
  const [date, setDate] = useState("");
  const [isAcPayee, setIsAcPayee] = useState(false);

  return (
    <>
      <div className="p-4 max-w-5xl border rounded-md mx-auto mt-24">
        <h1 className="text-2xl font-bold text-center">
          Fourbit Cheque Printing
        </h1>

        <div className="mt-4">
          <label className="block mb-2">Payee Name:</label>
          <input
            type="text"
            value={payee}
            onChange={(e) => setPayee(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mt-4">
          <label className="block mb-2">Amount (BDT):</label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mt-4">
          <label className="block mb-2">Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>

        <div className="mt-4">
          <label className="block mb-2">
            <input
              type="checkbox"
              checked={isAcPayee}
              onChange={() => setIsAcPayee(!isAcPayee)}
              className="mr-2"
            />
            AC Payee Only
          </label>
        </div>

        <div className="flex justify-center">
          <button
            onClick={handlePrint}
            className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            Print Cheque
          </button>
        </div>
      </div>
      <div className="opacity-100">
        <div ref={componentRef}>
          <PrintSection
            amount={amount}
            date={date}
            payee={payee}
            isAcPayee={isAcPayee}
          />
        </div>
      </div>
    </>
  );
}

export default App;
