const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];

const products = {
  1: { name: "オリジナルブレンド200g", price: 500 },
  2: { name: "オリジナルブレンド500g", price: 900 },
  3: { name: "スペシャルブレンド200g", price: 700 },
  4: { name: "スペシャルブレンド500g", price: 1200 }
}

function add() {
  const id = parseInt(priceElement.value)
  if (id == 0) return window.alert("商品を選択してください")

  const name = products[id].name;
  const price = products[id].price;
  const number = parseInt(numberElement.value) || 0;

  const purchase = {
    name: name,
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
    return `${purchase.name} ${purchase.price}円: ${purchase.number}点`
  }).join("\n");
}

function calcPostageFromPurchase(sum) {
  if (sum == 0 || sum >= 3000) {
    return 0;
  } else if (sum < 2000){
    return 500;
  } else {
    return 250;
  }
}
