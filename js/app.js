const totalPrice = document.getElementById("total-price");
const discount = document.getElementById("discount");
const total = document.getElementById("total");
const purchaseBtn = document.getElementById("Purchase-btn");
const coponBtn = document.getElementById("copon-btn");
const promo = document.getElementById("promo");
const myDiscount = 20;
let myDiscountPrice = 0;
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
  total.textContent = myTotalPrice.toFixed(2);
  if (myTotalPrice > 0) {
    purchaseBtn.classList.remove("btn-disabled");
  }
  if (myTotalPrice >= 200) {
    coponBtn.classList.remove("btn-disabled");
  }
}
coponBtn.addEventListener("click", function () {
  const totalPriceForCoponString = totalPrice.textContent;
  const totalPriceForCoponNumber = parseFloat(totalPriceForCoponString);
  const promoCode = promo.value;
  const myCopon = "SELL200";
  if (promoCode === myCopon) {
    myDiscountPrice = (myDiscount / 100) * totalPriceForCoponNumber;
    discount.textContent = myDiscountPrice.toFixed(2);
    total.textContent = (totalPriceForCoponString - myDiscountPrice).toFixed(2);
  }
});
