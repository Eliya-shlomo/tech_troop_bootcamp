/*EX1__________________________________________________________*/

const person = {
    hungry: true,
  
    feed: function () {
      if (this.hungry) {
        hungry = false;
        console.log('Im no longer hungry!')
      }
    }
  }  
  
  person.feed() //should log "I'm no longer hungry"
  

/*EX2__________________________________________________________*/

const pump = function (amount) {
    this.liters += amount;
    console.log('You put ' + this.amount + ' liters in ' + this.name);
  };
  
  const garage = {
    car1: {
      name: 'Audi',
      liters: 3,
      fillTank: pump
    },
    car2: {
      name: 'Mercedes',
      liters: 1,
      fillTank: pump
    }
  };
  
  garage.car1.fillTank(2);
  console.log('Audi should have 5 liters: ',  garage.car1.liters);
  
  garage.car2.fillTank(30);
  console.log('Mercedes should have 31 liters: ', garage.car2.liters);
  
/*EX3__________________________________________________________*/

const pumpFuel = function (airplane) {
    airplane.fuel += 1
}

const airplane = {
    fuel: 0,
    fly: function () {
        if (this.fuel < 2) {
            return 'on the ground!'
        } else {
            return 'flying!'
        }
    }
}

console.log('The plane should not be able to fly (yet): ' + airplane.fly())  
pumpFuel(airplane)
console.log('The plane should STILL not be able to fly: ' + airplane.fly())  
pumpFuel(airplane)
console.log('Take off! ' + airplane.fly())  


/*EX4__________________________________________________________*/

const tipJar = {
coinCount: 20,
tip: function () {
    this.coinCount += 1;
},
stealCoins: function(){
    this.coinCount -= 3
}
};



tipJar.tip();
console.log('Tip jar should have 21 coins: ' + tipJar.coinCount);

tipJar.stealCoins(3);
console.log('Tip jar should have 18 coins: ' + tipJar.coinCount);

tipJar.stealCoins(10);
console.log('Tip jar should have 8 coins: ' + tipJar.coinCount);



/*EX5__________________________________________________________*/


const revealSecret = function () {
    return this.secret;
  };
  
  const shoutIt = function (person, func) {
    person.revealItAll = func;
    const result = person.revealItAll();
    console.log(person.name + " said: " ,result);
  };
  
  const avi = {
    name: "Avi",
    secret: "Im scared of snakes!"
  };
  
  const narkis = {
    name: "Narkis",
    secret: "I don't have secrets because I'm zen like that."
  };
  
  shoutIt(avi, revealSecret);
  shoutIt(narkis, revealSecret);




/*EX6__________________________________________________________*/


  const coffeeShop = {
    beans: 40,
  
    drinkRequirements: {
      latte: 10,
      americano: 5,
      doubleShot: 15,
      frenchPress: 12
    },
  
    makeDrink: function (drinkType) {
        if (!this.drinkRequirements[drinkType]) {
            console.log(`Sorry, we don't make ${drinkType}`)
            
        }
        else if (this.beans < this.drinkRequirements[drinkType]) {
            console.log("Sorry, we're all out of beans!")
            
        }
        else{
            this.beans -= this.drinkRequirements[drinkType]
            console.log(`Made a ${drinkType}! Beans remaining: ${this.beans}`)
        }
    },
    buyBeans: function (numBeans) {
        const cost = numBeans * 0.5
        if (this.money < cost) return console.log("Not enough money to buy beans!")

        this.money -= cost
        this.beans += numBeans
        console.log(`Bought ${numBeans} beans for $${cost}. Money remaining: $${this.money}`)
    },
    buyDrink: function (drinkType) {
        if (!this.drinkRequirements[drinkType]) return console.log(`Sorry, we don't make ${drinkType}`)

        this.money += this.drinkRequirements[drinkType].price
        console.log(`Sold a ${drinkType} for $${this.drinkRequirements[drinkType].price}! Total money: $${this.money}`)
        this.makeDrink(drinkType)
    }
}
  
  coffeeShop.makeDrink("latte"); 
  coffeeShop.makeDrink("americano");
  coffeeShop.makeDrink("filtered"); //should console "Sorry, we don't make filtered"
  coffeeShop.makeDrink("doubleShot");
  coffeeShop.makeDrink("frenchPress"); //should console "Sorry, we're all out of beans"