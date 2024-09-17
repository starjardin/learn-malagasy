import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView, View, Text, TouchableOpacity} from 'react-native';
import Button from '../ActionButton';
import ArrowRight from '../../icons/arrow-right.svg';
import Correct from '../../icons/success-green';
import Incorrect from '../../icons/x-error.svg';
import {LanguageContext} from '../../context/globalContext';
import {listItemStyles} from '../../styles/ListemStyles';
import {ListContext} from '../List';

// I choose to render the text and the color from the props, just in case of change in the future

export default function ListItem({item, name, onRowPress, disabled}) {
  const {state} = useContext(LanguageContext);
  const {itemSelected, setItemSelected} = useContext(ListContext);
  const {phraseToLearn} = state;

  function handlePress() {
    if (onRowPress) { // Why would onRowPress be undefined? Every list item in the app is clickable
      onRowPress();
    }
  }

  const buttons =
    name === phraseToLearn.name?.en && itemSelected ? (
      <Button buttonText={'correct'} textColor={'#06D440'}>
        <Correct />
      </Button>
    ) : phraseToLearn.name?.en && itemSelected === item.id ? (
      <Button buttonText={'wrong'} textColor={'#D4068E'}>
        <Incorrect />
      </Button>
    ) : (
      <Button buttonText={'Pick'} textColor={'#06B6D4'}>
        <ArrowRight />
      </Button>
    );

  const listItemView = (
    <View style={listItemStyles.itemStyles}>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={[listItemStyles.textStyles]}>
        {name}
      </Text>
      {buttons}
    </View>
  );

  const touchProps = {
    style: [listItemStyles.containerStyles],
    disabled: disabled ? disabled : false,
    onPress: () => {
      handlePress(name);
      setItemSelected(item.id);
    },
  };

  return (
    <SafeAreaView>
      <TouchableOpacity {...touchProps}>{listItemView}</TouchableOpacity>
    </SafeAreaView>
  );
}

// Default prop types // just ignore if there is no props
ListItem.defaultProps = {
  name: null,
  onRowPress: null,
};

ListItem.propTypes = {
  name: PropTypes.string,
  onRowPress: PropTypes.func,
};
