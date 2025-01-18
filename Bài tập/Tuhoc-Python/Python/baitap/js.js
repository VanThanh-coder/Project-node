const tb = document.querySelector("table");
const td = document.querySelectorAll("td");
const img = document.querySelectorAll("img");
const p1 = document.querySelectorAll("p");
tb.style.width = "auto";
tb.style.height = "auto";
tb.style.margin = "20px auto";
for (let i = 0; i < img.length; i++) {
  img[i].style.width = "360px";
  img[i].style.height = "240px";
}
for (let i = 0; i < p1.length; i++) {
  p1[i].style.width = "350px";
}
for (let i = 0; i < td.length; i++) {
  td[i].style.padding = "10px";
  const btn = document.createElement("button");
  btn.textContent = "doc them";
  td[i].appendChild(btn);
  btn.style.padding = "10px 20px";
  btn.style.background = "red";
  btn.style.color = "white";
  btn.style.borderRadius = "5px";
  btn.style.display = "block";
}
