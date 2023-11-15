import React, {useState} from 'react';
import {SafeAreaView, ActivityIndicator} from 'react-native';
import WebView from 'react-native-webview';

// Import Files
import Navbar from '../components/Homepage/Navbar/Navbar';
import Spinner from '../components/Homepage/Spinner/Spinner';

const NewsView = ({navigation, route}) => {
  const {webLink} = route.params;
  const [isLoading, setIsLoading] = useState(true);

  const ShowLoader = () => {
    setIsLoading(false);
  };

  return (
    <>
      <Navbar />
      {isLoading && <Spinner />}
      <WebView className="flex-1" source={{uri: webLink}} onLoad={ShowLoader} />
    </>
  );
};

export default NewsView;
