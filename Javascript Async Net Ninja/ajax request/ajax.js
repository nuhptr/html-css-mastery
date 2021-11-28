var http = XMLHttpRequest();

http.onreadystatechange = function () {
  if (http.readyState == 4 && http.status == 200) {
    console.log(JSON.parse(http.response));
  }
};

http.open("GET", "data/tweets.json", true);
http.send;
console.log("test");

/**
 * Ready State
 * 0 -> not initialized
 * 1 -> request has been set up
 * 2 -> request has been sent
 * 3 -> request is in proccess
 * 4 -> request is complete
 */
