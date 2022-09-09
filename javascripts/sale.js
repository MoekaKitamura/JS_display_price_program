const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];

function add() {
  const price = parseInt(priceElement.value) || 0;
  const number = parseInt(numberElement.value) || 0;

  const purchase = {
    price: price,
    number: number,
  };

  exist_price_list = purchases.map(purchase => {
    return purchase.price
  });

  if (exist_price_list.includes(price)) {
    purchases.forEach(purchase => {
      if (purchase.price == price) {
        purchase.number += number
      }
    })
  } else {
    purchases.push(purchase);
  }

  // テキスト解答例
  // const newPurchase = purchases.findIndex((item) => item.price === purchase.price) 
  // if(purchases.length < 1 || newPurchase === -1) {
  //   purchases.push(purchase);
  // } else {
  //   purchases[newPurchase].number += purchase.number;
  // }

  window.alert(`${display()}\n\n小計${subtotal()}円`);
  priceElement.value= "";
  numberElement.value = "";
}

function calc() {
  const sum = subtotal();
  const postage = calcPostageFromPurchase(sum);
  window.alert(`送料は${postage}円、商品は${sum}円、合計は${sum + postage}円です`);
  purchases = [];
  priceElement.value= "";
  numberElement.value = "";
}

function subtotal() {
  // let sum = 0;
  // for(let index = 0; index < purchases.length; index++) {
  //   sum += purchases[index].price * purchases[index].number;
  // }
  // return sum;
  return purchases.reduce((prev, purchase) => {
    return prev + purchase.price * purchase.number 
  }, 0);
}

function display() {
  // let string = "";
  // for(let i=0; i<purchases.length; i++){
  //   string += `${purchases[i].price}円が${purchases[i].number}点\n`;
  // }
  // return string;
  return purchases.map(purchase => {
    return `${purchase.price}円が${purchase.number}点`
  }).join("\n");
}

function calcPostageFromPurchase(sum) {
  if (sum == 0 || sum >= 3000) {
    return 0;
  } else if (sum < 1000){
    return 500;
  } else {
    return 250;
  }
}
