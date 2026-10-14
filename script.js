const $ = (id) => document.getElementById(id);
const tbody = $("courses");

const gradeOptions = Object.keys(GRADES)
  .map((g) => `<option value="${g}">${g}</option>`)
  .join("");

function addRow() {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td><input class="name" type="text" placeholder="Course name" aria-label="Course name" /></td>
    <td><input class="credits" type="number" min="0" step="0.5" placeholder="3" aria-label="Credits" /></td>
    <td><select class="grade" aria-label="Grade">${gradeOptions}</select></td>
    <td><button class="remove" type="button" aria-label="Remove course">✕</button></td>`;
  tr.querySelector(".remove").addEventListener("click", () => {
    tr.remove();
    update();
  });
  tbody.appendChild(tr);
}

function update() {
  const courses = [...tbody.querySelectorAll("tr")].map((tr) => ({
    credits: parseFloat(tr.querySelector(".credits").value),
    points: GRADES[tr.querySelector(".grade").value],
  }));

  const { gpa, credits } = calculateGPA(courses);
  const cgpa = calculateCumulative(
    gpa,
    credits,
    parseFloat($("prevGpa").value),
    parseFloat($("prevCredits").value)
  );

  $("gpa").textContent = gpa === null ? "–" : gpa.toFixed(2);
  $("credits").textContent = credits;
  $("cgpa").textContent = cgpa === null ? "–" : cgpa.toFixed(2);
}

$("add").addEventListener("click", () => {
  addRow();
  update();
});

document.addEventListener("input", update);

// Start with six rows, a typical semester load.
for (let i = 0; i < 6; i++) addRow();
update();
