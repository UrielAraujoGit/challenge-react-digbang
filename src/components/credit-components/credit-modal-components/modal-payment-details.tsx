import { FC } from "react";

interface ModalPaymentDetailsProps {
  total: number;
  installments: number;
  paymentsAmount: number;
}
interface InstallmentItem {
  id: number;
  installment_index: number;
  description: string;
  amount: number;
}

const ModalPaymentDetails: FC<ModalPaymentDetailsProps> = ({
  total,
  installments,
  paymentsAmount,
}) => {
  const installmentsList: Array<InstallmentItem> = [];
  console.log("call api/credits", {
    data: { total, paymentsAmount, installments },
  });
  for (let index = 0; index < installments; index++) {
    installmentsList.push({
      id: index,
      installment_index: index + 1,
      description: `Cuota N° ${index + 1}`,
      amount: paymentsAmount,
    });
  }

  return (
    <>
      <div>
        <h3 className="font-bold text-2xl text-center text-primary-light pb-5">
          Detalles de cuotas
        </h3>
        {installmentsList.map((item) => (
          <ul key={item.id} className="py-2 border-b">
            <p>
              <span className="font-bold ">Cuota:</span>{" "}
              {item.installment_index}
            </p>
            <p>
              <span className="font-bold ">Importe:</span> ${item.amount}
            </p>
            <p>
              <span className="font-bold ">Descripción:</span>{" "}
              {item.description}
            </p>
          </ul>
        ))}
        <h5 className="font-bold text-xl py-5">Total: ${total}</h5>
      </div>
    </>
  );
};

export default ModalPaymentDetails;
