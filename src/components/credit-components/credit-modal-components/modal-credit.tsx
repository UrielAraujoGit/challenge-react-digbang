import { FC } from "react";

interface ModalCreditProps {
  loan: number;
  installments: number;
}

const ModalCredit: FC<ModalCreditProps> = ({ loan, installments }) => {
  console.log("call api/credits", { data: { loan, installments } });
  return (
    <>
      <div>¡Crédito solicitado con éxito!</div>
    </>
  );
};

export default ModalCredit;
