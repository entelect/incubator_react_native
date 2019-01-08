import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import ToolbarWrapperView from '../../sub-components/toolbar-wrapper/toolbar-wrapper.view';
import { dimensionsService } from '../../services/services';
import textStyle from '../../assets/styles/text.style';
import colors from '../../assets/colors/colors';

const { width } = dimensionsService.getScreenDimensions();

export default class SecretScreenView extends Component {
    render() {
        const { navigation } = this.props;

        const visible = navigation.getParam('visible');
        const customRightToolbarButton = {
            icon: !visible ? 'visibility-off' : 'visibility',
            onPress: navigation => () => navigation.setParams({ visible: !visible })
        };

        return (
            <ToolbarWrapperView
                title="Secret"
                leftButtonType={ToolbarWrapperView.buttonTypes.back}
                rightButtonType={customRightToolbarButton}
                navigation={navigation}
            >
                <MaterialIcon
                    name={visible ? 'visibility-off' : 'visibility'}
                    color={colors.secondaryColor1}
                    size={width * 0.3}
                />
                {SecretScreenView.renderText()}
            </ToolbarWrapperView>
        );
    }

    static renderText() {
        return (
            <View>
                <Text style={[textStyle.header1, styles.text]}>{'This is a secret screen'}</Text>
                <Text style={[textStyle.header4, styles.text]}>
                    {
                        "It is not listed among the drawer menu items and it doesn't allow you open to the drawer menu. It has a back button instead of the regular menu button to indicate that it is not one of your app's main screens. It also has a custom right toolbar button that demonstrates how you can read and write navigation parameters."
                    }
                </Text>
                <Text style={[textStyle.header5, styles.text]}>
                    {
                        '(To see how to create such a screen, have a look at the secret-screen.navigation.js file)'
                    }
                </Text>
            </View>
        );
    }
}

SecretScreenView.propTypes = {
    navigation: PropTypes.object
};

const styles = StyleSheet.create({
    text: { paddingHorizontal: width * 0.1, paddingVertical: width * 0.02, textAlign: 'center' }
});
