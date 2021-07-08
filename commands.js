const fs = require("fs");

const readFile = (fileName) => {
  try {
    return (groceryList = JSON.parse(fs.readFileSync("groceryList.json")));
  } catch (e) {
    return [];
  }
};

const add = (item, price) => {
  let groceryList = readFile("groceryList.json");

  //   try {
  //     groceryList = JSON.parse(fs.readFileSync("groceryList.json"));
  //   } catch (e) {
  //     // console.log(e);
  //   }

  let index = groceryList.findIndex((x) => x.item === item);
  console.log(index);

  if (index === -1) {
    groceryList.push({ item, price });
    console.log(groceryList);
  } else {
    groceryList[index].price += price;
  }

  fs.writeFileSync("groceryList.json", JSON.stringify(groceryList));
};

const remove = (item) => {
  let groceryList = readFile("groceryList.json");

  //   let groceryList = [];

  //   try {
  //     groceryList = JSON.parse(fs.readFileSync("groceryList.json"));
  //   } catch (e) {
  //     // console.log(e);
  //   }

  const filteredList = groceryList.filter((x) => x.item !== item);
  fs.writeFileSync("groceryList.json", JSON.stringify(filteredList));
};

const print = () => {
  let groceryList = read("groceryList.json");
  console.log(groceryList);

  //   let groceryList = [];
  //   try {
  //     groceryList = JSON.parse(fs.readFileSync("groceryList.json"));
  //   } catch (e) {
  //     // console.log(e);
  //   }

  //   console.log(groceryList);
};

const priceOf = (item) => {
  let groceryList = [];
  try {
    groceryList = JSON.parse(fs.readFileSync("groceryList.json"));
  } catch (e) {
    // console.log(e);
  }

  let index = groceryList.findIndex((x) => x.item === item);

  if (index !== -1) {
    console.log(`price of ${item} is ${groceryList[index].price}`);
  }
};

module.exports = {
  add,
  remove,
  print,
  priceOf,
};
