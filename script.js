const form = document.getElementById('registrationForm');
const tableBody = document.getElementById('userTable').querySelector('tbody');

form.addEventListener('submit', function (event) {
  event.preventDefault();

  // Get values from inputs
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const dob = document.getElementById('dob').value;
  const accepted = document.getElementById('acceptTerms').checked ? "Yes" : "No";

  // Insert a new row
  const newRow = tableBody.insertRow();
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${email}</td>
    <td>${password}</td>
    <td>${dob}</td>
    <td>${accepted}</td>
  `;

  // Clear form fields
  form.reset();
});