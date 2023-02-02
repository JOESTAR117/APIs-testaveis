"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = require("express");
var _products = _interopRequireDefault(require("../controllers/products"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const router = (0, _express.Router)();
const productsController = new _products.default();
router.get('/', (req, res) => productsController.get(req, res));
var _default = router;
exports.default = _default;