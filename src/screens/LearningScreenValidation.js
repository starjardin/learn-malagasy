import React, {useContext} from 'react';
import {View} from 'react-native';

import List from '../components/List';
import Button from '../components/NextButton';
import PhraseTextarea from '../components/PhraseTextarea';
import {LanguageContext} from '../context/globalContext';
import Navbar from '../components/Navbar';
import {containerStyles} from '../styles/containerStyles';
import Subtitle from '../components/Subtitle';
import {ListContext} from '../components/List';

export default ({route, navigation}) => {
  const {state, dispatch} = useContext(LanguageContext);
  const {setItemSelected} = useContext(ListContext);
  const phrase = state.phraseToLearn;
  const category = state.categoryToLearn;
  const {shuffledAnswers} = route.params;

  const ListOfView = (
    <List
      data={shuffledAnswers}
      buttonText={'Pick'}
      textColor={'#00ffff'}
      disabled={true}
    />
  );
  // The switching between the screens is slow, is there another way?
  return (
    <View style={containerStyles.container}>
      <Navbar page="HomeScreenValidation" navigation={navigation} />
      <Subtitle text={`Category: ${category}`} />
      <PhraseTextarea phrase={phrase.name.mg} />
      <Subtitle text={'Pick a solution:'} />
      {ListOfView}
      <View style={containerStyles.nextButtonStyle}>
        <Button
          buttonText={'Next'}
          onPress={() => {
            navigation.navigate('LearningScreen');
            setItemSelected('');
            //TODO: //May be I could delete an item here// or put it in the seen phrases dont leave todos in main branch
            dispatch({
              type: 'SEEN_ITEM',
              payload: phrase,
            });
          }}
        />
      </View>
    </View>
  );
};
