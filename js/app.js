const totalPrice = document.getElementById("total-price");
const discount = document.getElementById("discount");
const total = document.getElementById("total");
function stringtoNumber(num) {
  const elementNumber = parseFloat(num);
  return elementNumber.toFixed(2);
}
let myTotalPrice = 0;

function handleClick(target) {
  const itemName = target.childNodes[3].childNodes[5].innerText;
  const myListOl = document.getElementById("my-item");

  const newItem = document.createElement("li");
  newItem.textContent = itemName;

  myListOl.appendChild(newItem);
  const itemPriceString =
    target.childNodes[3].childNodes[7].childNodes[0].textContent;
  const itemPriceWithFloat = itemPriceString;
  const itemPriceNumber = parseFloat(itemPriceWithFloat);
  myTotalPrice += itemPriceNumber;
  totalPrice.textContent = myTotalPrice.toFixed(2);
}
