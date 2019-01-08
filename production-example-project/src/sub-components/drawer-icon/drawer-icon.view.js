import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import { dimensionsService } from '../../services/services';

const { width } = dimensionsService.getScreenDimensions();

export default class ToolbarButtonView extends Component {
    render() {
        const { icon, tintColor, style } = this.props;
        return <MaterialIcon name={icon} size={width * 0.05} color={tintColor} style={style} />;
    }
}

ToolbarButtonView.propTypes = {
    icon: PropTypes.string,
    tintColor: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.array])
};
