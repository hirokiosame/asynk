"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports["default"] = asynk;

function asynk(generatorFunction) {
	var generatorItr = generatorFunction.call(this, function resume() {
		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		setImmediate(function () {
			return generatorItr.next(args);
		});
	});

	// Start
	generatorItr.next();
}

;
module.exports = exports["default"];