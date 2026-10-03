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
  drawSummary(row);
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


function drawSummary(latestRow) {
  let total = 0;
  for (const row of rows) {
    if (typeof row.line === "number" && !Number.isNaN(row.line)) {
      total += row.line;
    }
  }
  const priceText = latestRow.price;
  const priceNumber = Number(priceText);
  document.getElementById("total").textContent = String(total);
  document.getElementById("total-kind").textContent = typeof total;
  document.getElementById("note-kind").textContent = typeof latestRow.note;
  // These comparisons intentionally demonstrate loose and strict equality.
  document.getElementById("price-match").textContent = String(priceText == priceNumber);
  document.getElementById("price-same-kind").textContent = String(priceText === priceNumber);
  document.getElementById("nan-kind-line").hidden = !Number.isNaN(latestRow.line);
  document.getElementById("nan-kind").textContent = typeof latestRow.line;
}
