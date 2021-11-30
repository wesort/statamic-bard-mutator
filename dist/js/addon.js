/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/Marks.js":
/*!*******************************!*\
  !*** ./resources/js/Marks.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bold": () => (/* binding */ Bold),
/* harmony export */   "Code": () => (/* binding */ Code),
/* harmony export */   "Italic": () => (/* binding */ Italic),
/* harmony export */   "Link": () => (/* binding */ Link),
/* harmony export */   "Strike": () => (/* binding */ Strike),
/* harmony export */   "Subscript": () => (/* binding */ Subscript),
/* harmony export */   "Superscript": () => (/* binding */ Superscript),
/* harmony export */   "Underline": () => (/* binding */ Underline)
/* harmony export */ });
/* harmony import */ var _Mixins_MutatesMark__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mixins/MutatesMark */ "./resources/js/Mixins/MutatesMark.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var extensions = Statamic.$bard.tiptap.extensions;
var Bold = /*#__PURE__*/function (_MutatesMark) {
  _inherits(Bold, _MutatesMark);

  var _super = _createSuper(Bold);

  function Bold() {
    _classCallCheck(this, Bold);

    return _super.apply(this, arguments);
  }

  return Bold;
}((0,_Mixins_MutatesMark__WEBPACK_IMPORTED_MODULE_0__["default"])(extensions.Bold));
var Code = /*#__PURE__*/function (_MutatesMark2) {
  _inherits(Code, _MutatesMark2);

  var _super2 = _createSuper(Code);

  function Code() {
    _classCallCheck(this, Code);

    return _super2.apply(this, arguments);
  }

  return Code;
}((0,_Mixins_MutatesMark__WEBPACK_IMPORTED_MODULE_0__["default"])(extensions.Code));
var Italic = /*#__PURE__*/function (_MutatesMark3) {
  _inherits(Italic, _MutatesMark3);

  var _super3 = _createSuper(Italic);

  function Italic() {
    _classCallCheck(this, Italic);

    return _super3.apply(this, arguments);
  }

  return Italic;
}((0,_Mixins_MutatesMark__WEBPACK_IMPORTED_MODULE_0__["default"])(extensions.Italic));
var Link = /*#__PURE__*/function (_MutatesMark4) {
  _inherits(Link, _MutatesMark4);

  var _super4 = _createSuper(Link);

  function Link() {
    _classCallCheck(this, Link);

    return _super4.apply(this, arguments);
  }

  return Link;
}((0,_Mixins_MutatesMark__WEBPACK_IMPORTED_MODULE_0__["default"])(extensions.Link));
var Strike = /*#__PURE__*/function (_MutatesMark5) {
  _inherits(Strike, _MutatesMark5);

  var _super5 = _createSuper(Strike);

  function Strike() {
    _classCallCheck(this, Strike);

    return _super5.apply(this, arguments);
  }

  return Strike;
}((0,_Mixins_MutatesMark__WEBPACK_IMPORTED_MODULE_0__["default"])(extensions.Strike));
var Subscript = /*#__PURE__*/function (_MutatesMark6) {
  _inherits(Subscript, _MutatesMark6);

  var _super6 = _createSuper(Subscript);

  function Subscript() {
    _classCallCheck(this, Subscript);

    return _super6.apply(this, arguments);
  }

  return Subscript;
}((0,_Mixins_MutatesMark__WEBPACK_IMPORTED_MODULE_0__["default"])(extensions.Subscript));
var Superscript = /*#__PURE__*/function (_MutatesMark7) {
  _inherits(Superscript, _MutatesMark7);

  var _super7 = _createSuper(Superscript);

  function Superscript() {
    _classCallCheck(this, Superscript);

    return _super7.apply(this, arguments);
  }

  return Superscript;
}((0,_Mixins_MutatesMark__WEBPACK_IMPORTED_MODULE_0__["default"])(extensions.Superscript));
var Underline = /*#__PURE__*/function (_MutatesMark8) {
  _inherits(Underline, _MutatesMark8);

  var _super8 = _createSuper(Underline);

  function Underline() {
    _classCallCheck(this, Underline);

    return _super8.apply(this, arguments);
  }

  return Underline;
}((0,_Mixins_MutatesMark__WEBPACK_IMPORTED_MODULE_0__["default"])(extensions.Underline));

/***/ }),

