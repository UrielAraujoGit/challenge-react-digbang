import Slider from "rc-slider";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState(0);
  const [payments, setPayments] = useState(0);

  const formatNumber = (n: number | Array<number>) => {
    if (typeof n !== "number") {
      console.error("the amount provided is not a number", n);
      return null;
    }

    return n;
  };

  const handleSetAmout = (n: number | null) => {
    if (n !== null) {
      setAmount(n);
    }
  };

  const handleSetPayments = (n: number | null) => {
    if (n !== null) {
      setPayments(n);
    }
  };
  return (
    <>
      <h1>Simulá tu crédito</h1>
      <div>
        <div>
          <h6>monto total</h6>
          <p>{amount}</p>
        </div>
        <div>
          <Slider
            min={5000}
            max={50000}
            onChange={(e) => handleSetAmout(formatNumber(e))}
          />
        </div>

        <div>
          <h6>plazo</h6>
          <p>{payments}</p>
        </div>
        <div>
          <Slider
            min={3}
            max={24}
            onChange={(e) => handleSetPayments(formatNumber(e))}
          />
        </div>
      </div>
    </>
  );
}

export default App;
