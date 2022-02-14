"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("../src/db/models");
describe('meme', function () {
    it('should take on assigned values', function () {
        var m = new models_1.MemeModel();
        m.title = 'Test Name';
        m.content = 'The Quick Brown Fox';
        expect(m.title).toEqual('Test Name');
        expect(m.content).toContain('Fox');
    });
});
