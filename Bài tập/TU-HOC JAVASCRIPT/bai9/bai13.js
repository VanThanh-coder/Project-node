// open(method, url, async, user, psw)	Specifies the request

// method: the request type GET or POST
// url: the file location
// async: true (asynchronous) or false (synchronous)
// user: optional user name
// psw: optional password
// status	Returns the status-number of a request
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"
// For a complete list go to the Http Messages Reference
const clk = document.getElementById("cl");
clk.addEventListener("click", load);
function load() {
  const xhttp = new XMLHttpRequest();
  // console.log(xhttp);
  xhttp.open("GET", "bai10.html", true);
  console.log("READYSTYTE: ", xhttp.readyState); // kiem tra ban dau //1
  // ham 1 kt 1 dieu kien
  xhttp.onload = function () {
    console.log("READYSTYTE:", xhttp.readyState); // 1
    if (this.status == 200) {
      document.getElementById("intt").innerHTML = this.responseText;
    } else if (this.status == 404) {
      console.log("404 not Found");
    } else {
      console.log("403 forbidden");
    }
  };

  // ham 2 kiem tra hai dieu kien
  // xhttp.onreadystatechange = function () {
  //   console.log("READYSTYTE: ", xhttp.readyState);
  //   if (this.readyState == 4 && this.status == 200) {
  //     console.log(this.responseText);
  //   }
  // };

  xhttp.send();
}

// JSON
const sv = document.getElementById("sv");
sv.onclick = function () {
  // khoi tao
  const xhttp = new XMLHttpRequest();
  // open file json
  xhttp.open("GET", "bai13.json", true);
  // onload
  xhttp.onload = function () {
    if (this.status == 200) {
      const TT = JSON.parse(this.responseText);
      //  console.log(TT);
      let ouput = " ";
      ouput = `
       <ul>
       <li>ID:${TT.id}</li>
       <li>Name:${TT.fullName}</li>
       <li>Email:${TT.email}</li>
       </ul>
       `;
      document.getElementById("hienthi").innerHTML = ouput;
    } else if (this.status == 404) {
      console.log("404 not Found..");
    } else {
      console.log("403 Forbidden..");
    }
  };

  xhttp.send();
};
