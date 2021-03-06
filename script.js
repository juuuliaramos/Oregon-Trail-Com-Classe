class Traveler {
  constructor(name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
  }

  hunt() {
    this.food + 2;
  }

  eat() {
    if (this.food > 0) {
      this.food - 1;
    }
    if (this.food < 1) {
      this.isHealthy = false;
    }
  }
}

class Wagon {
  constructor(capacity) {
    this.capacity = capacity;
    this.passengers = [];
  }

  getAvailableSeatCount() {
    let assentosVagos = this.capacity - this.passengers.length;
    return assentosVagos;
  }
  join(Traveler) {
    if (this.capacity > this.passengers.length) {
      this.passengers.push(Traveler);
    }
  }
  shouldQuarantine() {
    for (let i = 0; i < this.passengers.length; i++) {
      if (this.passengers[i].isHealthy === false) {
        return false;
      } else {
        return true;
      }
    }
  }
  totalFood() {
    let travelersFoods = 1;

    for (let i = 0; i < this.passengers.length; i++) {
      travelersFoods += this.passengers[i].food;
    }
    return travelersFoods;
  }
}

//-------------------OREGON TRAIL--------------------------
/*
function Traveler(name) {
  this.name = name;
  this.food = 1;
  this.isHealthy = true;
}

Traveler.prototype = {
  constructor: Traveler,
  hunt: function () {
    this.food + 2;
  },
  eat: function () {
    if (this.food > 0) {
      this.food - 1;
    }
    if (this.food < 1) {
      this.isHealthy = false;
    }
  },
};

function Wagon(capacity) {
  this.capacity = capacity;
  this.passengers = [];
}

Wagon.prototype = {
  constructor: Wagon,
  getAvailableSeatCount: function () {
    let assentosVagos = this.capacity - this.passengers.length;
    return assentosVagos;
  },
  join: function (Traveler) {
    if (this.capacity > this.passengers.length) {
      this.passengers.push(Traveler);
    }
  },
  shouldQuarantine: function () {
    for (let i = 0; i < this.passengers.length; i++) {
      if (this.passengers[i].isHealthy === false) {
        return false;
      } else {
        return true;
      }
    }
  },
  totalFood: function () {
    let travelersFoods = 1;

    for (let i = 0; i < this.passengers.length; i++) {
      travelersFoods += this.passengers[i].food;
    }
    return travelersFoods;
  },
};
*/

//TESTE
// Criar uma carro??a que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar tr??s viajantes
let henrietta = new Traveler("Henrietta");
let juan = new Traveler("Juan");
let maude = new Traveler("Maude");

console.log(`${wagon.getAvailableSeatCount()} should be 2`);

wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);

wagon.join(juan);
wagon.join(maude); // N??o tem espa??o para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);

henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora est?? com fome (doente)

console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);
