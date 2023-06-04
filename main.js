/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domControl.js":
/*!***************************!*\
  !*** ./src/domControl.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const {\n  createShips,\n  gameBoard\n} = __webpack_require__(/*! ./ships */ \"./src/ships.js\");\nconst domControl = (() => {\n  const fieldPlayer = gameBoard.players.Player1;\n  const fieldEnemy = gameBoard.players.Player2;\n  gameBoard.createFields(fieldPlayer);\n  gameBoard.createFields(fieldEnemy);\n  const appendFieldsToPlayer = () => {\n    // Clear the content element\n    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];\n    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];\n    const content = document.querySelector('.content');\n    const playersBox = document.querySelector('.playersBox');\n    content.innerHTML = '';\n\n    // Iterate over the alphabet keys (a-j)\n    for (let index = 0; index < 10; index++) {\n      const arrayName = String.fromCharCode(97 + index);\n      const array = fieldPlayer.arrays[arrayName];\n\n      // Create a row element for each array\n      const rowElement = document.createElement('div');\n      rowElement.className = 'row';\n\n      // Iterate over the elements in the array\n      for (let i = 0; i < array.length; i++) {\n        const cellElement = document.createElement('div');\n        cellElement.className = 'cell';\n        if (array[i]) {\n          cellElement.style.backgroundColor = \"lightblue\";\n          cellElement.textContent = \"\"; // Delete text content\n        }\n\n        // Append the cell element to the row element\n        rowElement.appendChild(cellElement);\n      }\n\n      // Append the row element to the content element\n      content.appendChild(rowElement);\n    }\n    const alphabetRow = document.createElement('div');\n    alphabetRow.className = 'alphabet';\n    alphabet.forEach(letter => {\n      const letterDiv = document.createElement('div');\n      letterDiv.className = 'alphabet-cell';\n      letterDiv.textContent = letter;\n      alphabetRow.appendChild(letterDiv);\n    });\n    const numbersRow = document.createElement('div');\n    numbersRow.className = 'numbers';\n    numbers.forEach(number => {\n      const numberDiv = document.createElement('div');\n      numberDiv.className = 'number-cell';\n      numberDiv.textContent = number;\n      numbersRow.appendChild(numberDiv);\n    });\n    playersBox.appendChild(alphabetRow);\n    playersBox.appendChild(numbersRow);\n  };\n  const appendFieldsToEnemy = () => {\n    // Clear the content element\n    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];\n    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];\n    const content2 = document.querySelector('.content2');\n    const enemysBox = document.querySelector('.enemysBox');\n    content2.innerHTML = '';\n\n    // Iterate over the alphabet keys (a-j)\n    for (let index = 0; index < 10; index++) {\n      const arrayName = String.fromCharCode(97 + index);\n      const array = fieldEnemy.arrays[arrayName];\n\n      // Create a row element for each array\n      const rowElement = document.createElement('div');\n      rowElement.className = 'row';\n\n      // Iterate over the elements in the array\n      for (let i = 0; i < array.length; i++) {\n        const cellElement = document.createElement('div');\n        cellElement.className = 'cell';\n        if (array[i]) {\n          cellElement.style.backgroundColor = \"lightblue\";\n          cellElement.textContent = \"\"; // Delete text content\n        }\n\n        // Append the cell element to the row element\n        rowElement.appendChild(cellElement);\n      }\n\n      // Append the row element to the content element\n      content2.appendChild(rowElement);\n    }\n    const alphabetRow = document.createElement('div');\n    alphabetRow.className = 'alphabet2';\n    alphabet.forEach(letter => {\n      const letterDiv = document.createElement('div');\n      letterDiv.className = 'alphabet-cell2';\n      letterDiv.textContent = letter;\n      alphabetRow.appendChild(letterDiv);\n    });\n    const numbersRow = document.createElement('div');\n    numbersRow.className = 'numbers2';\n    numbers.forEach(number => {\n      const numberDiv = document.createElement('div');\n      numberDiv.className = 'number-cell';\n      numberDiv.textContent = number;\n      numbersRow.appendChild(numberDiv);\n    });\n    enemysBox.appendChild(alphabetRow);\n    enemysBox.appendChild(numbersRow);\n  };\n  const ships = gameBoard.shipMaker();\n  const generatePlacedShips = () => {};\n  gameBoard.placingShips(fieldPlayer, 'b', 4, ships.carrier, 'vertical');\n  gameBoard.placingShips(fieldPlayer, 'f', 9, ships.boat, 'horizontal');\n  gameBoard.placingShips(fieldPlayer, 'b', 10, ships.cruiser, 'horizontal');\n  appendFieldsToPlayer();\n  appendFieldsToEnemy();\n  return {\n    playerFields,\n    enemyFields\n  };\n})();\n\n// Export the factory object\nmodule.exports = domControl;\n\n//# sourceURL=webpack://restoran/./src/domControl.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\nconst {\n  createShips,\n  gameBoard\n} = __webpack_require__(/*! ./ships */ \"./src/ships.js\");\nconst {\n  domControl\n} = __webpack_require__(/*! ./domControl */ \"./src/domControl.js\");\nconsole.log(\"hey\");\n\n//# sourceURL=webpack://restoran/./src/index.js?");

