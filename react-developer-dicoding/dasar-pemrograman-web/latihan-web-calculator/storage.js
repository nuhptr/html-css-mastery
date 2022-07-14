const CACHE_KEY = "calculation_history";

function checkForStorage() {
  return typeof Storage !== "undefined";
}

function putHistory(data) {
  if (checkForStorage()) {
    let historyData = null;
    if (localStorage.getItem(CACHE_KEY) === null) {
      historyData = [];
    } else {
      // JSON.parse() => mengubah bentuk string ke bentuk json kembali
      historyData = JSON.parse(localStorage.getItem(CACHE_KEY));
    }

    // unshift() => menambahkan nilai baru pada array di awal index
    historyData.unshift(data);

    if (historyData.length > 5) {
      // untuk menghapus nilai index terakhir pada array
      historyData.pop();
    }

    // JSON.stringify => mengubah bentuk json ke bentuk string
    // array yang berisi beberapa object kalkulasi, kemudian array tersebut diubah menjadi string
    localStorage.setItem(CACHE_KEY, JSON.stringify(historyData));
  }
}

function showHistory() {
  if (checkForStorage) {
    return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
  } else {
    return [];
  }
}

function renderHistory() {
  const historyData = showHistory();
  let historyList = document.querySelector("#historyList");

  // Selalu hapus konten HTML pada elemen historyList agar tidak menampilkan data ganda
  historyList.innerHTML = "";

  for (let history of historyData) {
    let row = document.createElement("tr");
    row.innerHTML = "<td>" + history.firstNumber + "</td>";
    row.innerHTML += "<td>" + history.operator + "</td>";
    row.innerHTML += "<td>" + history.secondNumber + "</td>";
    row.innerHTML += "<td>" + history.result + "</td>";

    historyList.appendChild(row);
  }
}

renderHistory();
