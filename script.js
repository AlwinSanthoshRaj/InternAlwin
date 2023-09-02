document.addEventListener("DOMContentLoaded", function () {
  const calculateButton = document.getElementById("calculate");
  const loanAmountInput = document.getElementById("loanAmount");
  const interestRateInput = document.getElementById("interestRate");
  const loanTermInput = document.getElementById("loanTerm");
  const monthlyPaymentOutput = document.getElementById("monthlyPayment");

  calculateButton.addEventListener("click", function () {
      const loanAmount = parseFloat(loanAmountInput.value);
      const interestRate = parseFloat(interestRateInput.value) / 100 / 12;
      const loanTerm = parseFloat(loanTermInput.value);
      
      if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
          alert("Please enter valid values.");
          return;
      }

      const monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));
      monthlyPaymentOutput.textContent = `$${monthlyPayment.toFixed(2)}`;
  });
});
