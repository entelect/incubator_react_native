import { NetInfo } from 'react-native';
import axios from 'axios';
import _ from 'lodash';

const connectionTypes = { none: 'none', wifi: 'wifi', cellular: 'cellular', unknown: 'unknown' };
const defaultConfig = {
    responseManipulator: response => response.data
    /* Add any additional default global config here */
};

function makeGet(url, config) {
    const defaultGetConfig = {
        /* Add any default GET config here */
    };
    const { requestConfig, responseManipulator } = _.assign(
        defaultConfig,
        defaultGetConfig,
        config
    );

    return NetInfo.getConnectionInfo().then(connectionInfo => {
        if (
            connectionInfo.type === connectionTypes.none ||
            connectionInfo.type === connectionTypes.unknown
        ) {
            /* Here you can handle caching for offline cases by using React Native's AsyncStorage */
            return null;
        }

        return axios
            .get(url, requestConfig)
            .then(responseManipulator)
            .catch(handleError(url));
    });
}

function makePost(url, data, config) {
    const defaultPostConfig = {
        /* Add any default POST config here */
    };
    const { requestConfig, responseManipulator } = _.assign(
        defaultConfig,
        defaultPostConfig,
        config
    );

    return NetInfo.getConnectionInfo().then(connectionInfo => {
        if (
            connectionInfo.type === connectionTypes.none ||
            connectionInfo.type === connectionTypes.unknown
        ) {
            /* Here you can handle caching for offline cases by using React Native's AsyncStorage */
            return null;
        }

        return axios
            .post(url, data, requestConfig)
            .then(responseManipulator)
            .catch(handleError(url));
    });
}

function makeDelete(url, config) {
    const defaultDeleteConfig = {
        /* Add any default DELETE config here */
    };
    const { requestConfig, responseManipulator } = _.assign(
        defaultConfig,
        defaultDeleteConfig,
        config
    );

    return NetInfo.getConnectionInfo().then(connectionInfo => {
        if (
            connectionInfo.type === connectionTypes.none ||
            connectionInfo.type === connectionTypes.unknown
        ) {
            /* Here you can handle caching for offline cases by using React Native's AsyncStorage */
            return null;
        }

        return axios
            .delete(url, requestConfig)
            .then(responseManipulator)
            .catch(handleError(url));
    });
}

function makePut(url, data, config) {
    const defaultPutConfig = {
        /* Add any default PUT config here */
    };
    const { requestConfig, responseManipulator } = _.assign(
        defaultConfig,
        defaultPutConfig,
        config
    );

    return NetInfo.getConnectionInfo().then(connectionInfo => {
        if (
            connectionInfo.type === connectionTypes.none ||
            connectionInfo.type === connectionTypes.unknown
        ) {
            /* Here you can handle caching for offline cases by using React Native's AsyncStorage */
            return null;
        }

        return axios
            .put(url, data, requestConfig)
            .then(responseManipulator)
            .catch(handleError(url));
    });
}

function handleError(url) {
    return error => {
        console.warn(`WARNING: ${error.message}\nURL: ${url}`);
        /* Here you can extract the general error message structure from you API and rethrow it */
        throw _.get(error, 'response.data.error', null);
    };
}

export default {
    connectionTypes,
    makeGet,
    makePost,
    makeDelete,
    makePut
};
