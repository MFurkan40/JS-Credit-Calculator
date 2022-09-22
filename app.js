console.log("**** Credit Calculator *******");
const select = document.querySelector(".form-select");
const term = document.querySelector("#term");
const amount = document.querySelector("#amount");
const calcBtn = document.querySelector(".btn-success");
let rate = 0;
let amountOfPayment = 0;

calcBtn.addEventListener("click", (e) => {
  //? PreventDefault() event prevent default behavior (exp. submit and delete the form)
  const bgImage = document.querySelector("body");
  e.preventDefault();
  if (select.value === "Housing Loan") {
    rate = 1.29;
    bgImage.style.backgroundImage = "url('./img/konut.jpg')";
    bgImage.style.backgroundRepeat = "no-repeat";
    bgImage.style.backgroundSize = "cover";
  } else if (select.value === "Personal Finance Credit") {
    rate = 1.99;
    bgImage.style.backgroundImage = "url('./img/tatil.jpg')";
    bgImage.style.backgroundRepeat = "no-repeat";
    bgImage.style.backgroundSize = "cover";
  } else if (select.value === "Car Loan") {
    rate = 1.79;
    bgImage.style.backgroundImage = "url('./img/arac.jpg')";
    bgImage.style.backgroundRepeat = "no-repeat";
    bgImage.style.backgroundSize = "cover";
  }

  if (!select.value || !term.value || !amount.value) {
    alert("Lutfen Kredi turu, Vade ve tutari giriniz");
  }

  const interest = rate / 100;
  amountOfPayment =
    (amount.value * (interest * (1 + interest) ** term.value)) /
    ((1 + interest) ** term.value - 1);

  // console.log(amountOfPayment);
  finalResult();
});

const finalResult = () => {
  const results = document.querySelector(".results");

  results.innerHTML = `
  <h2 class="mt-3 text-danger">Credit Info</h2>
  <table class="table table-bordered border-success text-bg-dark  mt-4">
   <tbody>
    <tr>
      <th>Loan Amount</th>
      <td>${amount.value} ₺</td>
      <th>Credit Type</th>
      <td>${select.value}</td>
    </tr>
    <tr>
      <th>Term</th>
      <td>${term.value}</td>
      <th>Interest Rate</th>
      <td>${rate}</td>
    </tr>
    <tr>
      <th>Total Amount</th>
      <td>${(amountOfPayment * term.value).toFixed(2)} ₺</td>
      <th>Amount of Payment</th>
      <td>${amountOfPayment.toFixed(2)} ₺</td>
    </tr>
  </tbody>

</table>

  `;
};
