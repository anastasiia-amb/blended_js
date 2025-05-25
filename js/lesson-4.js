// 1
const bodyEl = document.querySelector("body");
console.log(bodyEl);
// 2
const titleEl = document.querySelector("#title");
console.log(titleEl);
// 3
const list = document.querySelector(".list");
console.log(list);
// 4
const listItem = document.querySelectorAll("[data-topic]");
listItem.forEach((element) => {
  console.log(element);
});
// 5
const firstElement = listItem[0];
console.log(firstElement);
// 6
const lastElement = listItem[listItem.length - 1];
console.log(lastElement);
// 7
// 8
const subtitleEl = document.querySelectorAll("");
