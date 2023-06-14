let bill = document.querySelector(`#bill`);
let discount = document.querySelector(`#discount`);
let calculator = document.querySelector(`#calculator`);
let total = document.querySelector(`#total`);

calculator.addEventListener(`click`, () => {
  const billValue = bill.value;
  const discountValue = discount.value;
  const validate = isValid(discountValue);
  const billValidate = isBillValid(billValue);

  if (validate) {
    const discountAmount = billValue - (billValue * discountValue) / 100;
    total.innerHTML = `Amount to pay only : ${discountAmount}`;
  } else {
    alert(`You have entered invalid discount: ${discountValue}`);
  }
  if (billValidate) {
    const discountAmount = billValue - (billValue * discountValue) / 100;
    total.innerHTML = `Amount to pay only : ${discountAmount}`;
  } else {
    alert(`Entered incorrect bill amount: ${billValue}`);
  }
});

function isValid(discount) {
  if (discount < 0 || discount > 100) {
    return false;
  }
  return true;
}
function isBillValid(bill) {
  if (bill <= 0 || bill == null) {
    return false;
  }
  return true;
}
