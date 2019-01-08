import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import ToolbarWrapperView from '../../sub-components/toolbar-wrapper/toolbar-wrapper.view';
import { dimensionsService } from '../../services/services';
import textStyle from '../../assets/styles/text.style';
import colors from '../../assets/colors/colors';

const { width } = dimensionsService.getScreenDimensions();

export default class HomeScreenView extends Component {
    render() {
        return (
            <ToolbarWrapperView title="Home" navigation={this.props.navigation}>
                <MaterialIcon name="home" color={colors.primaryColor2} size={width * 0.3} />
                {HomeScreenView.renderText()}
            </ToolbarWrapperView>
        );
    }

    static renderText() {
        return (
            <View>
                <Text style={[textStyle.header1, styles.text]}>{'Welcome to the Home Screen'}</Text>
                <Text style={[textStyle.header4, styles.text]}>
                    {
                        'Press the menu button or swipe from the left to open the drawer navigation menu'
                    }
                </Text>
            </View>
        );
    }
}

HomeScreenView.propTypes = {
    navigation: PropTypes.object
};

const styles = StyleSheet.create({
    text: {
        paddingHorizontal: width * 0.1,
        paddingVertical: width * 0.02,
        textAlign: 'center'
    }
});
