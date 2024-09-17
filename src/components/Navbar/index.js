import React, {useContext} from 'react';

import {View, StyleSheet} from 'react-native';
import ToolButton from '../ToolButton';
import LanguageSwitcherButton from '../LanguageSwitcherButton';
import ChevronLeft from '../../icons/chevron-left';
import Settings from '../../icons/setting-icon.svg';
import Add from '../../icons/add.svg';
import Tick from '../../icons/succes-white.svg';
import Doubletick from '../../icons/success-double.svg';
import LanguageSwitcherIcon from '../../icons/lang-switcher';
import {ListContext} from '../List';

export const styles = StyleSheet.create({
  container: {
    marginLeft: 23,
    marginRight: 23,
    marginTop: 35,
  },
  list: {
    flexBasis: '50%',
  },
  buttonContainer: {
    marginBottom: 20,
    flexDirection: 'row',
  },
  textStyles: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 18,
    lineHeight: 22,
    color: '#111827',
    paddingBottom: 15,
    // marginTop: 15,
  },
  outset: {
    marginRight: 10,
  },
});

export const Outset = () => {
  return <View style={styles.outset} />;
};
// I like it
export default function Navbar({navigation, page}) {
  const {setItemSelected} = useContext(ListContext);
  return (
    <View>
      {page === 'Home' ? (
        <View style={styles.buttonContainer}>
          <ToolButton backgroundColor="#06B6D4">
            <Add />
          </ToolButton>
          <Outset />
          <LanguageSwitcherButton>
            <LanguageSwitcherIcon />
          </LanguageSwitcherButton>
          <Outset />
          <ToolButton backgroundColor="#06B6D4">
            <Tick />
          </ToolButton>
          <Outset />
          <ToolButton backgroundColor="#06B6D4">
            <Doubletick />
          </ToolButton>
          <Outset />
          <ToolButton backgroundColor="#06B6D4">
            <Settings />
          </ToolButton>
        </View>
      ) : (
        <View style={styles.buttonContainer}>
          <ToolButton
            backgroundColor="#06B6D4"
            onPress={() => {
              navigation.navigate('Home');
              setItemSelected('');
            }}>
            <ChevronLeft />
          </ToolButton>
          <Outset />
          <ToolButton backgroundColor="#06B6D4">
            <Settings />
          </ToolButton>
          <Outset />
          <LanguageSwitcherButton>
            <LanguageSwitcherIcon />
          </LanguageSwitcherButton>
        </View>
      )}
    </View>
  );
}
