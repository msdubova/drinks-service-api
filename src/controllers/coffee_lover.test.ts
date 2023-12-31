import request from 'supertest';
import { app } from '../app';

describe('Test coffee_lover API endpoint request', () => {
    test('Get /coffeelover should return correct message', async () => {
        const res = await request(app).get('/coffeelover');
        expect(res.statusCode).toEqual(200);
        expect(res.text).toEqual('I like coffee!');
    });
});