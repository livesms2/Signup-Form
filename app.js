 // Signup Form Submission
 document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;

    // Add data to table
    var tableBody = document.getElementById('tableBody');
    var newRow = tableBody.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    cell1.innerHTML = name;
    cell2.innerHTML = email;
    cell3.innerHTML = '<button onclick="deleteRow(this)">Delete</button> <button onclick="editRow(this)">Edit</button>';
  });


  // Delete Row from Table
  function deleteRow(btn) {
    var row = btn.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }

  // Edit Row in Table
  function editRow(btn) {
    var row = btn.parentNode.parentNode;
    var name = row.cells[0].innerHTML;
    var email = row.cells[1].innerHTML;

    // You can modify this to populate a form for editing
    alert('Edit' + name + "'s details. Email: " + email);
  }