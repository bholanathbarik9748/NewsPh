import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navbar from '../components/Homepage/Navbar/Navbar';
import SearchBar from '../components/Search/Navbar/SearchBar';

const Search = ({navigation}) => {
  return (
    <>
      <SearchBar navigation={navigation} />
    </>
  );
};

export default Search;

const styles = StyleSheet.create({});
