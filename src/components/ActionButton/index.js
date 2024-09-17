import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  actionButtonStyles: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icons: {
    width: 16,
    height: 16,
  },
  TextStyle: {
    textTransform: 'capitalize',
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 19,
    textAlign: 'right',
    paddingRight: 10,
  },
});

export default function Button({
  onPressButton,
  buttonText,
  textColor,
  children, // children could be more precise (e.g. icon)
  style,
  rowRef,
  ...restProps
}) {
  const touchProps = {
    style: [styles.actionButtonStyles, {...style}],
    activeOpacity: 0.5,
    onPress: onPressButton,
  };
  return (
    <TouchableOpacity {...touchProps}>
      <Text style={[styles.TextStyle, {color: textColor}]} ref={rowRef}>
        {buttonText}
      </Text>
      {children}
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  buttonText: null,
  onPress: () => {},
  children: null,
};

Button.propTypes = {
  buttonText: PropTypes.string,
  onPress: PropTypes.func,
  children: PropTypes.node,
};
