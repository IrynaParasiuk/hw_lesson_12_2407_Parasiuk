// import { calculator } from './calculator/calculator';
import { trafficLighter } from './components/trafficLighter/trafficLighter';
import './styles.styl';

class Animal {
  constructor(name) {
    this.name = name
  }

  move() {
    console.log('I have moved');
  }

  eating(){
    console.log(' '); 
  }
  
}

class Horses extends Animal {
  constructor(name, speed) {
    super(name);
    this.speed = speed;
  }  
  move() {
    console.log('Fast');       
  }
  
}

class Pony extends Horses {
  constructor(name, speed) {
    super(name, speed);
  }
  
  move() {
    console.log('Slow');
  }
}

class Cats extends Animal {
  constructor(name, kind) {
    super(name);
    this.kind= kind;
  }
 
  move() {
    console.log('Slow');       
  }
  eating(){
    console.log('mouse milk'); 
  }
}

class Tiger extends Cats {
  constructor(name, kind,location,population) {
    super(name, kind);
    this.Location=location;
    this.Population=population;
  }

  move() {
    console.log('Fast');
  }
  eating(){
    console.log('animal'); 
  }
}
class Birds extends Animal {
  constructor(name, kind) {
    super(name);
    this.kind= kind;
  } 
  fly(){
    console.log('I can fly');   
  }
  move() {
     this.fly();
  }
  eating(){
    console.log('corn'); 
  }
  
}

class Eagle extends Birds {
  constructor(name, kind,location,population) {
    super(name);
    this.Kind=kind;
    this.Location=location;
    this.Population=population;
  }
  
  move() {
    super.move();
  }
  eating(){
    console.log('mouse, little birds'); 
  }
}


const someCats= new Cats('Jack','Parrot');
someCats.move();
someCats.eating();
const someTiger= new Tiger('Fine','Indo-Chinese','Malaysia',800);
someTiger.move();
someTiger.eating();
const someBirds= new Birds('Jack','Parrot');
someBirds.move();
someBirds.eating();
const someEagle= new Eagle('Fine','Eagle','Ukrain',1000);
someEagle.move();
someEagle.eating();