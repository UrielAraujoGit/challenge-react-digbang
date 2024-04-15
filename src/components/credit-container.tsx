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
      <div className="bg-primary-default text-white p-10">
        <h1 className="font-bold text-2xl text-center pb-6">
          Simulá tu crédito
        </h1>
        <div>
          <div className="py-4">
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
              prefix={<>$</>}
            />
          </div>

          <div className="py-4">
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
        </div>
        <div>
          <h6 className="bg-primary-dark font-bold uppercase flex justify-between px-8 py-3 items-center">
            <span className="text-lg ">Cuotas fijas por mes</span>{" "}
            <span className="text-4xl">${paymentsAmout || "-"}</span>
          </h6>
        </div>
        <div className="flex gap-2">
          <button
            onClick={(e) => openModalCredit(amount.value, payments.value)}
            disabled={disabledBtns}
            className="bg-teal-500 py-3 text-center text-xl uppercase font-bold flex-grow"
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
            className="bg-primary-btn uppercase font-bold text-xs w-1/3 md:w-1/4"
          >
            Ver detalle de cuotas
          </button>
        </div>
      </div>
    </>
  );
};

export default CreditContainer;
