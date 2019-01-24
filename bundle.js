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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _stream = __webpack_require__(1);

var _stream2 = _interopRequireDefault(_stream);

var _symbol = __webpack_require__(2);

var _symbol2 = _interopRequireDefault(_symbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.addEventListener('DOMContentLoaded', function () {
  var canvas = document.getElementById('myCanvas');
  var ctx = canvas.getContext('2d');
  canvas.height = window.outerHeight;
  canvas.width = window.outerWidth;
  var ctxH = canvas.height;
  var ctxW = canvas.width;

  var myReq = void 0;
  var lastTime = 0;
  var deltaTime = void 0;
  var streams = [];
  var fontWidth = 26;
  var x = 0;
  var totalStreams = ctxW / fontWidth;
  for (var i = 0; i <= totalStreams; i++) {
    var y = Math.round(Math.random() * -1000);
    streams.push(new _stream2.default(x, y, ctxH));
    x += fontWidth;
  }

  var update = function update() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    streams.forEach(function (stream) {
      stream.draw(ctx, deltaTime);
    });
  };

  var animate = function animate() {
    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

    deltaTime = time - lastTime;
    lastTime = time;
    myReq = requestAnimationFrame(animate);
    update(deltaTime);
  };

  animate();
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _symbol = __webpack_require__(2);

var _symbol2 = _interopRequireDefault(_symbol);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Stream = function () {
  function Stream(x, y, ctxH) {
    _classCallCheck(this, Stream);

    this.x = x;
    this.y = y;
    this.height = ctxH;
    this.stream = [];
    var random = Math.round(Math.random() * 20 + 5);
    this.speed = Math.round(Math.random() * 3 + 3);
    this.first = true;
    for (var i = 0; i <= random; i++) {
      this.stream.push(new _symbol2.default(this.x, this.y, this.height, this.speed, this.first));
      this.y -= 26;
      this.first = false;
    }
  }

  _createClass(Stream, [{
    key: 'draw',
    value: function draw(ctx, deltaTime) {
      this.stream.forEach(function (symbol) {
        symbol.draw(ctx, deltaTime);
      });
    }
  }]);

  return Stream;
}();

exports.default = Stream;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _Symbol = function () {
  function _Symbol(x, y, height, speed, first) {
    _classCallCheck(this, _Symbol);

    this.x = x;
    this.y = y;
    this.height = height;
    this.first = first;
    this.unicode;
    this.execute = 0;
    this.random = Math.random() * 600 + 100;
    this.generateSymbol();
    this.speed = speed;
    this.number = Math.round(Math.random() * 100);
  }

  _createClass(_Symbol, [{
    key: "generateSymbol",
    value: function generateSymbol() {
      this.unicode = String.fromCharCode(0x30A0 + Math.round(Math.random() * 96));
    }
  }, {
    key: "draw",
    value: function draw(ctx, deltaTime) {
      this.execute += deltaTime;
      if (this.execute > this.random) {
        this.generateSymbol();
        this.execute = 0;
      }
      if (this.first && this.number > 60) {
        ctx.fillStyle = "white";
      } else {
        ctx.fillStyle = "green";
      }
      ctx.font = "26px Arial";
      ctx.fillText(this.unicode, this.x, this.y);
      this.y += this.speed;
      if (this.y > this.height) {
        this.y = 0;
      }
    }
  }]);

  return _Symbol;
}();

exports.default = _Symbol;

/***/ })
/******/ ]);