/***/ }),

/***/ "./src/ships.js":
/*!**********************!*\
  !*** ./src/ships.js ***!
  \**********************/
/***/ ((module) => {

eval("function createShips(length, hit, sunk) {\n  return {\n    length: length,\n    hit: hit,\n    sunk: sunk,\n    value: 'ship',\n    hitF: function () {\n      return this.hit++;\n    },\n    isSunk: function () {\n      if (this.length === this.hit) {\n        return this.sunk = true;\n      }\n    }\n  };\n}\nconst gameBoard = {\n  arrays: {},\n  missedAttacks: [],\n  players: {\n    Player1: {\n      name: \"Player\",\n      turn: true,\n      arrays: {},\n      missedAttacks: []\n      // other player properties and methods\n    },\n\n    Player2: {\n      name: \"Computer\",\n      turn: false,\n      arrays: {},\n      missedAttacks: []\n      // other player properties and methods\n    }\n  },\n\n  createFields(player) {\n    for (let index = 0; index < 10; index++) {\n      const arrayName = String.fromCharCode(97 + index);\n      player.arrays[arrayName] = [];\n      for (let number = 1; number < 11; number++) {\n        player.arrays[arrayName].push('');\n      }\n    }\n    return player.arrays;\n  },\n  shipMaker() {\n    const carrier = new createShips(5, 0, false);\n    const battleship = new createShips(4, 0, false);\n    const battleship2 = new createShips(4, 0, false);\n    const cruiser = new createShips(3, 0, false);\n    const cruiser2 = new createShips(3, 0, false);\n    const cruiser3 = new createShips(3, 0, false);\n    const submarine = new createShips(2, 0, false);\n    const submarine2 = new createShips(2, 0, false);\n    const submarine3 = new createShips(2, 0, false);\n    const submarine4 = new createShips(2, 0, false);\n    const boat = new createShips(1, 0, false);\n    const boat2 = new createShips(1, 0, false);\n    const boat3 = new createShips(1, 0, false);\n    const boat4 = new createShips(1, 0, false);\n    return {\n      carrier,\n      battleship,\n      battleship2,\n      cruiser,\n      cruiser2,\n      cruiser3,\n      submarine,\n      submarine2,\n      submarine3,\n      submarine4,\n      boat,\n      boat2,\n      boat3,\n      boat4\n    };\n  },\n  placingShips(player, alphabet, num, ship, orientation = 'vertical') {\n    const targetArray = player.arrays[alphabet];\n    const shipLength = ship.length;\n\n    // Check if the placement is valid\n    const isPlacementValid = (startIndex, endIndex, array) => {\n      if (orientation === 'vertical') {\n        for (let i = startIndex; i <= endIndex; i++) {\n          if (array[i] !== '') {\n            return false; // Overlapping ship found\n          }\n        }\n      } else if (orientation === 'horizontal') {\n        for (let i = startIndex; i <= endIndex; i++) {\n          const alphabetIndex = String.fromCharCode(i + 97);\n          if (player.arrays[alphabetIndex][num - 1] !== '') {\n            return false; // Overlapping ship found\n          }\n        }\n      }\n\n      return true; // No overlapping ships found\n    };\n\n    if (orientation === 'vertical') {\n      const startIndex = num - 1;\n      const endIndex = num - 1 + shipLength - 1;\n      if (!isPlacementValid(startIndex, endIndex, targetArray)) {\n        throw new Error('Invalid ship placement');\n      }\n      for (let i = startIndex; i <= endIndex; i++) {\n        targetArray[i] = ship;\n      }\n      for (let i = startIndex - 1; i <= endIndex + 1; i++) {\n        const alphabetIndex = String.fromCharCode(alphabet.charCodeAt(0) - 1);\n        const neighborArray = player.arrays[alphabetIndex];\n        if (neighborArray) {\n          if (i >= 0 && i < neighborArray.length) {\n            neighborArray[i] = null;\n          }\n        }\n      }\n      for (let i = startIndex - 1; i <= endIndex + 1; i++) {\n        const alphabetIndex = String.fromCharCode(alphabet.charCodeAt(0) + 1);\n        const neighborArray = player.arrays[alphabetIndex];\n        if (neighborArray) {\n          if (i >= 0 && i < neighborArray.length) {\n            neighborArray[i] = null;\n          }\n        }\n      }\n      if (startIndex - 1 >= 0) {\n        targetArray[startIndex - 1] = null;\n      }\n      if (endIndex + 1 < targetArray.length) {\n        targetArray[endIndex + 1] = null;\n      }\n    } else if (orientation === 'horizontal') {\n      const startIndex = alphabet.charCodeAt(0) - 97;\n      const endIndex = startIndex + shipLength - 1;\n      if (!isPlacementValid(startIndex, endIndex, targetArray)) {\n        throw new Error('Invalid ship placement');\n      }\n      for (let i = startIndex; i <= endIndex; i++) {\n        const alphabetIndex = String.fromCharCode(i + 97);\n        player.arrays[alphabetIndex][num - 1] = ship;\n      }\n      for (let i = startIndex; i <= endIndex; i++) {\n        const alphabetIndex = String.fromCharCode(i + 97);\n        if (player.arrays.hasOwnProperty(alphabetIndex)) {\n          if (player.arrays[alphabetIndex].hasOwnProperty(num - 2)) {\n            player.arrays[alphabetIndex][num - 2] = null;\n          }\n          if (player.arrays[alphabetIndex].hasOwnProperty(num)) {\n            player.arrays[alphabetIndex][num] = null;\n          }\n        }\n      }\n      const alphabetIndexLeft = String.fromCharCode(startIndex - 1 + 97);\n      const alphabetIndexRight = String.fromCharCode(endIndex + 1 + 97);\n      if (player.arrays.hasOwnProperty(alphabetIndexLeft)) {\n        if (player.arrays[alphabetIndexLeft].hasOwnProperty(num - 2)) {\n          player.arrays[alphabetIndexLeft][num - 2] = null;\n        }\n        player.arrays[alphabetIndexLeft][num - 1] = null;\n        if (player.arrays[alphabetIndexLeft].hasOwnProperty(num)) {\n          player.arrays[alphabetIndexLeft][num] = null;\n        }\n      }\n      if (player.arrays.hasOwnProperty(alphabetIndexRight)) {\n        if (player.arrays[alphabetIndexRight].hasOwnProperty(num - 2)) {\n          player.arrays[alphabetIndexRight][num - 2] = null;\n        }\n        player.arrays[alphabetIndexRight][num - 1] = null;\n        if (player.arrays[alphabetIndexRight].hasOwnProperty(num)) {\n          player.arrays[alphabetIndexRight][num] = null;\n        }\n      }\n    } else {\n      throw new Error('Invalid orientation: choose either \"vertical\" or \"horizontal\"');\n    }\n  },\n  receiveAttack(player, alphabet, num) {\n    const targetArray = player.arrays[alphabet];\n    const element = targetArray[num - 1];\n    if (typeof element === 'object' && element.hasOwnProperty('hitF')) {\n      element.hitF();\n      element.isSunk();\n    } else {\n      this.attackMissed(alphabet, num);\n    }\n  },\n  attackMissed(player, alphabet, num) {\n    player.missedAttacks.push(`${alphabet},${num}`);\n  },\n  areAllShipsSunk(player) {\n    for (const key in player.arrays) {\n      const array = player.arrays[key];\n      for (const element of array) {\n        if (typeof element === 'object' && element.hasOwnProperty('sunk') && !element.sunk) {\n          return false;\n        }\n      }\n    }\n    return true;\n  },\n  turnsForAttacks() {\n    if (this.players.Player1.turn === true) {\n      let alphabet, num;\n      let isAlreadyAttacked = true;\n      while (isAlreadyAttacked) {\n        // Get user input for attack coordinates, e.g., from event listener\n        // Set `alphabet` and `num` based on user input\n\n        const targetArray = this.arrays[alphabet];\n        const element = targetArray[num - 1];\n        isAlreadyAttacked = typeof element === 'object' && element.hasOwnProperty('hit');\n      }\n      this.receiveAttack(alphabet, num);\n      this.players.Player1.turn = false;\n      this.players.Player2.turn = true;\n    }\n    if (this.players.Player2.turn === true) {\n      // Player 2's turn\n      let randomAlph, randomNumber;\n      let isAlreadyAttacked = true;\n      while (isAlreadyAttacked) {\n        const randomValues = this.generateRandom();\n        randomAlph = randomValues.char;\n        randomNumber = randomValues.number;\n        const targetArray = this.arrays[randomAlph];\n        const element = targetArray[randomNumber - 1];\n        isAlreadyAttacked = typeof element === 'object' && element.hasOwnProperty('hit');\n      }\n      this.receiveAttack(randomAlph, randomNumber);\n      this.players.Player2.turn = false;\n      this.players.Player1.turn = true;\n    }\n  },\n  generateRandom() {\n    const alphabet = 'abcdefghij';\n    const randomAlph = alphabet[Math.floor(Math.random() * alphabet.length)];\n    const randomNumber = Math.floor(Math.random() * 10) + 1;\n    return {\n      char: randomAlph,\n      number: randomNumber\n    };\n  }\n};\nmodule.exports = {\n  createShips: createShips,\n  gameBoard: gameBoard\n};\n\n//# sourceURL=webpack://restoran/./src/ships.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n    margin: 0;\\n    padding: 0;\\n    overflow: hidden;\\n}\\n\\n.container {\\n    display: grid;\\n    grid-template-columns: 1fr;\\n    grid-template-rows: 1fr 5fr;\\n    height: 100vh;\\n    \\n}\\n\\n.header {\\n    background-color: lightblue;\\n}\\n\\n.contentContainer {\\n    display: grid;\\n    grid-template-areas:\\n            \\\"enemysbox . .\\\"\\n            \\\". playersbox .\\\"\\n            \\\". . .\\\";\\n}\\n.playersBox {\\n    grid-area: playersbox;\\n    display: grid;\\n    grid-template-areas: \\n        \\\". alphabet alphabet\\\"\\n        \\\"num cont cont\\\"\\n        \\\"num cont cont\\\";\\n    justify-content: center;\\n    place-content: center;\\n    \\n    \\n  \\n    \\n    \\n}\\n.alphabet {\\n    grid-area: alphabet;\\n    display: grid;\\n    grid-template-columns: repeat(10,1fr);\\n    justify-items: center;\\n    font-size: 22px;\\n   \\n}\\n.numbers {\\n    grid-area: num;\\n    display: grid;\\n    gap: 7px;\\n    align-content: start;\\n    place-content: start;\\n   \\n    font-size: 28px;\\n    \\n}\\n\\n.number-cell {\\n    align-self: flex-start;\\n    justify-self: start;\\n    place-self: start;\\n    margin-right: 1px;\\n}\\n\\n.content {\\n    grid-area: cont;\\n    background-color: white;\\n    display: grid;\\n    grid-template-columns: repeat(10, 1fr);\\n    grid-gap: 0;\\n    height: 45vh;\\n    width: 45vw;\\n    \\n\\n}\\n\\n.cell {\\n    position: relative;\\n    padding-bottom: 0;\\n    background-color: white;\\n    border: 1px solid black;\\n    aspect-ratio: 1/1;\\n    /* Ensures a perfect square */\\n}\\n\\n.enemysBox {\\n    grid-area: enemysbox;\\n    display: grid;\\n    grid-template-areas:\\n        \\\". alphabet alphabet\\\"\\n        \\\"num cont cont\\\"\\n        \\\"num cont cont\\\";\\n    justify-content: center;\\n    place-content: center;\\n}\\n.content2 {\\n    grid-area: cont;\\n    background-color: white;\\n    display: grid;\\n    grid-template-columns: repeat(10, 1fr);\\n    grid-gap: 0;\\n    height: 25vh;\\n    width: 25vw;\\n\\n\\n}\\n.alphabet2 {\\n    grid-area: alphabet;\\n    display: grid;\\n    grid-template-columns: repeat(10, 1fr);\\n    justify-items: center;\\n    font-size: 12px;\\n\\n}\\n\\n.numbers2 {\\n    grid-area: num;\\n    display: grid;\\n    gap: 4.5px;\\n    align-content: start;\\n    place-content: start;\\n\\n    font-size: 15px;\\n\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restoran/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restoran/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restoran/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restoran/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restoran/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restoran/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restoran/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restoran/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restoran/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restoran/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;