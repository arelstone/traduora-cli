import { helpFlag } from '../flags';

describe('flags', () => {
    describe('helpFlag', () => {
        it('should have h as char', () => {
            expect(helpFlag().char).toEqual('h');
        });
    });
});
