function get(url) {
  return Promise(function (resolve, reject) {
    var xhttp = XMLHttpRequest();
    xhttp.open("GET", url, true);
    xhttp.onload = function () {
      if (xhttp.status == 200) {
        resolve(JSON.parse(xhttp.response));
      } else {
        reject(xhttp.statusText);
      }
    };
    xhttp.onerror = function () {
      reject(xhttp.statusText);
    };
    xhttp.send();
  });
}

var promise = get("data/tweets.json");
promise
  .then(function (tweet) {
    console.log(tweet);
    return get("data/friend.json");
  })
  .catch(function (error) {
    console.log(error);
  });
