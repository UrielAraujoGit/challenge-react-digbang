import CreditContainer from "./components/credit-container";

// TODO: memoize fn props

function App() {
  const openModalCredit = (loan: number, installments: number) =>
    alert("¡Crédito solicitado con éxito!");

  const openModalPaymentsDetails = (
    loan: number,
    installments: number,
    paymentsAmout: number
  ) => {
    alert(`el valor de cada cuota es: $${paymentsAmout}`);
  };

  return (
    <>
      <section className="bg-primary-light p-11 flex justify-center">
        <div className="w-full max-w-full md:max-w-xl lg:max-w-xl 2xl:max-w-3xl">
          <CreditContainer
            openModalCredit={openModalCredit}
            openModalPaymentsDetails={openModalPaymentsDetails}
          ></CreditContainer>
        </div>
      </section>
    </>
  );
}

export default App;
