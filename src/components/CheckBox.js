import PropTypes from 'prop-types';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import color from '../constants/color'

export default CheckBox = ({ data, onCheckBoxPressed }) => {

    return (
        <Icon.Button
            data={data}
            name={data.isCompleted ? 'check-box' : 'check-box-outline-blank'}
            backgroundColor={color.TRANSPARENT}
            color={color.BLACK}
            underlayColor={color.TRANSPARENT}
            activeOpacity={0.6}
            onPress={onCheckBoxPressed}
        />
    )
}

CheckBox.propTypes = {
    data: PropTypes.object.isRequired,
    onCheckBoxPressed: PropTypes.func.isRequired
}
