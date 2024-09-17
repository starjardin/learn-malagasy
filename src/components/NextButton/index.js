import React from 'react';
import PropTypes from 'prop-types';
import {TouchableHighlight, StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  nextButtonStyles: {
    backgroundColor: '#06B6D4',
    borderRadius: 30,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 19,
    color: '#FFFFFF',
    paddingTop: 11,
    paddingBottom: 11,
    paddingRight: 31,
    paddingLeft: 27, // Item is not centered
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    minHeight: 40,
    minWidth: 90,
  },

  textColor: {
    color: '#FFFFFF',
  },

  disabledButtonStyles: {
    backgroundColor: '#F9F9F9',
    borderStyle: 'solid',
    borderColor: '#06B6D4',
    borderWidth: 1,
    borderRadius: 30,
  },

  textColorDisabledButtoon: {
    color: '#06B6D4',
  },
});

export default function Button({onPress, buttonText, disabled, ...restProps}) { // rest props is not necessary
  return (
    <TouchableHighlight
      style={[styles.nextButtonStyles, disabled && styles.disabledButtonStyles]}
      onPress={disabled ? () => null : onPress}
      {...restProps}>
      <Text
        style={[styles.textColor, disabled && styles.textColorDisabledButtoon]}>
        {buttonText}
      </Text>
    </TouchableHighlight>
  );
}

Button.defaultProps = {
  buttonText: null,
  disabled: false,
  onPress: () => {},
};

Button.propTypes = { // nice
  buttonText: PropTypes.string.isRequired,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
};
