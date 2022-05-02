var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["assignments"] = document.getElementById("assignments").value;
    formData["date_entry"] = document.getElementById("date_entry").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("assignmentsList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.assignments;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.date_entry;
    cell3 = newRow.insertCell(2);


    cell3.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("assignments").value = "";
    document.getElementById("date_entry").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("assignments").value = selectedRow.cells[0].innerHTML;
    document.getElementById("date_entry").value = selectedRow.cells[1].innerHTML;

}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.assignments;
    selectedRow.cells[1].innerHTML = formData.date_entry;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("assignmentsList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("assignments").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}