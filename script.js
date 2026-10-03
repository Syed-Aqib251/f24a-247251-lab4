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
    item: itemText,
    quantity: quantity,
    price: priceText,
    line: quantity * priceText,
    note: priceText + quantity
  };
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
    sheetBody.appendChild(tableRow);
  }
}