/***/ "./resources/js/Mixins/MutatesMark.js":
/*!********************************************!*\
  !*** ./resources/js/Mixins/MutatesMark.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var MutatesMark = function MutatesMark(superclass) {
  return /*#__PURE__*/function (_superclass) {
    _inherits(_class, _superclass);

    var _super = _createSuper(_class);

    function _class() {
      _classCallCheck(this, _class);

      return _super.apply(this, arguments);
    }

    _createClass(_class, [{
      key: "schema",
      get: function get() {
        return BardMutator.mutator.mutateSchema(this.name, _get(_getPrototypeOf(_class.prototype), "schema", this));
      }
    }, {
      key: "commands",
      value: function commands(data) {
        return BardMutator.mutator.mutateCommands(this.name, data, _get(_getPrototypeOf(_class.prototype), "commands", this).call(this, data));
      }
    }]);

    return _class;
  }(superclass);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MutatesMark);

/***/ }),

/***/ "./resources/js/Mixins/MutatesNode.js":
/*!********************************************!*\
  !*** ./resources/js/Mixins/MutatesNode.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var MutatesNode = function MutatesNode(superclass) {
  return /*#__PURE__*/function (_superclass) {
    _inherits(_class, _superclass);

    var _super = _createSuper(_class);

    function _class() {
      _classCallCheck(this, _class);

      return _super.apply(this, arguments);
    }

    _createClass(_class, [{
      key: "schema",
      get: function get() {
        return BardMutator.mutator.mutateSchema(this.name, _get(_getPrototypeOf(_class.prototype), "schema", this));
      }
    }, {
      key: "commands",
      value: function commands(data) {
        return BardMutator.mutator.mutateCommands(this.name, data, _get(_getPrototypeOf(_class.prototype), "commands", this).call(this, data));
      }
    }]);

    return _class;
  }(superclass);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MutatesNode);

/***/ }),

/***/ "./resources/js/Mutator.js":
/*!*********************************!*\
  !*** ./resources/js/Mutator.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Mutator)
/* harmony export */ });
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ "./resources/js/utilities.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Mutator = /*#__PURE__*/function () {
  function Mutator(extensions) {
    _classCallCheck(this, Mutator);

    _defineProperty(this, "extensions", {});

    _defineProperty(this, "registered", []);

    _defineProperty(this, "schemaMutators", {});

    _defineProperty(this, "commandsMutators", {});

    this.extensions = extensions;
  }

  _createClass(Mutator, [{
    key: "schema",
    value: function schema(type, callback) {
      this.registerType(type);
      this.schemaMutators[type].push(callback);
      return this;
    }
  }, {
    key: "getSchemaMutators",
    value: function getSchemaMutators(type) {
      return this.schemaMutators[type] || [];
    }
  }, {
    key: "mutateSchema",
    value: function mutateSchema(type, schema) {
      var mutators = this.getSchemaMutators(type);

      if (!mutators.length) {
        return schema;
      }

      var _iterator = _createForOfIteratorHelper(mutators),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var mutator = _step.value;
          schema = mutator(schema, {
            extendSchema: _utilities__WEBPACK_IMPORTED_MODULE_0__.extendSchema
          });
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return schema;
    }
  }, {
    key: "commands",
    value: function commands(type, callback) {
      this.registerType(type);
      this.commandsMutators[type].push(callback);
      return this;
    }
  }, {
    key: "getCommandsMutators",
    value: function getCommandsMutators(type) {
      return this.commandsMutators[type] || [];
    }
  }, {
    key: "mutateCommands",
    value: function mutateCommands(type, data, commands) {
      var mutators = this.getCommandsMutators(type);

      if (!mutators.length) {
        return commands;
      }

      var _iterator2 = _createForOfIteratorHelper(mutators),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var mutator = _step2.value;
          commands = mutator(data, commands, {
            extendCommands: function extendCommands() {
              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              return _utilities__WEBPACK_IMPORTED_MODULE_0__.extendCommands.apply(void 0, [type].concat(args));
            }
          });
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      return commands;
    }
  }, {
    key: "registerType",
    value: function registerType(type) {
      var _this = this;

      if (this.registered.includes(type)) {
        return;
      }

      this.registered.push(type);
      this.schemaMutators[type] = [];
      this.commandsMutators[type] = [];

      if (this.extensions[type]) {
        Statamic.$bard.replaceExtension(type, function (_ref) {
          var extension = _ref.extension;
          return new _this.extensions[type](extension.options);
        });
      }
    }
  }]);

  return Mutator;
}();



