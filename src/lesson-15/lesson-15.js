import { Lamp } from "./component/lamp/lamp";
import { LampManager } from "./component/lamp-manager/lamp-manager";
import { TaskList } from "./component/taskList/task-list";

window.lamp = new Lamp(document.querySelector('#lamp'));
new LampManager(document.querySelector('#manager'));

new TaskList(document.querySelector('#taskList'));

