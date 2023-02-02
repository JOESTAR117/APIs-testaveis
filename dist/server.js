"use strict";

var _express = _interopRequireDefault(require("express"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const app = (0, _express.default)();
app.use(_express.default.json());
app.get('/', (req, res, next) => {
  console.log('route / called');
  res.send('Hello World!');
});
app.use((req, res, next) => {
  console.log('Will run before any route');
  next();
});
app.listen(3000, () => {
  console.log('Listening on port 3000');
});