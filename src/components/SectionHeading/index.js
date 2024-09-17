import React from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Button from '../ActionButton';
import ArrowRight from '../../icons/arrow-right.svg';

const styles = StyleSheet.create({
  listItemStyles: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 15,
    paddingTop: 15,
    paddingRight: 20,
    paddingLeft: 16,
  },
  textStyles: {
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 19,
    color: '#111827',
  },
});

// I choose to render the text and the color from the props, just in case of change in the future
// This is not the SectionHeading but the listItem
export default function ListItemHeading({actionText, buttonText}) {
  return (
    <SafeAreaView style={styles.containerStyles}>
      <View style={styles.listItemStyles}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.textStyles}>
          {actionText ? actionText : 'All'}
        </Text>
        <Button
          buttonText={buttonText ? buttonText : 'Learn'}
          textColor="#06B6D4">
          <ArrowRight />
        </Button>
      </View>
    </SafeAreaView>
  );
}

// Default prop types // just ignore if there is no props
ListItemHeading.defaultProps = {
  actionText: null,
  buttonText: null,
};

ListItemHeading.propTypes = {
  actionText: PropTypes.string,
  buttonText: PropTypes.string,
};
