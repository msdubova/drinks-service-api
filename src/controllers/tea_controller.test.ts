import request from 'supertest';
import { app } from '../app';
describe('Test any tea API endpoint request', () => {
    test('GET /tea/?teaName=green should return correct object', async () => {
        const res = await request(app)
            .get('/tea')
            .query({ teaName: 'Green' });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            drinkType: 'Tea',
            name: 'Green'
        });
    });
    test('GET /tea/?teaName=oolong should return correct object', async () => {
        const res = await request(app)
            .get('/tea')
            .query({ teaName: 'Oolong' });

        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual({
            drinkType: 'Tea',
            name: 'Oolong'
        });
   
    });
});