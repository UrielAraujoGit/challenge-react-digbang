import { ReactNode, useState } from "react";
import CreditContainer from "./components/credit-components/credit-container";
import ModalCredit from "./components/credit-components/credit-modal-components/modal-credit";
import ModalContainer from "./components/modal-component";
import ModalPaymentDetails from "./components/credit-components/credit-modal-components/modal-payment-details";

// TODO: memoize fn props

function App() {
  const openModalCredit = (loan: number, installments: number) => {
    const modalCredit = (
      <ModalCredit loan={loan} installments={installments}></ModalCredit>
    );
    setModal(modalCredit);
  };

  const openModalPaymentsDetails = (
    loan: number,
    installments: number,
    paymentsAmount: number
  ) => {
    const modalPaymentDetails = (
      <ModalPaymentDetails
        total={loan}
        installments={installments}
        paymentsAmount={paymentsAmount}
      ></ModalPaymentDetails>
    );
    setModal(modalPaymentDetails);
  };

  const [modal, setModal] = useState<ReactNode | null>(null);

  return (
    <>
      <section className="bg-primary-light p-3 sm:p-8 md:p-11 flex justify-center min-h-svh items-center bg-gradient-to-b from-primary-light to-primary-default relative">
        <div className="w-full max-w-full md:max-w-xl lg:max-w-xl 2xl:max-w-3xl z-0">
          <CreditContainer
            openModalCredit={openModalCredit}
            openModalPaymentsDetails={openModalPaymentsDetails}
          ></CreditContainer>
        </div>

        {modal ? (
          <ModalContainer closeModal={() => setModal(null)}>
            {modal}
          </ModalContainer>
        ) : null}
      </section>
    </>
  );
}

export default App;
