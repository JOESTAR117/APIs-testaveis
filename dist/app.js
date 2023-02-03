"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _express = _interopRequireDefault(require("express"));
var _routes = _interopRequireDefault(require("./routes"));
var _db = _interopRequireDefault(require("./database/db.js"));
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_dotenv.default.config();
const app = (0, _express.default)();
(0, _db.default)();
app.use(_express.default.json());
app.use('/', _routes.default);
var _default = app;
exports.default = _default;