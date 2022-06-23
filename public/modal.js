// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("addBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


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