import { AsyncStorage } from 'react-native';
import _ from 'lodash';

import accountUrls from './account-service-urls';
import networkService from '../network-service/network-service';

const userTokenKey = 'USER_TOKEN';

function login(username, password) {
    const url = accountUrls.loginUrl();
    return networkService
        .makePost(url, { username, password })
        .then(data => {
            const userToken = _.get(data, 'token', null);
            /* Here you can validate your API response and throw errors accordingly */
            if (!userToken) {
                throw 'Something went wrong while trying to login';
            }
            return setUserToken(userToken);
        })
        .catch(error => {
            /* Here you can interpret and clean up your API error and rethrow it accordingly */
            throw error ? error : 'Something went wrong while trying to login';
        });
}

function logout() {
    return deleteUserToken();
}

function getUserToken() {
    return AsyncStorage.getItem(userTokenKey);
}

function setUserToken(token) {
    return AsyncStorage.setItem(userTokenKey, token);
}

function deleteUserToken() {
    return AsyncStorage.removeItem(userTokenKey);
}

export default {
    login,
    logout,
    getUserToken
};
