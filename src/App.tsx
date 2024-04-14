import { useState } from "react";
import CreditSlider from "./components/credit-slider";
import { CreditDto } from "./schemas/credit-dto.type";

// TODO: memoize fn props

function App() {
  const [amount, setAmount] = useState<CreditDto>({ value: 0, valid: false });

  const [payments, setPayments] = useState<CreditDto>({
    value: 0,
    valid: false,
  });

  const disabledBtns = !amount.valid || !payments.valid;

  return (
    <>
      <h1>Simulá tu crédito</h1>
      <div>
        <CreditSlider
          min={5000}
          max={50000}
          title="monto total"
          onChange={(n) => {
            setAmount((prev) => ({ valid: prev.valid, value: n }));
          }}
          validityChange={(valid) => {
            setAmount((prev) => ({ valid, value: prev.value }));
          }}
        />

        <CreditSlider
          min={3}
          max={24}
          title="plazo"
          onChange={(n) => {
            setPayments((prev) => ({ value: n, valid: prev.valid }));
          }}
          validityChange={(valid) => {
            setPayments((prev) => ({ value: prev.value, valid }));
          }}
        />
      </div>
      <div>
        <button
          onClick={(e) => console.log("obt cred")}
          disabled={disabledBtns}
        >
          Obtené crédito
        </button>
        <button
          onClick={(e) => console.log("ver coutas")}
          disabled={disabledBtns}
        >
          Ver detalle de cuotas
        </button>
      </div>
    </>
  );
}

export default App;
