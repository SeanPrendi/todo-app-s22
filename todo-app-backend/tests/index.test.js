"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __importDefault(require("../helpers"));
test('gets well-formatted todo json object', function () {
    var data = helpers_1.default();
    var testObj = data[0];
    expect(testObj).toBeDefined();
    expect(testObj).toHaveProperty('id');
    expect(testObj).toHaveProperty('task');
    expect(testObj).toHaveProperty('due');
    expect(testObj).toHaveProperty('completed');
});
