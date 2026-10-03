const people = [];
const personForm = document.getElementById("person-form");
const peopleBody = document.getElementById("people-body");

personForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("person-name").value.trim();
  if (name === "") return;
  const person = { name: name, inShop: event.submitter.value === "here" };
  people.push(person);
  const tableRow = document.createElement("tr");
  for (const value of [person.name, person.inShop]) {
    const cell = document.createElement("td");
    cell.textContent = String(value);
    tableRow.appendChild(cell);
  }
  peopleBody.appendChild(tableRow);
  personForm.reset();
  document.getElementById("person-name").focus();
});
