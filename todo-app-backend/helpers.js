"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fakeToDo_json_1 = __importDefault(require("./fakeToDo.json"));
var getTodoData = function () {
    return fakeToDo_json_1.default;
};
exports.default = getTodoData;
