document.getElementById("simpan").onclick = function () {
  document.getElementById("target-nama").innerHTML = document.getElementById(
    "input-nama"
  ).value;
  document.getElementById("target-nilai").innerHTML = document.getElementById(
    "input-nilai"
  ).value;
  document.getElementById("target-kelas").innerHTML = document.getElementById(
    "input-kelas"
  ).value;
};
