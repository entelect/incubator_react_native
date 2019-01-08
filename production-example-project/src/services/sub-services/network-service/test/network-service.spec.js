import { NetInfo } from 'react-native';
import moxios from 'moxios';

import networkService from '../../network-service/network-service';

describe('accountService - Unit Test', () => {
    const defaultConnectionInfo = {
        connectionInfo: { type: networkService.connectionTypes.cellular }
    };

    NetInfo.getConnectionInfo = jest.fn().mockName('NetInfo.getConnectionInfo');

    beforeEach(() => {
        moxios.install();
        NetInfo.getConnectionInfo.mockClear();
        NetInfo.getConnectionInfo.mockImplementation(() => Promise.resolve(defaultConnectionInfo));
    });

    afterEach(() => {
        moxios.uninstall();
    });

    function mockRequestResponse(mockedResponse, callback) {
        moxios.wait(() =>
            moxios.requests
                .mostRecent()
                .respondWith(mockedResponse)
                .then(callback)
        );
    }

    function validateServiceOutput(request, expectedOutput, done) {
        return () =>
            request
                .then(actualOutput => {
                    expect(actualOutput).toEqual(expectedOutput);
                    done();
                })
                .catch(error => {
                    expect(error).toEqual(expectedOutput);
                    done();
                });
    }

    describe('makeGet', () => {
        it('should handle a successful GET request', done => {
            const request = networkService.makeGet('some-url');
            const mockedResponse = { status: 200, response: { some: 'data' } };
            const expectedOutput = { some: 'data' };
            mockRequestResponse(
                mockedResponse,
                validateServiceOutput(request, expectedOutput, done)
            );
        });
        it('should handle a successful GET request with a custom config', done => {
            const config = {
                responseManipulator: response => response.data.message[0]
            };
            const request = networkService.makeGet('some-url', config);
            const mockedResponse = { status: 200, response: { message: 'message' } };
            const expectedOutput = 'm';
            mockRequestResponse(
                mockedResponse,
                validateServiceOutput(request, expectedOutput, done)
            );
        });
        it('should handle a failed GET request', done => {
            const request = networkService.makeGet('some-url');
            const mockedResponse = { status: 400, response: { error: 'some error' } };
            const expectedOutput = 'some error';
            mockRequestResponse(
                mockedResponse,
                validateServiceOutput(request, expectedOutput, done)
            );
        });
        it('should handle an offline GET request', done => {
            NetInfo.getConnectionInfo.mockImplementation(() =>
                Promise.resolve({ type: networkService.connectionTypes.none })
            );
            networkService.makeGet('some-url').then(actualOutput => {
                expect(actualOutput).toBeNull();
                done();
            });
        });
        it('should handle an unknown network GET request', done => {
            NetInfo.getConnectionInfo.mockImplementation(() =>
                Promise.resolve({ type: networkService.connectionTypes.unknown })
            );
            networkService.makeGet('some-url').then(actualOutput => {
                expect(actualOutput).toBeNull();
                done();
            });
        });
    });

    describe('makePost', () => {
        it('should handle a successful POST request with a custom config', done => {
            const config = {
                responseManipulator: response => response.data.message[0]
            };
            const request = networkService.makePost('some-url', { input: 'data' }, config);
            const mockedResponse = { status: 200, response: { message: 'message' } };
            const expectedOutput = 'm';
            mockRequestResponse(
                mockedResponse,
                validateServiceOutput(request, expectedOutput, done)
            );
        });
        it('should handle a failed POST request', done => {
            const request = networkService.makePost('some-url', { input: 'data' });
            const mockedResponse = { status: 400, response: { error: 'some error' } };
            const expectedOutput = 'some error';
            mockRequestResponse(
                mockedResponse,
                validateServiceOutput(request, expectedOutput, done)
            );
        });
        it('should handle an offline POST request', done => {
            NetInfo.getConnectionInfo.mockImplementation(() =>
                Promise.resolve({ type: networkService.connectionTypes.none })
            );
            networkService.makePost('some-url', { input: 'data' }).then(actualOutput => {
                expect(actualOutput).toBeNull();
                done();
            });
        });
        it('should handle an unknown network POST request', done => {
            NetInfo.getConnectionInfo.mockImplementation(() =>
                Promise.resolve({ type: networkService.connectionTypes.unknown })
            );
            networkService.makePost('some-url', { input: 'data' }).then(actualOutput => {
                expect(actualOutput).toBeNull();
                done();
            });
        });
    });

    describe('makeDelete', () => {
        it('should handle a successful DELETE request with a custom config', done => {
            const config = {
                responseManipulator: response => response.data.message[0]
            };
            const request = networkService.makeDelete('some-url', config);
            const mockedResponse = { status: 200, response: { message: 'message' } };
            const expectedOutput = 'm';
            mockRequestResponse(
                mockedResponse,
                validateServiceOutput(request, expectedOutput, done)
            );
        });
        it('should handle a failed DELETE request', done => {
            const request = networkService.makeDelete('some-url');
            const mockedResponse = { status: 400, response: { error: 'some error' } };
            const expectedOutput = 'some error';
            mockRequestResponse(
                mockedResponse,
                validateServiceOutput(request, expectedOutput, done)
            );
        });
        it('should handle an offline DELETE request', done => {
            NetInfo.getConnectionInfo.mockImplementation(() =>
                Promise.resolve({ type: networkService.connectionTypes.none })
            );
            networkService.makeDelete('some-url').then(actualOutput => {
                expect(actualOutput).toBeNull();
                done();
            });
        });
        it('should handle an unknown network DELETE request', done => {
            NetInfo.getConnectionInfo.mockImplementation(() =>
                Promise.resolve({ type: networkService.connectionTypes.unknown })
            );
            networkService.makeDelete('some-url').then(actualOutput => {
                expect(actualOutput).toBeNull();
                done();
            });
        });
    });

    describe('makePut', () => {
        it('should handle a successful PUT request with a custom config', done => {
            const config = {
                responseManipulator: response => response.data.message[0]
            };
            const request = networkService.makePut('some-url', { input: 'data' }, config);
            const mockedResponse = { status: 200, response: { message: 'message' } };
            const expectedOutput = 'm';
            mockRequestResponse(
                mockedResponse,
                validateServiceOutput(request, expectedOutput, done)
            );
        });
        it('should handle a failed PUT request', done => {
            const request = networkService.makePut('some-url', { input: 'data' });
            const mockedResponse = { status: 400, response: { error: 'some error' } };
            const expectedOutput = 'some error';
            mockRequestResponse(
                mockedResponse,
                validateServiceOutput(request, expectedOutput, done)
            );
        });
        it('should handle an offline PUT request', done => {
            NetInfo.getConnectionInfo.mockImplementation(() =>
                Promise.resolve({ type: networkService.connectionTypes.none })
            );
            networkService.makePut('some-url', { input: 'data' }).then(actualOutput => {
                expect(actualOutput).toBeNull();
                done();
            });
        });
        it('should handle an unknown network PUT request', done => {
            NetInfo.getConnectionInfo.mockImplementation(() =>
                Promise.resolve({ type: networkService.connectionTypes.unknown })
            );
            networkService.makePut('some-url', { input: 'data' }).then(actualOutput => {
                expect(actualOutput).toBeNull();
                done();
            });
        });
    });
});
