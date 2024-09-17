import React, {useContext, useState} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {LanguageContext} from '../../context/globalContext';
import ListItem from '../ListItem';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';

export default function List({
  data,
  onRowPress,
  navigation,
  navigateTo,
  disabled,
}) {
  const {dispatch} = useContext(LanguageContext);

  function handlePress(item) {
    navigation && navigation.navigate(`${navigateTo}`, {item}); // Is the template string necessary?
    if (onRowPress) {
      onRowPress();
      dispatch({
        type: 'FIND_ANSWER',
        payload: item,
      });
    }
  }

  const renderItems = ({item}) => {
    return (
      <ListItem
        disabled={disabled}
        item={item}
        name={item.name.en}
        onRowPress={() => handlePress(item)}
      />
    );
  };

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={renderItems}
        keyExtractor={item => uuidv4()}
      />
    </SafeAreaView>
  );
}

// The following code is to save id only shared between the list component
const ListContext = React.createContext();

const ListContextProvider = ({children}) => {
  const [itemSelected, setItemSelected] = useState('');
  return (
    <ListContext.Provider
      value={{
        itemSelected,
        setItemSelected,
      }}>
      {children}
    </ListContext.Provider>
  );
};

export {ListContextProvider, ListContext};
