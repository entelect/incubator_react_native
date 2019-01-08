import { StyleSheet } from 'react-native';

import { dimensionsService } from '../../services/services';
import colors from '../colors/colors';

const { width } = dimensionsService.getScreenDimensions();

const borderStyle = StyleSheet.create({
    defaultBorder: {
        borderWidth: width * 0.004,
        borderRadius: width * 0.012,
        borderColor: colors.primaryColor1
    },
    radiusOnlyBorder: {
        borderRadius: width * 0.012
    }
});

export default borderStyle;
