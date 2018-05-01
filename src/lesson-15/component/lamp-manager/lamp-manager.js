import { Lamp } from "../lamp/lamp";

export class LampManager {
  constructor(rootElement = document.querySelector('body')) {
    this.rootElement = rootElement;
    this.lamps = [];
    this.render();
  }

  render() {
    const controlsContainer = document.createElement('div');
    const btnAdd = document.createElement('button');
    const toggleAll = document.createElement('button');

    btnAdd.textContent = 'Add lamp';
    toggleAll.textContent = 'Toggle lamps';

    controlsContainer.appendChild(btnAdd);
    controlsContainer.appendChild(toggleAll);

    btnAdd.addEventListener('click', () => this.addLamp());
    toggleAll.addEventListener('click', () => this.toggleAll());

    this.lampContainer = document.createElement('div');

    this.lampContainer.classList.add('lamp-manager__container');

    this.rootElement.appendChild(controlsContainer);
    this.rootElement.appendChild(this.lampContainer);
  }

  turnOffAll() {
    this.lamps.forEach((lamp) => lamp.deactivate());
  }

  turnOnAll() {
    this.lamps.forEach((lamp) => lamp.activate());
  }

  toggleAll() {
    const toggleOnLamps =  this.lamps.filter((lamp) => lamp.isActive);
    const isActive = toggleOnLamps.length > 0;

    if (isActive) {
      this.turnOffAll();
    } else {
      this.turnOnAll();
    }
  }

  addLamp() {
    const lamp = new Lamp(this.lampContainer);
    this.lamps.push(lamp);
  }
}