const tillForm = document.getElementById("till-form");
let paid = null;

tillForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const bill = Number(document.getElementById("bill").value);
  const paidText = document.getElementById("paid").value;
  // An empty input stores null, rather than the number zero.
  paid = paidText === "" ? null : Number(paidText);

  // This call is above the function declaration: declarations are hoisted.
  const change = calculateChange(bill, paid);
  document.getElementById("receipt").hidden = false;
  document.getElementById("stored-paid").textContent = String(paid);
  document.getElementById("paid-kind").textContent = typeof paid;
  document.getElementById("change").textContent = String(change);
  document.getElementById("owed-line").hidden = !(bill > paid);
  document.getElementById("owed").textContent = String(bill - paid);
  document.getElementById("half-line").hidden = !(paid > bill);
  document.getElementById("half-change").textContent = String(change / 2);
});

function calculateChange(bill, paid) {
  return paid - bill;
}
