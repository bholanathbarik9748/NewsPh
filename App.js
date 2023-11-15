import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

// import Files
import HomeScreen from './src/pages/HomeScreen';
import splash from './src/pages/Splash';
import Search from './src/pages/Search';
import NewsView from './src/pages/NewsView';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={splash} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="NewsView" component={NewsView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
