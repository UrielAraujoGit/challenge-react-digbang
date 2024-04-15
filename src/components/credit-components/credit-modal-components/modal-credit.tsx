import { FC } from "react";

interface ModalCreditProps {
  loan: number;
  installments: number;
}

const ModalCredit: FC<ModalCreditProps> = ({ loan, installments }) => {
  console.log("call api/credits", { data: { loan, installments } });
  return (
    <>
      <div>
        <h3 className="font-bold text-2xl text-center text-primary-light pb-5">
          ¡Crédito solicitado con éxito!
        </h3>
      </div>
    </>
  );
};

export default ModalCredit;
