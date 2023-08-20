import request from 'supertest';
import { app } from '../app';
describe('Test tea API endpoint request', () => {
    test('GET /tea should return correct object', async () => {
        const res = await request(app)
            .get('/tea')
            .query({ coffeeName: 'Black' });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            drinkType: 'Tea',
            name: 'Black'
        });
    });
});