/***/ }),

/***/ "./resources/js/Nodes.js":
/*!*******************************!*\
  !*** ./resources/js/Nodes.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Blockquote": () => (/* binding */ Blockquote),
/* harmony export */   "BulletList": () => (/* binding */ BulletList),
/* harmony export */   "CodeBlock": () => (/* binding */ CodeBlock),
/* harmony export */   "HardBreak": () => (/* binding */ HardBreak),
/* harmony export */   "Heading": () => (/* binding */ Heading),
/* harmony export */   "HorizontalRule": () => (/* binding */ HorizontalRule),
/* harmony export */   "Image": () => (/* binding */ Image),
/* harmony export */   "ListItem": () => (/* binding */ ListItem),
/* harmony export */   "OrderedList": () => (/* binding */ OrderedList),
/* harmony export */   "Paragraph": () => (/* binding */ Paragraph),
/* harmony export */   "Table": () => (/* binding */ Table),
/* harmony export */   "TableCell": () => (/* binding */ TableCell),
/* harmony export */   "TableHeader": () => (/* binding */ TableHeader),
/* harmony export */   "TableRow": () => (/* binding */ TableRow)
/* harmony export */ });
/* harmony import */ var _Mixins_MutatesNode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mixins/MutatesNode */ "./resources/js/Mixins/MutatesNode.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var _Statamic$$bard$tipta = Statamic.$bard.tiptap,
    core = _Statamic$$bard$tipta.core,
    extensions = _Statamic$$bard$tipta.extensions;
