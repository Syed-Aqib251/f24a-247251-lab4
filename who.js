// The first person has a name but no inShop property.
const people = [{ name: "Visitor" }];
const personForm = document.getElementById("person-form");
const peopleBody = document.getElementById("people-body");

personForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const name = document.getElementById("person-name").value.trim();
  if (name === "") return;
  const person = { name: name, inShop: event.submitter.value === "here" };
  people.push(person);
  drawPeople();
  personForm.reset();
  document.getElementById("person-name").focus();
});

function drawPeople() {
  peopleBody.replaceChildren();
  let count = 0;
  for (const person of people) {
    // Destructuring reads the name and the answer together from one person.
    const { name, inShop } = person;
    const tableRow = document.createElement("tr");
    for (const value of [name, inShop]) {
      const cell = document.createElement("td");
      cell.textContent = String(value);
      tableRow.appendChild(cell);
    }
    peopleBody.appendChild(tableRow);
    if (inShop === true) count += 1;
  }
  document.getElementById("in-count").textContent = String(count);
}

drawPeople();
