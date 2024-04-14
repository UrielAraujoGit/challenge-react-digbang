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
      <CreditContainer
        openModalCredit={openModalCredit}
        openModalPaymentsDetails={openModalPaymentsDetails}
      ></CreditContainer>
    </>
  );
}

export default App;
