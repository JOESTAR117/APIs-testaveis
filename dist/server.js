"use strict";

var _app = _interopRequireDefault(require("./app"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const port = process.env.PORT || 3000;
_app.default.listen(port, () => {
  console.log(`App running port ${port}`);
});