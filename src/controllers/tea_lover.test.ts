import request from 'supertest';
import { app } from '../app';

describe('Test tea_lover API endpoint request', () => {
    test('Get /tealover should return correct message', async () => {
        const res = await request(app).get('/tealover');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual('I like tea!');
    });
});