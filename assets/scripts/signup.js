// Get the modal
var modal = document.getElementById("id01");

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function signup() {
  let form = document.getElementById("signUpForm");
  let inputs = form.getElementsByTagName("input");
  const user = {
    username: inputs[0].value,
    surname: inputs[1].value,
    email: inputs[2].value,
    contact: inputs[3].value,
  };

  fetch("http://127.0.0.1:5000/add-user/", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => {
      alert(json.msg);
      window.location.href = "./index.html";
    })
    .catch((e) => alert(e));
}
