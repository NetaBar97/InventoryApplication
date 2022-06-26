// Get the modal
var newProductModal = document.getElementById("addProductModal");
var filterModal = document.getElementById("filterModal");

// Get the button that opens the modal
var btn = document.getElementById("addBtn");
var filterBtn = document.getElementById("filterBtn");

var filterNowBtn = document.getElementById("filter-now");
var missingBtn = document.getElementById("missing-filter");

filterNowBtn.addEventListener("click", () => {
  const category = document.getElementById("category-filter").value;
  /*
  if (document.getElementById("missing-filter").checked == true) {
    alert("hkdfhjdkfhdkjhfjk");
  } else {
    return;
  }*/

  document.querySelectorAll("tbody tr").forEach((element) => {
    element.style.display = "table-row";
  });
  if (category == "all") {
    showAll();
    return;
  }

  if (category == "Missing") {
    missingFilter();
    return;
  }

  // if (category == "Missing") {
  //   document.querySelectorAll("tbody tr").forEach((element) => {
  //     const prodMinQuantity = element.querySelector("#prodMinQuantity").innerText,
  //           prodQuantity = element.querySelector("#prodQuantity").innerText;
  //     alert(prodMinQuantity);
  //     alert(prodQuantity);
  //     if (prodMinQuantity > prodQuantity) {
  //       alert("fgfgfg");
  //       element.style.display = "none";
  //     }
  //
  /*
  if (category == "Missing") {
    document.querySelectorAll("tbody tr").forEach((element) => {
      const prodMinQuantity =
          ~~element.querySelector("#prodMinQuantity").innerText,
        prodQuantity = ~~element.querySelector("#prodQuantity").innerText;
      if (prodMinQuantity > prodQuantity) {
        alert("fgfgfg");
        element.style.display = "none";
      }
    });
  }*/

  document.querySelectorAll("tbody tr").forEach((element) => {
    if (element.getAttribute("category") != category) {
      element.style.display = "none";
    }
  });
});

/******ADDITION********/
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
/************ADDITION***************/

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  newProductModal.style.display = "block";
};
filterBtn.onclick = function () {
  console.log("filter btn");
  filterModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  newProductModal.style.display = "none";
  filterModal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == newProductModal) {
    newProductModal.style.display = "none";
  }
  if (event.target == filterModal) {
    filterModal.style.display = "none";
  }
};

/*
var datamap = new Map([
  [document.getElementById("addBtn"), document.getElementById("myModal")],
  [document.getElementById("filterBtn"), document.getElementById("myModal2")]
]);
datamap.forEach((value, key) => {
  doModal(key, value);
});
function doModal(anchor, popupbox) {
  // Get the <span> element that closes the modal
  var span = popupbox.getElementsByClassName("close")[0];
  anchor.addEventListener("click", function (event) {
      popupbox.style.display = "block";
  });
  span.addEventListener("click", function (event) {
      popupbox.style.display = "none";
  });
  window.addEventListener("click", function (event) {
      if (event.target == popupbox) {
          popupbox.style.display = "none";
      }
  });
}
*/
