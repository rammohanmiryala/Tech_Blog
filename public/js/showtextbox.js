
function showtextbox() {
  var x = document.querySelector("#hidediv");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function posttextbox(blogpost) {
  var x = document.querySelector(`#text${blogpost}`);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
function hometextbox(blogpost) {
  var x = document.querySelector(`#hometext${blogpost}`);
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

