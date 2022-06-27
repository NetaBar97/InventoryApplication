var newUserModal = document.getElementById("addUserModal");

var btn = document.getElementById("addUser");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  newUserModal.style.display = "flex";
};

span.onclick = function () {
  newUserModal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == newUserModal) {
    newUserModal.style.display = "none";
  }
};
