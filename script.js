// The array starts empty. Each row is one object.
const rows = [];
const itemForm = document.getElementById("item-form");
const sheetBody = document.getElementById("sheet-body");

itemForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const itemText = document.getElementById("item").value.trim();
  const quantity = Number(document.getElementById("quantity").value);
  const priceText = document.getElementById("price").value;
  const row = {
    quantity: quantity,
    price: priceText,
    line: quantity * priceText,
    note: priceText + quantity
  };
  // An empty item has no item property; reading it produces undefined.
  if (itemText !== "") {
    row.item = itemText;
  }
  // Multiplication keeps NaN on the row when priceText is not numeric.
  rows.push(row);
  drawSheet();
  itemForm.reset();
  document.getElementById("item").focus();
});

function drawSheet() {
  sheetBody.replaceChildren();
  for (const row of rows) {
    const tableRow = document.createElement("tr");
    for (const value of [row.item, row.quantity, row.price, row.line, row.note]) {
      const cell = document.createElement("td");
      cell.textContent = String(value);
      tableRow.appendChild(cell);
    }
    if (Number.isNaN(row.line)) {
      tableRow.children[3].classList.add("bad-line");
    }
    sheetBody.appendChild(tableRow);
  }
}
