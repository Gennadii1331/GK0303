/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(5);

var myButton = document.querySelector('#myBtn');
var myOutput = document.querySelector('#output');
var nameField = document.querySelector('#nameField');
var passwordField = document.querySelector('#passwordField');
var btnAdd = document.querySelector('#btnAdd');
var newLements = document.querySelector('#newLements');

myButton.onclick = login;
btnAdd.onclick = addElement;

function login() {
    var name = nameField.value;
    var password = passwordField.value;
    nameField.value = '';
    passwordField.value = '';

    if (name && password) {
        if (name === 'admin' && password === '111') {
            myOutput.innerHTML = '<h2>Welcome admin!</h2>';
        } else {
            myOutput.innerHTML = '<h2>Credentials are wrong!</h2>';
        }
    } else {
        myOutput.innerHTML = '<h3 style="color:red"> Not valid input!</h3>';
    }
    // if (name && name !== ' ') {
    //     myOutput.innerHTML = `<h2>Hello ${name}</h2>`;
    // } else {
    //     myButton.classList.add('not-valid');
    //     myOutput.innerHTML = `<h3 style="color:red"> Not valid input!</h3>`;
    // }
}

function addElement() {
    var newElement = document.createElement('div');
    console.log(newElement);
    newElement.innerHTML = 'Hello world';
    newLements.appendChild(newElement);
}

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);