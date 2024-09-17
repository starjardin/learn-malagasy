import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  HeaderStyles: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E5E5E5',
    paddingBottom: 11,
    paddingLeft: 22,
    paddingTop: 14,
    paddingRight: 22,
  },

  textStyle: {
    fontWeight: '600',
    fontSize: 30,
    lineHeight: 36,
    color: '#06B6D4',
  },
});

// I choose to render the text and the color from the props, just in case of change in the future
// This is the wrong element, the overall app header instead of the section header.
export default function SectionHeader({headerText, textColor}) {
  return (
    <SafeAreaView>
      <View style={styles.HeaderStyles}>
        <Text style={[styles.textStyle, textColor && {color: textColor}]}>
          {headerText ? headerText : 'Learn Malagasy'}
        </Text>
      </View>
    </SafeAreaView>
  );
}

// Default prop types // just ignore if there is no props
SectionHeader.defaultProps = {
  headerText: null,
  textColor: null,
};

SectionHeader.propTypes = {
  HeaderText: PropTypes.string,
  textColor: PropTypes.string,
};
