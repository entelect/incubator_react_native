import { AsyncStorage } from 'react-native';

import accountService from '../account-service';
import networkService from '../../network-service/network-service';

describe('accountService - Unit Test', () => {
    AsyncStorage.getItem = jest
        .fn()
        .mockName('AsyncStorage.getItem')
        .mockImplementation(() => Promise.resolve('some_token'));
    AsyncStorage.setItem = jest
        .fn()
        .mockName('AsyncStorage.setItem')
        .mockImplementation(Promise.resolve);
    AsyncStorage.removeItem = jest
        .fn()
        .mockName('AsyncStorage.removeItem')
        .mockImplementation(Promise.resolve);
    networkService.makePost = jest.fn().mockName('networkService.makePost');

    beforeEach(() => {
        AsyncStorage.getItem.mockClear();
        AsyncStorage.setItem.mockClear();
        AsyncStorage.removeItem.mockClear();
        networkService.makePost.mockClear();
    });

    describe('login', () => {
        it('should log a user in successfully', done => {
            networkService.makePost.mockImplementation(() =>
                Promise.resolve({ token: 'some-token' })
            );
            accountService.login('username', 'password').then(() => {
                expect(AsyncStorage.setItem).toHaveBeenCalledWith('USER_TOKEN', 'some-token');
                expect(AsyncStorage.setItem).toHaveBeenCalledTimes(1);
                done();
            });
        });

        it('should handle a invalid login request', done => {
            networkService.makePost.mockImplementation(() => Promise.resolve(null));
            accountService.login('username', 'password').catch(error => {
                expect(error).toEqual('Something went wrong while trying to login');
                expect(AsyncStorage.setItem).toHaveBeenCalledTimes(0);
                done();
            });
        });

        it('should handle an failed login request', done => {
            networkService.makePost.mockImplementation(() => Promise.reject('error message'));
            accountService.login('username', 'password').catch(error => {
                expect(error).toEqual('error message');
                expect(AsyncStorage.setItem).toHaveBeenCalledTimes(0);
                done();
            });
        });

        it('should handle an failed login request when no error message is provided', done => {
            networkService.makePost.mockImplementation(() => Promise.reject());
            accountService.login('username', 'password').catch(error => {
                expect(error).toEqual('Something went wrong while trying to login');
                expect(AsyncStorage.setItem).toHaveBeenCalledTimes(0);
                done();
            });
        });
    });

    describe('logout', () => {
        it('should log a user out successfully', done => {
            accountService.logout().then(() => {
                expect(AsyncStorage.removeItem).toHaveBeenCalledWith('USER_TOKEN');
                expect(AsyncStorage.removeItem).toHaveBeenCalledTimes(1);
                done();
            });
        });
    });

    describe('getUserToken', () => {
        it('should retrieve the user token', done => {
            accountService.getUserToken().then(() => {
                expect(AsyncStorage.getItem).toHaveBeenCalledWith('USER_TOKEN');
                expect(AsyncStorage.getItem).toHaveBeenCalledTimes(1);
                done();
            });
        });
    });
});
