import request from 'supertest';
import { app } from '../app';
describe('Test any coffee API endpoint request', () => {
    test('GET /coffee/?coffeeName=mocha should return correct object', async () => {
        const res = await request(app)
            .get('/coffee')
            .query({ coffeeName: 'Mocha' });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            drinkType: 'Coffee',
            name: 'Mocha'
        });
    });
    test('GET /coffee/?coffeeName=americano should return correct object', async () => {
        const res = await request(app)
            .get('/coffee')
            .query({ coffeeName: 'Americano' });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            drinkType: 'Coffee',
            name: 'Americano'
        });
    });
});