require('cross-fetch/polyfill');

import { BASE_URL, getToken, headersWithToken } from '../fetch';
import fetch, { enableFetchMocks } from 'jest-fetch-mock'

enableFetchMocks();

describe('fetch', () => {
    // beforeEach(() => {
    //     fetch.resetMocks()
    // })

    describe('BASE_URL', () => {
        it('should match env.TR_BASE_URL', () => {
            expect(BASE_URL).toEqual(process.env.TR_BASE_URL)
        });

        it('should be a string', () => {
            expect(typeof BASE_URL).toEqual('string');
        });
    });

    describe('getToken', () => {
        beforeAll(() => {
            getToken()
        })

        it('should call /auth/token endpoint', () => {
            const [url] = fetch.mock.calls[0];
            expect(url).toEqual(`${process.env.TR_BASE_URL}/auth/token`)
        });

        it('should be a POST request', () => {
            const [, options] = fetch.mock.calls[0];
            expect(options?.method).toEqual('POST')
        });
    });

    describe('headersWithToken', () => {
        it('should contain content-type', async () => {
            expect(await headersWithToken()).toEqual(expect.objectContaining({
                'content-type': 'application/json'
            }))
        });

        it.skip('should contain authorization', async () => {
            expect(await headersWithToken()).toEqual(expect.objectContaining({
                'authorization': 'application/json'
            }))
        });
    });

    describe.skip('get', () => { });
    describe.skip('post', () => { });
});
