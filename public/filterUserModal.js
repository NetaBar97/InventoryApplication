var filterUserModal = document.getElementById("filterModal");

var filterUserBtn = document.getElementById("filterBtn");

var span = document.getElementsByClassName("close")[0];

filterUserBtn.onclick = function () {
  filterUserModal.style.display = "flex";
};

span.onclick = function () {
  filterUserModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == filterUserModal) {
    filterUserModal.style.display = "none";
  }
};

var filterNowBtn = document.getElementById("filter-now");

filterNowBtn.addEventListener("click", () => {
  filterModal.style.display = "none";

  const category = document.getElementById("category-filter").value;
  document.querySelectorAll("tbody tr").forEach((element) => {
    element.style.display = "table-row";
  });
  if (category == "all") {
    showAll();
    return;
  }

  if (category == "missing") {
    missingFilter();
    return;
  }

  document.querySelectorAll("tbody tr").forEach((element) => {
    if (element.getAttribute("category") != category) {
      element.style.display = "none";
    }
  });
});

function missingFilter() {
  showAll();

  document.querySelectorAll("tbody tr").forEach((element) => {
    const rowQuantity = element.getAttribute("quantity");
    const rowMinQuantity = element.getAttribute("min-quantity");
    if (Number(rowQuantity) >= Number(rowMinQuantity)) {
      element.style.display = "none";
    }
  });
}

function showAll() {
  document.querySelectorAll("tbody tr").forEach((element) => {
    element.style.display = "table-row";
  });
}
