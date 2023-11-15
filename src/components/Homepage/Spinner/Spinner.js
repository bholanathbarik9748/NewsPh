import {Text, Image, View} from 'react-native';
import React, {useEffect, useState} from 'react';

import Loader from '../../../assets/image/Spinner.gif';

const Spinner = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 5000);
  }, []);

  return (
    <View className="flex flex-col justify-center items-center">
      {isLoading && <Text>No Result Found</Text>}
      {!isLoading && <Image source={Loader} />}
    </View>
  );
};

export default Spinner;
