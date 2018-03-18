// INDIVIDUAL EXERCISE
// var coffeeShop = {
//   beans: 40,

//   drinkRequirements: {
//     latte: 10,
//     americano: 5,
//     doubleShot: 15,
//     frenchPress: 12
//   },
// makeDrink: function (drinkType) {
//   if (this.drinkRequirements.hasOwnProperty(drinkType)) {
//     if (this.beans >= this.drinkRequirements[drinkType]) {
//       this.beans -= this.drinkRequirements[drinkType];
//       alert('Your drink is ready!');
//     } else {
//       alert('Sorry, we\'re all out of beans!');
//     }
//   } else {
//     alert('Sorry, we don\'t make ' + drinkType);
//   }
// }
// coffeeShop.makeDrink('latte');
// coffeeShop.makeDrink('americano');
// coffeeShop.makeDrink('filtered');
// coffeeShop.makeDrink('doubleShot');
// coffeeShop.makeDrink('frenchPress');


//INDIVIDUAL EXERCISE (EXTENSION 1)
// var coffeeShop = {
//   beans: 40,

//   drinkRequirements: {
//     latte: 10,
//     americano: 5,
//     doubleShot: 15,
//     frenchPress: 12
//   },
//   makeDrink: function(drinkType) {
//     if (!this.drinkRequirements.hasOwnProperty(drinkType)) {
//       alert('Sorry, we don\'t make ' + drinkType);
//       return;
//     }

//     if (this.beans >= this.drinkRequirements[drinkType]) {
//       this.beans -= this.drinkRequirements[drinkType];
//       alert('Your drink is ready!');
//     } else {
//       alert('Sorry, we\'re all out of beans!');
//     }
//   }
// };
// coffeeShop.makeDrink('latte');
// coffeeShop.makeDrink('americano');
// coffeeShop.makeDrink('filtered');
// coffeeShop.makeDrink('doubleShot');
// coffeeShop.makeDrink('frenchPress');


//INDIVIDUAL EXERCISE (EXTENSION 2 + 3)
var coffeeShop = {
  beans: 40,

  drinkRequirements: {
    latte: { price: 6, beanRequirement: 10 },
    americano: { price: 4, beanRequirement: 5 },
    doubleShot: { price: 9, beanRequirement: 15 },
    frenchPress: { price: 7, beanRequirement: 12 }
  },
  makeDrink: function(drinkType) {
    if (this.beans >= this.drinkRequirements[drinkType].beanRequirement) {
      this.beans -= this.drinkRequirements[drinkType].beanRequirement;
      alert('Your drink is ready!');
      return true;
    } else {
      var amountToBuy =
        this.drinkRequirements[drinkType].beanRequirement - this.beans;
      if (this.buySupplies(amountToBuy)) {
        this.beans -= this.drinkRequirements[drinkType].beanRequirement;
        alert('Your drink is ready!');
        return true;
      } else {
        alert('Sorry, we\'re all out of beans!');
        return false;
      }
    }
  },
  money: 100,
  buySupplies: function(beansAmount) {
    var price = beansAmount * 2;
    if (this.money >= price) {
      this.money -= price;
      this.beans += beansAmount;
      return true;
    } else {
      return false;
    }
  },
  buyDrink: function(drinkType) {
    if (!this.drinkRequirements.hasOwnProperty(drinkType)) {
      alert('Sorry, we don\'t make ' + drinkType);
      return;
    }
    this.money += this.drinkRequirements[drinkType].price;
    if (!this.makeDrink(drinkType)) {
      this.money -= this.drinkRequirements[drinkType].price;
    }
  }
};

coffeeShop.buyDrink('latte');
coffeeShop.buyDrink('americano');
coffeeShop.buyDrink('filtered');
coffeeShop.buyDrink('doubleShot');
coffeeShop.buyDrink('frenchPress');
