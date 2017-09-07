webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // import { calculator } from './calculator/calculator';


var _trafficLighter = __webpack_require__(1);

__webpack_require__(3);

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animal = function () {
  function Animal(name) {
    _classCallCheck(this, Animal);

    this.name = name;
  }

  _createClass(Animal, [{
    key: 'makeSound',
    value: function makeSound() {
      console.log(' ');
    }
  }, {
    key: 'move',
    value: function move() {
      console.log('I have moved');
    }
  }]);

  return Animal;
}();

var Horses = function (_Animal) {
  _inherits(Horses, _Animal);

  function Horses(name, speed) {
    _classCallCheck(this, Horses);

    var _this = _possibleConstructorReturn(this, (Horses.__proto__ || Object.getPrototypeOf(Horses)).call(this, name));

    _this.speed = speed;
    return _this;
  }

  _createClass(Horses, [{
    key: 'makeSound',
    value: function makeSound() {
      console.log(' ');
    }
  }, {
    key: 'move',
    value: function move() {
      if (speed > 50) {
        console.log('Fast');
      } else {
        console.log('Slow');
      }
    }
  }]);

  return Horses;
}(Animal);

var Pony = function (_Horses) {
  _inherits(Pony, _Horses);

  function Pony(name, speed) {
    _classCallCheck(this, Pony);

    return _possibleConstructorReturn(this, (Pony.__proto__ || Object.getPrototypeOf(Pony)).call(this, name, speed));
  }

  _createClass(Pony, [{
    key: 'makeSound',
    value: function makeSound() {
      console.log(' ');
    }
  }, {
    key: 'move',
    value: function move() {
      _get(Pony.prototype.__proto__ || Object.getPrototypeOf(Pony.prototype), 'move', this).call(this);
    }
  }]);

  return Pony;
}(Horses);

var someHorses = new Horses('Jack', 55);
someHorses.move();
var somePony = new Pony('Fine', 23);
somePony.move();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trafficLighter = undefined;

__webpack_require__(2);

function trafficLighter(selector) {
  var timeInterval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1500;

  var template = '\n     <div class="traffic-lighter_switcher">on/off</div>\n     <div class="traffic-lighter_lights traffic-lighter_lights__red"></div>\n     <div class="traffic-lighter_lights traffic-lighter_lights__yellow"></div>\n     <div class="traffic-lighter_lights traffic-lighter_lights__green"></div>\n  ';
  var rootElement = document.querySelector(selector);
  var isEnabled = false;
  var lights = void 0;
  var activeElementIndex = 0;
  var intervalId = null;

  function toggleNext() {
    if (activeElementIndex + 1 < lights.length) {
      activeElementIndex += 1;
    } else {
      activeElementIndex = 0;
    }
  }

  function startInterval() {
    if (isEnabled && !intervalId) {
      console.log('Interval started!');
      intervalId = setInterval(function () {
        toggleNext();
        switchLight(lights[activeElementIndex]);
      }, timeInterval);
    }
  }

  function stopInterval() {
    clearInterval(intervalId);
    intervalId = null;
  }

  function resetInterval() {
    stopInterval();
    startInterval();
  }

  function render() {
    rootElement.classList.add('traffic-lighter');
    rootElement.innerHTML = template;
    lights = rootElement.querySelectorAll('.traffic-lighter_lights');
    console.log(lights);
  }

  function switchOffLights() {
    console.log(lights);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = lights[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var light = _step.value;

        light.classList.remove('traffic-lighter_lights__active');
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  function toggleLighter() {
    isEnabled = !isEnabled;

    if (!isEnabled) {
      stopInterval();
      switchOffLights();
      rootElement.classList.remove('traffic-lighter__active');
    } else {
      rootElement.classList.add('traffic-lighter__active');
      switchLight(lights[activeElementIndex]);
      startInterval();
    }
  }

  function switchLight(el) {
    switchOffLights();
    el.classList.add('traffic-lighter_lights__active');
  }

  function getIndexOfActiveElement(domElement) {
    var index = 0;
    for (var i = 0; i < lights.length; i++) {
      if (lights[i] === domElement) {
        index = i;
      }
    }
    return index;
  }

  function handleEvents() {
    rootElement.addEventListener('click', function (e) {
      if (e.target.classList.contains('traffic-lighter_lights') && isEnabled === true) {
        activeElementIndex = getIndexOfActiveElement(e.target);
        switchLight(e.target);
        resetInterval();
      }
      if (e.target.classList.contains('traffic-lighter_switcher')) {
        toggleLighter();
      }
    });

    rootElement.addEventListener('mouseenter', function () {
      console.log('MouseEnter');
      stopInterval();
    });

    rootElement.addEventListener('mouseleave', function () {
      console.log('MouseLeave');
      startInterval();
    });
  }

  function init() {
    render();
    handleEvents();
  }

  init();
}

exports.trafficLighter = trafficLighter;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[0]);