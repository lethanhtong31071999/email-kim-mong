$(document).ready(function () {
  loadCompanyTable();
});

function loadCompanyTable() {
  $("#user-table").DataTable({
    order: [
      [0, "asc"],
      [1, "asc"],
      [2, "asc"],
      [3, "asc"],
    ],
    columnDefs: [
      {
        targets: [4],
        searchable: false,
        sortable: false,
      },
    ],
  });
}
