import { StoreIdMiddleware } from './storeid.middleware';

describe('StoreidMiddleware', () => {
    it('should be defined', () => {
        expect(new StoreIdMiddleware()).toBeDefined();
    });
});
