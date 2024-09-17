import React from 'react';
import {View} from 'react-native';

import Navbar, {styles} from '../components/Navbar';
import Answers from '../components/ListOfAnswers/';
// File name misspelled
export default ({route, navigation}) => {
  return (
    <View style={styles.container}>
      <Navbar page="LearningScreen" navigation={navigation} />
      <Answers route={route} navigation={navigation} />
    </View>
  );
};
