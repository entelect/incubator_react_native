import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LottieView from 'lottie-react-native';

import { dimensionsService } from '../../services/services';
import borderStyle from '../../assets/styles/border.style';
import textStyle from '../../assets/styles/text.style';
import colors from '../../assets/colors/colors';
import dotLoaderAnimation from '../../assets/animations/dot-loader.json';

const { width } = dimensionsService.getScreenDimensions();

export default class ButtonView extends Component {
    constructor(props) {
        super(props);

        this.renderTitle = this.renderTitle.bind(this);
    }

    render() {
        const { isLoading, style, contentStyle, children, disabled, onPress } = this.props;
        const buttonStyle = disabled
            ? [styles.defaultStyle, borderStyle.radiusOnlyBorder, style, styles.disabled]
            : [styles.defaultStyle, borderStyle.radiusOnlyBorder, style];
        const buttonContentStyle = isLoading
            ? [styles.defaultContentStyle, contentStyle, styles.loading]
            : [styles.defaultContentStyle, contentStyle];
        return (
            <TouchableOpacity
                style={buttonStyle}
                onPress={onPress}
                disabled={isLoading || disabled}
            >
                <View style={buttonContentStyle}>
                    {this.renderTitle()}
                    {children}
                </View>
                {this.renderLoader()}
            </TouchableOpacity>
        );
    }

    renderTitle() {
        const { title, titleStyle } = this.props;
        if (!title) {
            return null;
        }
        return (
            <Text
                style={[
                    textStyle.header2,
                    textStyle.alternateColor,
                    styles.defaultText,
                    titleStyle
                ]}
            >
                {title}
            </Text>
        );
    }

    renderLoader() {
        if (!this.props.isLoading) {
            return null;
        }
        return <LottieView style={styles.loader} source={dotLoaderAnimation} autoPlay loop />;
    }
}

ButtonView.propTypes = {
    isLoading: PropTypes.bool,
    title: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    contentStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    titleStyle: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    children: PropTypes.any,
    disabled: PropTypes.bool,

    onPress: PropTypes.func
};

const styles = StyleSheet.create({
    defaultStyle: {
        width: '90%',
        marginHorizontal: '5%',
        marginVertical: width * 0.025,
        padding: width * 0.0325,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primaryColor1
    },
    disabled: { opacity: 0.5 },
    loading: { opacity: 0.25 },
    defaultContentStyle: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    defaultText: { textAlign: 'center' },
    loader: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '275%',
        overflow: 'hidden'
    }
});
