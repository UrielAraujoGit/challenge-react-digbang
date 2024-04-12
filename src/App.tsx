import { useState } from "react";
import CreditSlider from "./components/credit-slider";

function App() {
  const [amount, setAmount] = useState(0);
  const [payments, setPayments] = useState(0);

  return (
    <>
      <h1>Simulá tu crédito</h1>
      <div>
        <CreditSlider
          min={5000}
          max={50000}
          title="monto total"
          onChange={setAmount}
        />

        <CreditSlider min={3} max={24} title="plazo" onChange={setPayments} />
      </div>
    </>
  );
}

export default App;
