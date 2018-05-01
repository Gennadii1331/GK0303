class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayBay() {
    console.log('Bay!');
  }

  greet() {
    console.log(this.name);
  }
}

class Developer extends Person {
  constructor(name, age, lang) {
    super(name, age);
    this.lang = lang;
  }

  toCode() {
    console.log('Write on ' + this.lang);
  }
}


const jack = new Person('Jack', 26);
const john = new Person('John', 40);
const johnJSDev = new Developer('John', 40, 'JS');
const johnJavaDev = new Developer('John', 40, 'Java');

class Car {
  constructor() {
    this.fuel = 100;
  }

  drive() {
    console.log('Car moved');
  }
}

class SportCar extends Car {
  constructor() {
    super();
  }
  drive() {
    console.log('Car moved verya fast');
  }
}

class Driver {
  constructor(car) {
    this.car = car;
  }

  move() {
    this.car.drive();
  }
}

const sportCarDriver = new Driver(new Car());
const carDriver = new Driver(new SportCar());
debugger;

class DropDown {
  constructor(dropdownContainer) {
    this.dropdownContainer = dropdownContainer;
    this.title = this.dropdownContainer.querySelector('.dropdown__title');
    this.options = this.dropdownContainer.querySelectorAll('.dropdown__option');
    this.isOpened = this.dropdownContainer.classList.contains('active');

    this.title.addEventListener('click', (eventObject) => {
      console.log(eventObject);
      eventObject.stopPropagation();
      this.toggleDropdown()
    });

    this.title.addEventListener('keypress', (eventObject) => {
      console.log(eventObject);
      console.log('Keypressed');
      if (eventObject.keyCode === 13) {
        this.toggleDropdown();
      }
    });

    this.options.forEach((option) => {
      option.addEventListener('click', () => {
        this.changeTitle(option.textContent);
      });
      option.addEventListener('keypress', (eventObject) => {
        if (eventObject.keyCode === 13) {
          this.changeTitle(option.textContent);
        }
      });
    });
  }

  open() {
    this.dropdownContainer.classList.add('active');
    this.isOpened = true;
    document.addEventListener('click', close);
  }

  close() {
    console.log('Drop down closed');
    this.dropdownContainer.classList.remove('active');
    this.isOpened = false;
    document.removeEventListener('click', close);
  }

  toggleDropdown() {
    if(this.isOpened) {
      this.close();
    } else {
      this.open();
    }
  }

  changeTitle(text) {
    this.title.textContent = text;
    this.close();
  }
}

const menuFirst = new DropDown(document.querySelector('#countries'));
