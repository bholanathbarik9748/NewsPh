import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {MagnifyingGlassIcon} from 'react-native-heroicons/solid';
import styles from './NavbarStyle';

const Navbar = ({navigation}) => {
  return (
    <View className="flex-row px-4 py-2 justify-between items-center bg-primary shadow-lg">
      <Text className="text-base mt-11 font-semibold text-white font-mono">
        NewsPh
      </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Search')}>
        <MagnifyingGlassIcon
          className="text-base font-semibold"
          style={[styles.text, styles.iconContainer]}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Navbar;
