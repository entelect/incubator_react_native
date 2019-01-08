import { Dimensions } from 'react-native';

function getScreenDimensions() {
    const { height, width } = Dimensions.get('window');

    const max = Math.max(height, width);
    const min = Math.min(height, width);

    return { height: max, width: min };
}

export default {
    getScreenDimensions
};
