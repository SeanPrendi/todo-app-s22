import mongoose from 'mongoose'
 
import { MemeModel } from '../src/db/models';
 
describe('meme', function() {
    it('should take on assigned values', function() {
        const m = new MemeModel();
        m.title = 'Test Name';
        m.content = 'The Quick Brown Fox'
        expect(m.title).toEqual('Test Name');
        expect(m.content).toContain('Fox');
    });
});