var Blockquote = /*#__PURE__*/function (_MutatesNode) {
  _inherits(Blockquote, _MutatesNode);

  var _super = _createSuper(Blockquote);

  function Blockquote() {
    _classCallCheck(this, Blockquote);

    return _super.apply(this, arguments);
  }

  return Blockquote;
}((0,_Mixins_MutatesNode__WEBPACK_IMPORTED_MODULE_0__["default"])(extensions.Blockquote));
var BulletList = /*#__PURE__*/function (_MutatesNode2) {
  _inherits(BulletList, _MutatesNode2);

  var _super2 = _createSuper(BulletList);

  function BulletList() {
    _classCallCheck(this, BulletList);

    return _super2.apply(this, arguments);
  }

  return BulletList;
}((0,_Mixins_MutatesNode__WEBPACK_IMPORTED_MODULE_0__["default"])(extensions.BulletList));
var CodeBlock = /*#__PURE__*/function (_MutatesNode3) {
  _inherits(CodeBlock, _MutatesNode3);

  var _super3 = _createSuper(CodeBlock);

  function CodeBlock() {
    _classCallCheck(this, CodeBlock);

    return _super3.apply(this, arguments);
  }

  return CodeBlock;
}((0,_Mixins_MutatesNode__WEBPACK_IMPORTED_MODULE_0__["default"])(extensions.CodeBlock));
var HardBreak = /*#__PURE__*/function (_MutatesNode4) {
  _inherits(HardBreak, _MutatesNode4);

  var _super4 = _createSuper(HardBreak);

  function HardBreak() {
    _classCallCheck(this, HardBreak);

    return _super4.apply(this, arguments);
  }

  return HardBreak;
}((0,_Mixins_MutatesNode__WEBPACK_IMPORTED_MODULE_0__["default"])(extensions.HardBreak));
var Heading = /*#__PURE__*/function (_MutatesNode5) {
  _inherits(Heading, _MutatesNode5);

  var _super5 = _createSuper(Heading);

  function Heading() {
    _classCallCheck(this, Heading);

    return _super5.apply(this, arguments);
  }

  return Heading;
}((0,_Mixins_MutatesNode__WEBPACK_IMPORTED_MODULE_0__["default"])(extensions.Heading));
var HorizontalRule = /*#__PURE__*/function (_MutatesNode6) {
  _inherits(HorizontalRule, _MutatesNode6);

  var _super6 = _createSuper(HorizontalRule);

  function HorizontalRule() {
    _classCallCheck(this, HorizontalRule);

    return _super6.apply(this, arguments);
  }

  return HorizontalRule;
}((0,_Mixins_MutatesNode__WEBPACK_IMPORTED_MODULE_0__["default"])(extensions.HorizontalRule));
var Image = /*#__PURE__*/function (_MutatesNode7) {
  _inherits(Image, _MutatesNode7);

  var _super7 = _createSuper(Image);

  function Image() {
    _classCallCheck(this, Image);

    return _super7.apply(this, arguments);
  }

  return Image;
}((0,_Mixins_MutatesNode__WEBPACK_IMPORTED_MODULE_0__["default"])(extensions.Image));
var ListItem = /*#__PURE__*/function (_MutatesNode8) {
  _inherits(ListItem, _MutatesNode8);

  var _super8 = _createSuper(ListItem);

  function ListItem() {
    _classCallCheck(this, ListItem);

    return _super8.apply(this, arguments);
  }

  return ListItem;
}((0,_Mixins_MutatesNode__WEBPACK_IMPORTED_MODULE_0__["default"])(extensions.ListItem));
var OrderedList = /*#__PURE__*/function (_MutatesNode9) {
  _inherits(OrderedList, _MutatesNode9);

  var _super9 = _createSuper(OrderedList);

  function OrderedList() {
    _classCallCheck(this, OrderedList);

    return _super9.apply(this, arguments);
  }

  return OrderedList;
}((0,_Mixins_MutatesNode__WEBPACK_IMPORTED_MODULE_0__["default"])(extensions.OrderedList));
var Paragraph = /*#__PURE__*/function (_MutatesNode10) {
  _inherits(Paragraph, _MutatesNode10);

  var _super10 = _createSuper(Paragraph);

  function Paragraph() {
    _classCallCheck(this, Paragraph);

    return _super10.apply(this, arguments);
  }

  return Paragraph;
}((0,_Mixins_MutatesNode__WEBPACK_IMPORTED_MODULE_0__["default"])(core.Paragraph));
var Table = /*#__PURE__*/function (_MutatesNode11) {
  _inherits(Table, _MutatesNode11);

  var _super11 = _createSuper(Table);

  function Table() {
    _classCallCheck(this, Table);

    return _super11.apply(this, arguments);
  }

  return Table;
}((0,_Mixins_MutatesNode__WEBPACK_IMPORTED_MODULE_0__["default"])(extensions.Table));
var TableCell = /*#__PURE__*/function (_MutatesNode12) {
  _inherits(TableCell, _MutatesNode12);

  var _super12 = _createSuper(TableCell);

  function TableCell() {
    _classCallCheck(this, TableCell);

    return _super12.apply(this, arguments);
  }

  return TableCell;
}((0,_Mixins_MutatesNode__WEBPACK_IMPORTED_MODULE_0__["default"])(extensions.TableCell));
var TableHeader = /*#__PURE__*/function (_MutatesNode13) {
  _inherits(TableHeader, _MutatesNode13);

  var _super13 = _createSuper(TableHeader);

  function TableHeader() {
    _classCallCheck(this, TableHeader);

    return _super13.apply(this, arguments);
  }

  return TableHeader;
}((0,_Mixins_MutatesNode__WEBPACK_IMPORTED_MODULE_0__["default"])(extensions.TableHeader));
var TableRow = /*#__PURE__*/function (_MutatesNode14) {
  _inherits(TableRow, _MutatesNode14);

  var _super14 = _createSuper(TableRow);

  function TableRow() {
    _classCallCheck(this, TableRow);

    return _super14.apply(this, arguments);
  }

  return TableRow;
}((0,_Mixins_MutatesNode__WEBPACK_IMPORTED_MODULE_0__["default"])(extensions.TableRow));

/***/ }),

/***/ "./resources/js/utilities.js":
/*!***********************************!*\
  !*** ./resources/js/utilities.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "normalizeSchema": () => (/* binding */ normalizeSchema),
