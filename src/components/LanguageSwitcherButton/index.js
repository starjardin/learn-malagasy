import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

const styles = StyleSheet.create({
  buttonStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#06B6D4',
    borderRadius: 30,
    padding: 11,
  },

  textStyle: {
    textTransform: 'uppercase',
    fontStyle: 'normal',
    fontSize: 13,
    lineHeight: 16,
    color: '#FFFFFF',
  },
});

export default function Button({onPress, children, ...restProps}) { // The primary and secondary language should be props
  return (
    <TouchableOpacity style={styles.buttonStyles} activeOpacity={0.5}>
      <Text style={[styles.textStyle, {paddingRight: 10}]}>Eng</Text>
      {children}
      <Text style={[styles.textStyle, {paddingLeft: 10}]}>Mal</Text>
    </TouchableOpacity>
  );
}

Button.defaultProps = {
  onPress: () => {},
  children: null,
};

Button.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.node,
};
