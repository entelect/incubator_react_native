import { StyleSheet } from 'react-native';

import { dimensionsService } from '../../services/services';
import colors from '../colors/colors';

const { width } = dimensionsService.getScreenDimensions();

const textStyle = StyleSheet.create({
    header1: {
        fontFamily: 'Roboto-Black',
        color: colors.primaryTextColor,
        fontSize: width * 0.065
    },
    header2: {
        fontFamily: 'Roboto-Bold',
        color: colors.primaryTextColor,
        fontSize: width * 0.06
    },
    header3: {
        fontFamily: 'Roboto-Medium',
        color: colors.primaryTextColor,
        fontSize: width * 0.055
    },
    header4: {
        fontFamily: 'Roboto-Regular',
        color: colors.primaryTextColor,
        fontSize: width * 0.05
    },
    header5: {
        fontFamily: 'Roboto-Light',
        color: colors.primaryTextColor,
        fontSize: width * 0.045
    },
    header6: {
        fontFamily: 'Roboto-Thin',
        color: colors.primaryTextColor,
        fontSize: width * 0.04
    },
    shadow: {
        textShadowColor: colors.shadowColor,
        textShadowOffset: { width: width * 0.002, height: width * 0.002 },
        textShadowRadius: width * 0.008
    },
    secondaryColor: {
        color: colors.secondaryTextColor
    },
    alternateColor: {
        color: colors.alternateTextColor
    },
    activeDrawerItemColor: { color: colors.alternateTextColor },
    inactiveDrawerItemColor: { color: colors.primaryColor1 }
});

export default textStyle;
