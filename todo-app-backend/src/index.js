"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var app = express_1.default();
var port = 3001;
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
// import fake data
var fakeToDo_json_1 = __importDefault(require("../fakeToDo.json"));
app.get('/', function (req, res) {
    res.status(200).send('Hello 17-356 People!');
});
app.get('/todos', function (req, res) {
    res.status(200).send(fakeToDo_json_1.default);
});
app.post('/addTodo', function (req, res) {
    console.log(req.body);
    res.status(200).send('New Todo received!');
});
app.listen(port, function () {
    console.log("Todo-App listening on localhost:" + port);
});
