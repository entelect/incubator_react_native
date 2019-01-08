import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { dimensionsService } from '../../services/services';
import textStyle from '../../assets/styles/text.style';
import colors from '../../assets/colors/colors';

const { width } = dimensionsService.getScreenDimensions();

export default class ToolbarWrapperView extends Component {
    static buttonTypes = {
        toggleDrawer: { icon: 'menu', onPress: navigation => () => navigation.toggleDrawer() },
        back: { icon: 'arrow-back', onPress: navigation => () => navigation.goBack() }
    };

    constructor(props) {
        super(props);

        this.renderToolbar = this.renderToolbar.bind(this);
        this.renderLeftButton = this.renderLeftButton.bind(this);
        this.renderRightButton = this.renderRightButton.bind(this);
    }

    componentDidMount() {}

    render() {
        const { style, children } = this.props;
        return (
            <View style={styles.toolbarWrapper}>
                {this.renderToolbar()}
                <ScrollView contentContainerStyle={[styles.childWrapper, style]}>
                    {children}
                </ScrollView>
            </View>
        );
    }

    renderToolbar() {
        return (
            <View style={styles.toolbar}>
                {this.renderLeftButton()}
                {this.renderTitle()}
                {this.renderRightButton()}
            </View>
        );
    }

    renderLeftButton() {
        const { navigation, leftButtonType } = this.props;
        if (_.isEmpty(leftButtonType)) {
            return <View style={[styles.button, styles.emptyButton]} />;
        }
        return ToolbarWrapperView.renderButton(
            leftButtonType.icon,
            leftButtonType.onPress(navigation)
        );
    }

    renderTitle() {
        return (
            <Text style={[textStyle.header1, textStyle.alternateColor, styles.title]}>
                {this.props.title}
            </Text>
        );
    }

    renderRightButton() {
        const { navigation, rightButtonType } = this.props;
        if (_.isEmpty(rightButtonType)) {
            return <View style={[styles.button, styles.emptyButton]} />;
        }
        return ToolbarWrapperView.renderButton(
            rightButtonType.icon,
            rightButtonType.onPress(navigation)
        );
    }

    static renderButton(icon, onPress) {
        return (
            <TouchableOpacity onPress={onPress} style={styles.button}>
                <MaterialIcon name={icon} size={width * 0.1} color={colors.alternateTextColor} />
            </TouchableOpacity>
        );
    }
}

ToolbarWrapperView.propTypes = {
    navigation: PropTypes.object,
    title: PropTypes.string,
    leftButtonType: PropTypes.shape({ icon: PropTypes.string, onnPress: PropTypes.func }),
    rightButtonType: PropTypes.shape({ icon: PropTypes.string, onnPress: PropTypes.func }),
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array]),
    children: PropTypes.any
};

ToolbarWrapperView.defaultProps = { leftButtonType: ToolbarWrapperView.buttonTypes.toggleDrawer };

const styles = StyleSheet.create({
    toolbarWrapper: {
        flex: 1
    },
    toolbar: {
        height: width * 0.125,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors.primaryColor1,
        shadowColor: colors.shadowColor,
        shadowOffset: { width: width * 0.002, height: width * 0.002 },
        shadowRadius: width * 0.008,
        shadowOpacity: 0.5,
        elevation: width * 0.008,
        zIndex: 5
    },
    childWrapper: {
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.backgroundColor
    },
    button: {
        flex: 0,
        marginHorizontal: width * 0.025,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyButton: { height: width * 0.1, width: width * 0.1 },
    title: {
        flex: 1,
        textAlign: 'center'
    }
});
