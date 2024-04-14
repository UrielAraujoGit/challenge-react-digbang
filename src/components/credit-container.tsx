import { FC, useState } from "react";
import { CreditDto } from "../schemas/credit-dto.type";
import CreditSlider from "./credit-slider";

interface CreditContainerProps {
  openModalCredit: (loan: number, installments: number) => void;
  openModalPaymentsDetails: (
    loan: number,
    installments: number,
    paymentsAmout: number
  ) => void;
}

const CreditContainer: FC<CreditContainerProps> = ({
  openModalCredit,
  openModalPaymentsDetails,
}) => {
  const [amount, setAmount] = useState<CreditDto>({ value: 0, valid: false });

  const [payments, setPayments] = useState<CreditDto>({
    value: 0,
    valid: false,
  });

  const paymentsAmout =
    amount.value && payments.value
      ? (amount.value / payments.value).toFixed(2)
      : null;

  const disabledBtns = !amount.valid || !payments.valid;

  return (
    <>
      <section className="bg-blue-800">
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
          <h6>
            Cuotas fijas por mes <span>${paymentsAmout || "-"}</span>
          </h6>
        </div>
        <div>
          <button
            onClick={(e) => openModalCredit(amount.value, payments.value)}
            disabled={disabledBtns}
          >
            Obtené crédito
          </button>
          <button
            onClick={(e) =>
              openModalPaymentsDetails(
                amount.value,
                payments.value,
                Number(paymentsAmout)
              )
            }
            disabled={disabledBtns}
          >
            Ver detalle de cuotas
          </button>
        </div>
      </section>
    </>
  );
};

export default CreditContainer;
