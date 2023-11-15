import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as Animatable from 'react-native-animatable';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Home');
    }, 2000);
  }, []);

  return (
    <View className="flex-1 justify-center items-center bg-primary">
      <Animatable.Text
        className="text-white text-2xl font-bold"
        animation="fadeInDown"
        duration={1000}>
        NewsPh
      </Animatable.Text>
    </View>
  );
};

export default Splash;