/* harmony export */   "normalizeParseDOM": () => (/* binding */ normalizeParseDOM),
/* harmony export */   "normalizeToDOMValue": () => (/* binding */ normalizeToDOMValue),
/* harmony export */   "extendSchema": () => (/* binding */ extendSchema),
/* harmony export */   "normalizeCommands": () => (/* binding */ normalizeCommands),
/* harmony export */   "extendCommands": () => (/* binding */ extendCommands)
/* harmony export */ });
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var normalizeSchema = function normalizeSchema(schema) {
  if (!schema.attrs) {
    schema.attrs = {};
  }

  return schema;
};
var normalizeParseDOM = function normalizeParseDOM(parseDOM) {
  parseDOM.forEach(function (parseDOMItem) {
    if (!parseDOMItem.getAttrs) {
      parseDOMItem.getAttrs = function () {
        return {};
      };
    }
  });
  return parseDOM;
};
var normalizeToDOMValue = function normalizeToDOMValue(value) {
  if (!value[1] || !_.isPlainObject(value[1])) {
    value.splice(1, 0, {});
  }

  return value;
};
var extendSchema = function extendSchema(schema, _ref) {
  var attrs = _ref.attrs,
      parseDOMAttrs = _ref.parseDOMAttrs,
      toDOMAttrs = _ref.toDOMAttrs;
  normalizeSchema(schema);

  if (attrs) {
    Object.assign(schema.attrs, attrs);
  }

  if (parseDOMAttrs) {
    var parseDOM = normalizeParseDOM(schema.parseDOM);
    parseDOM.forEach(function (parseDOMItem) {
      var current = parseDOMItem.getAttrs;

      parseDOMItem.getAttrs = function (dom) {
        var value = current(dom);
        Object.assign(value, parseDOMAttrs(dom));
        return value;
      };
    });
  }

  if (toDOMAttrs) {
    var toDOM = schema.toDOM;
    var current = toDOM;

    schema.toDOM = function (node) {
      var value = normalizeToDOMValue(current(node));
      Object.assign(value[1], toDOMAttrs(node));
      return value;
    };
  }

  return schema;
};
var normalizeCommands = function normalizeCommands(name, commands) {
  if (typeof commands === 'function') {
    commands = _defineProperty({}, name, commands);
  }

  return commands;
};
var extendCommands = function extendCommands(name, commands, additional) {
  commands = normalizeCommands(name, commands);
  Object.assign(commands, additional);
  return commands;
};

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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./resources/js/addon.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Nodes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Nodes.js */ "./resources/js/Nodes.js");
/* harmony import */ var _Marks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Marks.js */ "./resources/js/Marks.js");
/* harmony import */ var _Mutator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Mutator.js */ "./resources/js/Mutator.js");



var mutator = new _Mutator_js__WEBPACK_IMPORTED_MODULE_2__["default"]({
  blockquote: _Nodes_js__WEBPACK_IMPORTED_MODULE_0__.Blockquote,
  bullet_list: _Nodes_js__WEBPACK_IMPORTED_MODULE_0__.BulletList,
  code_block: _Nodes_js__WEBPACK_IMPORTED_MODULE_0__.CodeBlock,
  hard_break: _Nodes_js__WEBPACK_IMPORTED_MODULE_0__.HardBreak,
  heading: _Nodes_js__WEBPACK_IMPORTED_MODULE_0__.Heading,
  horizontal_rule: _Nodes_js__WEBPACK_IMPORTED_MODULE_0__.HorizontalRule,
  image: _Nodes_js__WEBPACK_IMPORTED_MODULE_0__.Image,
  list_item: _Nodes_js__WEBPACK_IMPORTED_MODULE_0__.ListItem,
  ordered_list: _Nodes_js__WEBPACK_IMPORTED_MODULE_0__.OrderedList,
  paragraph: _Nodes_js__WEBPACK_IMPORTED_MODULE_0__.Paragraph,
  table: _Nodes_js__WEBPACK_IMPORTED_MODULE_0__.Table,
  table_cell: _Nodes_js__WEBPACK_IMPORTED_MODULE_0__.TableCell,
  table_header: _Nodes_js__WEBPACK_IMPORTED_MODULE_0__.TableHeader,
  table_row: _Nodes_js__WEBPACK_IMPORTED_MODULE_0__.TableRow,
  bold: _Marks_js__WEBPACK_IMPORTED_MODULE_1__.Bold,
  code: _Marks_js__WEBPACK_IMPORTED_MODULE_1__.Code,
  italic: _Marks_js__WEBPACK_IMPORTED_MODULE_1__.Italic,
  link: _Marks_js__WEBPACK_IMPORTED_MODULE_1__.Link,
  strike: _Marks_js__WEBPACK_IMPORTED_MODULE_1__.Strike,
  subscript: _Marks_js__WEBPACK_IMPORTED_MODULE_1__.Subscript,
  superscript: _Marks_js__WEBPACK_IMPORTED_MODULE_1__.Superscript,
  underline: _Marks_js__WEBPACK_IMPORTED_MODULE_1__.Underline
});
window.BardMutator = {
  mutator: mutator
};
})();

/******/ })()
;